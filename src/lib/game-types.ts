// 游戏核心类型定义

/** 玩家视角 */
export type Perspective = 'female' | 'male';

/** 感染疾病类型 */
export type DiseaseType = 'hiv' | 'syphilis' | 'hepatitisB';

/** 科普弹窗类型 */
export type KnowledgeType = 'correct' | 'warning' | 'danger' | 'info';

/** 结局类型 */
export type EndingType = 'perfect' | 'normal' | 'regret';

/** 场景阶段 */
export type SceneStage = 
  | 'intro'           // 开篇介绍
  | 'high_risk'       // 高危场景
  | 'post_exposure'   // 高危暴露后
  | 'test_choice'     // 是否检测抉择
  | 'test_result'     // 检测结果
  | 'tell_partner'    // 是否告知伴侣抉择
  | 'premarital'      // 婚前检查场景
  | 'prepregnancy'    // 孕前检查场景
  | 'prenatal'        // 孕期产检场景
  | 'ending';         // 结局

/** 科普弹窗 */
export interface KnowledgePopup {
  title: string;
  content: string;
  type: KnowledgeType;
}

/** 选项 */
export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
  knowledge: KnowledgePopup;
  nextNodeId: string;
  tags?: string[];  // 标记选择特征：如 'tested', 'hidden', 'skipped_check' 等
}

/** 故事节点 */
export interface StoryNode {
  id: string;
  stage: SceneStage;
  sceneTitle: string;
  narrative: string;
  choices?: Choice[];
  knowledge?: KnowledgePopup;  // 进入节点时自动弹出的科普
  nextNodeId?: string;  // 无选项时自动跳转
  isEnding?: boolean;
  endingType?: EndingType;
  endingTitle?: string;
  endingNarrative?: string;
}

/** 视角剧情数据 */
export interface PerspectiveData {
  perspective: Perspective;
  title: string;
  subtitle: string;
  description: string;
  protagonistName: string;
  protagonistAge: number;
  protagonistStatus: string;
  diseaseAssigned: DiseaseType;
  nodes: Record<string, StoryNode>;
  startNodeId: string;
}

/** 游戏状态 */
export interface GameState {
  perspective: Perspective | null;
  disease: DiseaseType | null;
  currentNodeId: string | null;
  choiceHistory: ChoiceRecord[];
  isStarted: boolean;
  isEnded: boolean;
}

/** 选择记录 */
export interface ChoiceRecord {
  nodeId: string;
  choiceId: string;
  tags: string[];
  isCorrect: boolean;
  timestamp: number;
}

/** 结局详情 */
export interface EndingDetail {
  type: EndingType;
  title: string;
  narrative: string;
  knowledgeSummary: string[];
  score: number;
}

/** 疾病信息 */
export const DISEASE_INFO: Record<DiseaseType, { name: string; fullName: string }> = {
  hiv: { name: '艾滋病', fullName: '艾滋病（HIV感染）' },
  syphilis: { name: '梅毒', fullName: '梅毒' },
  hepatitisB: { name: '乙肝', fullName: '乙型肝炎' },
};

/** 结局配置 */
export const ENDING_CONFIG: Record<EndingType, { title: string; emoji: string; color: string; description: string }> = {
  perfect: {
    title: '坦诚守护，阖家安康',
    emoji: '🌟',
    color: '#52B788',
    description: '全程主动婚检孕检、无隐瞒、正确防护、科学应对风险',
  },
  normal: {
    title: '心存侥幸，暗藏隐患',
    emoji: '⚠️',
    color: '#E9C46A',
    description: '存在隐瞒、拖延、拒绝婚检等误区操作，未造成即时感染，但暗藏健康与情感危机',
  },
  regret: {
    title: '隐瞒致险，家庭受损',
    emoji: '💔',
    color: '#E76F51',
    description: '高危后逃避检查、刻意隐瞒病情，错过最佳治疗与阻断时机',
  },
};
