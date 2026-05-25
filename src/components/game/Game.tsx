'use client';

import { useGame } from '@/lib/game-context';
import { DISEASE_INFO, ENDING_CONFIG, type DiseaseType, type Perspective } from '@/lib/game-types';
import { useEffect, useState, useCallback } from 'react';

// ========== 开篇视角选择页 ==========
function WelcomeScreen() {
  const { startGame } = useGame();
  const [mounted, setMounted] = useState(false);
  const [selectedPerspective, setSelectedPerspective] = useState<Perspective | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectDisease = (disease: DiseaseType) => {
    if (selectedPerspective) {
      startGame(selectedPerspective, disease);
    }
  };

  // 疾病选择页
  if (selectedPerspective) {
    const isFemale = selectedPerspective === 'female';
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundColor: '#FEFAF6' }}>
        <div
          className={`max-w-2xl w-full text-center transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => setSelectedPerspective(null)}
            className="mb-6 text-sm font-medium cursor-pointer hover:opacity-70 transition-opacity"
            style={{ color: '#636E72' }}
          >
            ← 返回视角选择
          </button>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ backgroundColor: isFemale ? '#FFF0EC' : '#ECF3FF' }}>
              {isFemale ? '♀' : '♂'}
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#2D3436' }}>
              {isFemale ? '女性育龄视角' : '男性育龄视角'}
            </h2>
          </div>

          <p className="text-sm mb-8" style={{ color: '#636E72' }}>
            选择你想体验的疾病剧情，了解不同疾病的防护知识
          </p>

          <div className="space-y-4">
            {/* 艾滋病 */}
            <button
              onClick={() => handleSelectDisease('hiv')}
              className="group w-full rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #FFE0D6' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#FFF0EC', color: '#E76F51' }}>
                  艾
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: '#2D3436' }}>艾滋病（HIV感染）</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed ml-12" style={{ color: '#636E72' }}>
                {isFemale
                  ? '高危接触后感染HIV，面对72小时阻断抉择。侧重母婴阻断、U=U、孕期抗病毒治疗。'
                  : '出差那晚的失误，让你面对HIV阳性的现实。侧重男性传播责任、U=U、家庭防护。'}
              </p>
              <div className="flex items-center gap-2 mt-3 ml-12">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFF0EC', color: '#E76F51' }}>72h阻断药</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#F0FAF4', color: '#52B788' }}>U=U</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#EBF3FF', color: '#5B9BD5' }}>母婴阻断98%+</span>
              </div>
            </button>

            {/* 梅毒 */}
            <button
              onClick={() => handleSelectDisease('syphilis')}
              className="group w-full rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #E9C46A40' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#FFFBEB', color: '#B8860B' }}>
                  梅
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: '#2D3436' }}>梅毒</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed ml-12" style={{ color: '#636E72' }}>
                {isFemale
                  ? '隐匿的梅毒感染，不痛不痒却危害胎儿。侧重先天梅毒预防、夫妻同治、孕期筛查。'
                  : '无症状携带梅毒，不知不觉传给妻子。侧重男性筛查责任、夫妻同治、先天梅毒预防。'}
              </p>
              <div className="flex items-center gap-2 mt-3 ml-12">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFFBEB', color: '#B8860B' }}>早期可100%治愈</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFF0EC', color: '#E76F51' }}>夫妻同治</span>
              </div>
            </button>

            {/* 乙肝 */}
            <button
              onClick={() => handleSelectDisease('hepatitisB')}
              className="group w-full rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', border: '2px solid #D4F0EA' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: '#E8F5E9', color: '#2A9D8F' }}>
                  乙
                </div>
                <div>
                  <h3 className="font-bold text-base" style={{ color: '#2D3436' }}>乙肝（乙型肝炎）</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed ml-12" style={{ color: '#636E72' }}>
                {isFemale
                  ? '乙肝携带者的备孕之路，母婴阻断是关键。侧重乙肝疫苗、母婴三联阻断、喂养指导。'
                  : '乙肝阳性丈夫的家庭防护责任。侧重疫苗保护、日常防护、伴侣接种。'}
              </p>
              <div className="flex items-center gap-2 mt-3 ml-12">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#E8F5E9', color: '#2A9D8F' }}>疫苗可预防</span>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#F0FAF4', color: '#52B788' }}>母婴阻断95%+</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 视角选择页
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundColor: '#FEFAF6' }}>
      <div
        className={`max-w-2xl w-full text-center transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* 标题区 */}
        <div className="mb-10">
          {/* 幸福好孕 Logo */}
          <div className="mb-6">
            <img
              src="/logo.jpg"
              alt="幸福好孕"
              className="mx-auto w-28 h-28 md:w-32 md:h-32 rounded-2xl shadow-md object-cover"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: '#E8F5E9', color: '#2A9D8F' }}>
            公益科普互动游戏
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#2D3436' }}>
            守护·知情·选择
          </h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#636E72' }}>
            艾梅乙（艾滋病·梅毒·乙肝）育龄防护科普互动体验
          </p>
        </div>

        {/* 核心理念 */}
        <div className="rounded-2xl p-5 mb-8 text-left" style={{ backgroundColor: '#F0FAF8', border: '1px solid #D4F0EA' }}>
          <p className="text-sm leading-relaxed" style={{ color: '#2D3436' }}>
            <span className="font-semibold" style={{ color: '#2A9D8F' }}>艾梅乙可防可治，坦诚守护家庭。</span>
            本游戏通过互动剧情，带你体验育龄期面对艾梅乙时的关键抉择。每一个选择都关乎健康、信任与家庭。你的选择，决定结局。
          </p>
        </div>

        {/* 视角选择 */}
        <p className="text-sm font-medium mb-4" style={{ color: '#636E72' }}>第一步：选择你的视角</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 女性视角 */}
          <button
            onClick={() => setSelectedPerspective('female')}
            className="group relative rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #F0E6E6' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: '#FFF0EC' }}>
                ♀
              </div>
              <div>
                <h3 className="font-bold text-base" style={{ color: '#2D3436' }}>女性育龄视角</h3>
                <p className="text-xs" style={{ color: '#E76F51' }}>守护自己，守护新生命</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#636E72' }}>
              你是育龄女性，经历高危接触后，每个选择都关乎自己和宝宝的未来。侧重母婴安全、备孕防护、孕期阻断。
            </p>
            <div className="absolute bottom-3 right-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#E76F51' }}>
              选择疾病 →
            </div>
          </button>

          {/* 男性视角 */}
          <button
            onClick={() => setSelectedPerspective('male')}
            className="group relative rounded-2xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            style={{ backgroundColor: '#FFFFFF', border: '2px solid #E0E8F0' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                style={{ backgroundColor: '#ECF3FF' }}>
                ♂
              </div>
              <div>
                <h3 className="font-bold text-base" style={{ color: '#2D3436' }}>男性育龄视角</h3>
                <p className="text-xs" style={{ color: '#2A9D8F' }}>担当守护，守护家庭</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#636E72' }}>
              你是育龄男性，出差那晚的选择将影响整个家庭。侧重男性筛查责任、伴侣防护、家庭传播阻断。
            </p>
            <div className="absolute bottom-3 right-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#2A9D8F' }}>
              选择疾病 →
            </div>
          </button>
        </div>

        {/* 底部提示 */}
        <p className="mt-6 text-xs" style={{ color: '#B2BEC3' }}>
          本游戏为公益科普目的设计，所有医学知识来源于国家公共卫生政策指引
        </p>
      </div>
    </div>
  );
}

