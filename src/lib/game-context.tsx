'use client';

import { createContext, useContext, useCallback, useState, type ReactNode } from 'react';
import type {
  GameState,
  Perspective,
  DiseaseType,
  ChoiceRecord,
  EndingType,
  StoryNode,
  Choice,
  KnowledgePopup,
} from './game-types';
import { femaleData } from './game-data-female';
import { maleData } from './game-data-male';
import type { PerspectiveData } from './game-types';

interface GameContextValue {
  state: GameState;
  currentNode: StoryNode | null;
  perspectiveData: PerspectiveData | null;
  knowledgePopup: KnowledgePopup | null;
  startGame: (perspective: Perspective) => void;
  makeChoice: (choice: Choice) => void;
  proceedToNext: () => void;
  dismissKnowledge: () => void;
  resetGame: () => void;
  getEndingDetail: () => { type: EndingType; title: string; narrative: string; score: number; knowledgeSummary: string[] } | null;
}

const initialState: GameState = {
  perspective: null,
  disease: null,
  currentNodeId: null,
  choiceHistory: [],
  isStarted: false,
  isEnded: false,
};

const GameContext = createContext<GameContextValue | null>(null);

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}

function getDataForPerspective(perspective: Perspective): PerspectiveData {
  return perspective === 'female' ? femaleData : maleData;
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(initialState);
  const [knowledgePopup, setKnowledgePopup] = useState<KnowledgePopup | null>(null);

  const perspectiveData = state.perspective ? getDataForPerspective(state.perspective) : null;
  const currentNode =
    state.currentNodeId && perspectiveData ? perspectiveData.nodes[state.currentNodeId] ?? null : null;

  const startGame = useCallback((perspective: Perspective) => {
    const data = getDataForPerspective(perspective);
    setState({
      perspective,
      disease: data.diseaseAssigned,
      currentNodeId: data.startNodeId,
      choiceHistory: [],
      isStarted: true,
      isEnded: false,
    });
    // Show intro knowledge if any
    const startNode = data.nodes[data.startNodeId];
    if (startNode?.knowledge) {
      setKnowledgePopup(startNode.knowledge);
    } else {
      setKnowledgePopup(null);
    }
  }, []);

  const makeChoice = useCallback(
    (choice: Choice) => {
      const record: ChoiceRecord = {
        nodeId: state.currentNodeId ?? '',
        choiceId: choice.id,
        tags: choice.tags ?? [],
        isCorrect: choice.isCorrect,
        timestamp: Date.now(),
      };

      setState((prev) => {
        const data = prev.perspective ? getDataForPerspective(prev.perspective) : null;
        if (!data) return prev;
        const targetNode = data.nodes[choice.nextNodeId];
        return {
          ...prev,
          currentNodeId: choice.nextNodeId,
          choiceHistory: [...prev.choiceHistory, record],
          isEnded: targetNode?.isEnding ?? false,
        };
      });

      // Show knowledge popup for the choice
      setKnowledgePopup(choice.knowledge);
    },
    [state.currentNodeId]
  );

  const proceedToNext = useCallback(() => {
    if (!currentNode?.nextNodeId || !perspectiveData) return;
    const nextNode = perspectiveData.nodes[currentNode.nextNodeId];
    setState((prev) => ({
      ...prev,
      currentNodeId: currentNode.nextNodeId!,
      isEnded: nextNode?.isEnding ?? false,
    }));
    // Show next node's knowledge popup if any
    if (nextNode?.knowledge) {
      setKnowledgePopup(nextNode.knowledge);
    } else {
      setKnowledgePopup(null);
    }
  }, [currentNode, perspectiveData]);

  const dismissKnowledge = useCallback(() => {
    setKnowledgePopup(null);
  }, []);

  const resetGame = useCallback(() => {
    setState(initialState);
    setKnowledgePopup(null);
  }, []);

  const getEndingDetail = useCallback(() => {
    if (!state.isEnded || !currentNode) return null;
    const endingType = currentNode.endingType ?? 'normal';

    // Calculate score based on choice history
    const totalChoices = state.choiceHistory.length;
    const correctChoices = state.choiceHistory.filter((c) => c.isCorrect).length;
    const hasHidden = state.choiceHistory.some((c) => c.tags.includes('hidden') || c.tags.includes('half_hidden') || c.tags.includes('hidden_to_end'));
    const hasIgnored = state.choiceHistory.some((c) => c.tags.includes('ignored_exposure') || c.tags.includes('skipped_followup'));
    const hasSkippedCheck = state.choiceHistory.some((c) => c.tags.includes('skipped_check'));

    const baseScore = totalChoices > 0 ? Math.round((correctChoices / totalChoices) * 60) : 0;
    const honestyBonus = !hasHidden ? 25 : hasIgnored ? 0 : 10;
    const checkBonus = !hasSkippedCheck && !hasIgnored ? 15 : 0;
    const score = Math.min(100, baseScore + honestyBonus + checkBonus);

    const knowledgeSummary: string[] = [];

    if (state.perspective === 'female') {
      knowledgeSummary.push(
        '乙肝妈妈母婴阻断成功率>95%，规范治疗可安全生育健康宝宝',
        '乙肝疫苗保护率>95%，伴侣接种后可安全亲密接触',
        '孕期产检艾梅乙筛查是必查项目，早发现=早干预',
        '乙肝免疫球蛋白需在暴露后72小时内注射，越早越好',
        '隐瞒乙肝病情违反《民法典》，可被申请撤销婚姻',
        '日常吃饭、握手、拥抱不会传播乙肝',
      );
    } else {
      knowledgeSummary.push(
        '梅毒早期规范治疗可100%治愈，青霉素是特效药',
        '男性无症状携带是最常见的家庭传染源，主动筛查至关重要',
        '梅毒治疗必须夫妻同治，否则会造成"乒乓感染"',
        '先天梅毒对新生儿危害极大，孕期筛查可及早发现',
        '隐瞒性传播疾病违反《民法典》，可被申请撤销婚姻',
        '梅毒硬下疳不痛不痒但传染性极强，出现异常必须就医',
      );
    }

    // Add common knowledge
    knowledgeSummary.push(
      '艾滋病72小时内可服用阻断药，成功率高达99%',
      '艾梅乙核心传播途径：血液传播、性传播、母婴传播',
      '婚前/备孕免费筛查是家庭第一道保障',
      '艾滋病U=U：规范治疗后检测不到病毒=不传染，可正常婚育',
      '坦诚+科学=守护家庭的最强力量',
    );

    return {
      type: endingType,
      title: currentNode.endingTitle ?? '',
      narrative: currentNode.endingNarrative ?? '',
      score,
      knowledgeSummary,
    };
  }, [state, currentNode]);

  return (
    <GameContext.Provider
      value={{
        state,
        currentNode,
        perspectiveData,
        knowledgePopup,
        startGame,
        makeChoice,
        proceedToNext,
        dismissKnowledge,
        resetGame,
        getEndingDetail,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