// ========== 进度条 ==========
function ProgressBar() {
  const { state, currentNode } = useGame();
  if (!currentNode) return null;

  const stageOrder = ['intro', 'high_risk', 'post_exposure', 'test_choice', 'test_result', 'tell_partner', 'premarital', 'prepregnancy', 'prenatal', 'ending'];
  const currentIdx = stageOrder.indexOf(currentNode.stage);
  const progress = Math.max(10, Math.round(((currentIdx + 1) / stageOrder.length) * 100));

  const stageLabels: Record<string, string> = {
    intro: '开篇',
    high_risk: '高危场景',
    post_exposure: '暴露后应对',
    test_choice: '检测抉择',
    test_result: '检测结果',
    tell_partner: '伴侣告知',
    premarital: '婚前检查',
    prepregnancy: '孕前检查',
    prenatal: '孕期产检',
    ending: '结局',
  };

  return (
    <div className="w-full mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-medium" style={{ color: '#2A9D8F' }}>
          {stageLabels[currentNode.stage] ?? currentNode.stage}
        </span>
        <span className="text-xs" style={{ color: '#B2BEC3' }}>{progress}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: '#F0F0F0' }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: '#2A9D8F' }}
        />
      </div>
    </div>
  );
}

// ========== 科普弹窗 ==========
function KnowledgeModal() {
  const { knowledgePopup, dismissKnowledge } = useGame();

  if (!knowledgePopup) return null;

  const bgColors: Record<string, string> = {
    correct: '#F0FAF4',
    warning: '#FFFBEB',
    danger: '#FFF5F5',
    info: '#F0F7FF',
  };

  const borderColors: Record<string, string> = {
    correct: '#52B788',
    warning: '#E9C46A',
    danger: '#E76F51',
    info: '#5B9BD5',
  };

  const icons: Record<string, string> = {
    correct: '✅',
    warning: '⚠️',
    danger: '🛡️',
    info: '💡',
  };

  const typeLabel: Record<string, string> = {
    correct: '知识点确认',
    warning: '重要提醒',
    danger: '关键警示',
    info: '科普知识',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      onClick={dismissKnowledge}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="relative w-full max-w-lg rounded-2xl p-5 shadow-xl animate-slide-up"
        style={{
          backgroundColor: bgColors[knowledgePopup.type] ?? bgColors.info,
          borderTop: `3px solid ${borderColors[knowledgePopup.type] ?? borderColors.info}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">{icons[knowledgePopup.type]}</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{
            backgroundColor: borderColors[knowledgePopup.type],
            color: '#FFFFFF',
          }}>
            {typeLabel[knowledgePopup.type]}
          </span>
          <h3 className="font-bold text-base flex-1" style={{ color: '#2D3436' }}>
            {knowledgePopup.title}
          </h3>
        </div>
        <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#2D3436' }}>
          {knowledgePopup.content}
        </div>
        <button
          onClick={dismissKnowledge}
          className="mt-4 w-full py-2.5 rounded-xl font-medium text-sm transition-all hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: borderColors[knowledgePopup.type], color: '#FFFFFF' }}
        >
          我知道了，继续
        </button>
      </div>
    </div>
  );
}

// ========== 场景标题标签 ==========
function StageTag({ stage }: { stage: string }) {
  const stageConfig: Record<string, { label: string; color: string; bg: string }> = {
    intro: { label: '开篇', color: '#636E72', bg: '#F0F0F0' },
    high_risk: { label: '高危场景', color: '#E76F51', bg: '#FFF0EC' },
    post_exposure: { label: '暴露后', color: '#E9C46A', bg: '#FFFBEB' },
    test_choice: { label: '检测抉择', color: '#2A9D8F', bg: '#E8F5F0' },
    test_result: { label: '检测结果', color: '#5B9BD5', bg: '#EBF3FF' },
    tell_partner: { label: '伴侣告知', color: '#E76F51', bg: '#FFF0EC' },
    premarital: { label: '婚前检查', color: '#2A9D8F', bg: '#E8F5F0' },
    prepregnancy: { label: '孕前检查', color: '#2A9D8F', bg: '#E8F5F0' },
    prenatal: { label: '孕期产检', color: '#5B9BD5', bg: '#EBF3FF' },
    ending: { label: '结局', color: '#2D3436', bg: '#F0F0F0' },
  };

  const config = stageConfig[stage] ?? stageConfig.intro;

  return (
    <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{
      color: config.color,
      backgroundColor: config.bg,
    }}>
      {config.label}
    </span>
  );
}

// ========== 剧情播放页 ==========
function StoryScreen() {
  const { currentNode, perspectiveData, state, makeChoice, proceedToNext, knowledgePopup } = useGame();
  const [visible, setVisible] = useState(false);
  const [narrativeDisplayed, setNarrativeDisplayed] = useState('');

  const diseaseInfo = state.disease ? DISEASE_INFO[state.disease] : null;

  // Fade in on node change
  useEffect(() => {
    setVisible(false);
    setNarrativeDisplayed('');
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [state.currentNodeId]);

  // Typewriter effect for narrative
  useEffect(() => {
    if (!currentNode?.narrative) return;
    setNarrativeDisplayed('');
    let idx = 0;
    const text = currentNode.narrative;
    const interval = setInterval(() => {
      idx += 2;
      if (idx >= text.length) {
        setNarrativeDisplayed(text);
        clearInterval(interval);
      } else {
        setNarrativeDisplayed(text.slice(0, idx));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [currentNode?.narrative, state.currentNodeId]);

  if (!currentNode || !perspectiveData) return null;

  const hasChoices = currentNode.choices && currentNode.choices.length > 0;
  const isAutoNext = !hasChoices && currentNode.nextNodeId;
  const showProceed = isAutoNext && !knowledgePopup;
  const isEnding = currentNode.isEnding;

  const choiceColors = ['#2A9D8F', '#5B9BD5', '#E9C46A'];

  return (
    <div className="min-h-screen flex flex-col px-4 py-6" style={{ backgroundColor: '#FEFAF6' }}>
      <div className={`max-w-xl w-full mx-auto flex flex-col flex-1 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {/* 顶部导航 */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium" style={{ color: '#B2BEC3' }}>
              {perspectiveData.protagonistName}的视角
            </span>
            {diseaseInfo && (
              <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: '#FFF0EC', color: '#E76F51' }}>
                {diseaseInfo.name}
              </span>
            )}
          </div>
        </div>

        {/* 进度条 */}
        <ProgressBar />

        {/* 场景标题 */}
        <div className="flex items-center gap-2 mb-4">
          <StageTag stage={currentNode.stage} />
          <h2 className="text-lg font-bold" style={{ color: '#2D3436' }}>
            {currentNode.sceneTitle}
          </h2>
        </div>

        {/* 叙述区 */}
        <div className="flex-1 rounded-2xl p-5 mb-5" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div className="text-sm md:text-base leading-relaxed whitespace-pre-line" style={{ color: '#2D3436' }}>
            {narrativeDisplayed}
          </div>
        </div>

        {/* 选项区 / 继续按钮 */}
        <div className="space-y-3">
          {hasChoices && currentNode.choices!.map((choice, idx) => (
            <button
              key={choice.id}
              onClick={() => makeChoice(choice)}
              className="w-full text-left rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer group"
              style={{
                backgroundColor: '#FFFFFF',
                border: `2px solid ${choiceColors[idx % choiceColors.length]}30`,
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ backgroundColor: `${choiceColors[idx % choiceColors.length]}15`, color: choiceColors[idx % choiceColors.length] }}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className="text-sm md:text-base leading-relaxed" style={{ color: '#2D3436' }}>
                  {choice.text}
                </span>
              </div>
            </button>
          ))}

          {showProceed && (
            <button
              onClick={proceedToNext}
              className="w-full py-3 rounded-xl font-medium text-sm transition-all hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: '#2A9D8F', color: '#FFFFFF' }}
            >
              {isEnding ? '查看结局' : '继续'} →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ========== 结局页 ==========
function EndingScreen() {
  const { currentNode, getEndingDetail, resetGame, state } = useGame();
  const [showSummary, setShowSummary] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const detail = getEndingDetail();
  if (!detail || !currentNode) return null;

  const config = ENDING_CONFIG[detail.type];
  const diseaseInfo = state.disease ? DISEASE_INFO[state.disease] : null;

  return (
    <div className="min-h-screen flex flex-col px-4 py-8" style={{ backgroundColor: '#FEFAF6' }}>
      <div className={`max-w-xl w-full mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {/* 结局标题 */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{config.emoji}</div>
          <h1 className="text-2xl font-bold mb-2" style={{ color: config.color }}>
            {detail.title}
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: '#636E72' }}>
            {detail.narrative}
          </p>
        </div>

        {/* 评分 */}
        <div className="rounded-2xl p-5 mb-5 text-center" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <p className="text-xs mb-2" style={{ color: '#B2BEC3' }}>健康守护评分</p>
          <div className="text-4xl font-bold mb-1" style={{ color: config.color }}>{detail.score}</div>
          <p className="text-xs" style={{ color: '#636E72' }}>
            {detail.score >= 80 ? '你做出了正确的选择，守护了家庭的健康与幸福！' :
             detail.score >= 50 ? '虽有一些遗憾，但你最终选择了科学应对，仍有希望！' :
             '隐瞒和侥幸带来了伤害，但及时补救仍可改善。'}
          </p>
        </div>

        {/* 结局叙述 */}
        <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-base mb-3" style={{ color: '#2D3436' }}>你的故事结局</h3>
          <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: '#2D3436' }}>
            {currentNode.narrative}
          </p>
        </div>

        {/* 知识点总结 */}
        <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: '#F0FAF8', border: '1px solid #D4F0EA' }}>
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <h3 className="font-bold text-base" style={{ color: '#2A9D8F' }}>
              {diseaseInfo ? `${diseaseInfo.name}` : '艾梅乙'}核心知识点总结
            </h3>
            <span className="text-sm" style={{ color: '#2A9D8F' }}>
              {showSummary ? '收起 ↑' : '展开 ↓'}
            </span>
          </button>

          {showSummary && (
            <div className="mt-4 space-y-2.5">
              {detail.knowledgeSummary.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: '#2A9D8F20', color: '#2A9D8F' }}>
                    {idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: '#2D3436' }}>{item}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 艾梅乙通用科普总结 */}
        {showSummary && (
          <div className="rounded-2xl p-5 mb-5" style={{ backgroundColor: '#FFFBEB', border: '1px solid #E9C46A40' }}>
            <h3 className="font-bold text-base mb-3" style={{ color: '#B8860B' }}>艾梅乙通用科普要点</h3>
            <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#2D3436' }}>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#E76F51' }}>艾滋病（HIV）</p>
                <p>不可逆免疫损伤，病毒暴露后72小时内可服用阻断药，阻断成功率高。感染后规范抗病毒治疗可实现病毒载量清零（U=U：检测不到=不传染），患者可正常生活、工作、婚恋生育（配偶知情且合理防护下），母婴阻断成功率98%以上。</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#B8860B' }}>梅毒</p>
                <p>早期规范治疗可接近100%治愈（青霉素特效），隐匿发病可致不可逆的脏器、神经损害。夫妻必须同治，避免一人治好一人没治，来回互相传染。</p>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: '#2A9D8F' }}>乙肝</p>
                <p>长期携带可发展为肝硬化、肝癌，母婴传播是新生儿感染主要途径。但疫苗可预防，母婴阻断成功率{'>'}95%，规范治疗可长期稳定。</p>
              </div>
              <div className="pt-2" style={{ borderTop: '1px solid #E9C46A30' }}>
                <p className="font-semibold mb-1" style={{ color: '#2D3436' }}>通用要点</p>
                <ul className="space-y-1 text-sm" style={{ color: '#636E72' }}>
                  <li>&bull; 传播途径：血液传播、性传播、母婴传播（日常接触不传播）</li>
                  <li>&bull; 婚前/备孕免费筛查是家庭第一道保障</li>
                  <li>&bull; 坚决杜绝隐瞒：坦诚+科学=守护家庭的最强力量</li>
                  <li>&bull; 艾滋病感染者依法享有婚育权利，规范治疗可安全婚育</li>
                  <li>&bull; 高危行为后72小时内可采取HIV紧急阻断措施</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="space-y-3 mt-6">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="w-full py-3 rounded-xl font-medium text-sm transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#2A9D8F', color: '#FFFFFF' }}
          >
            {showSummary ? '收起知识点总结' : '查看知识点总结'}
          </button>
          <button
            onClick={resetGame}
            className="w-full py-3 rounded-xl font-medium text-sm transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#F0F0F0', color: '#636E72' }}
          >
            重新开始，体验另一个视角
          </button>
        </div>

        {/* 资源与求助二维码 */}
        <div className="rounded-2xl p-5 mt-6" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-base mb-4 text-center" style={{ color: '#2A9D8F' }}>
            资源与求助
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 八方社工二维码 */}
            <div className="text-center">
              <img
                src="/qr-bafang.jpg"
                alt="八方社工"
                className="mx-auto w-36 h-36 rounded-xl object-cover"
              />
              <p className="text-sm font-medium mt-2" style={{ color: '#2D3436' }}>
                免费申领福建省艾协的艾梅乙自检包
              </p>
              <p className="text-xs mt-1" style={{ color: '#636E72' }}>
                扫码关注「八方社工」
              </p>
            </div>
            {/* 72h暴露后预防小程序二维码 */}
            <div className="text-center">
              <img
                src="/qr-72h.jpg"
                alt="72h暴露后预防"
                className="mx-auto w-36 h-36 rounded-xl object-cover"
              />
              <p className="text-sm font-medium mt-2" style={{ color: '#2D3436' }}>
                高危行为后72h内HIV暴露后预防服务地图
              </p>
              <p className="text-xs mt-1" style={{ color: '#636E72' }}>
                微信扫码，获取就近阻断服务
              </p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="text-center mt-6 mb-4">
          <p className="text-xs" style={{ color: '#B2BEC3' }}>
            幸福好孕 · 艾梅乙育龄防护公益科普
          </p>
        </div>
      </div>
    </div>
  );
}

// ========== 主游戏组件 ==========
export default function Game() {
  const { state } = useGame();

  if (!state.isStarted) {
    return <WelcomeScreen />;
  }

  if (state.isEnded) {
    return <EndingScreen />;
  }

  return (
    <>
      <StoryScreen />
      <KnowledgeModal />
    </>
  );
}
