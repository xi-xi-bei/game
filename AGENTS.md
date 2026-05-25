# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 项目简介

艾梅乙（艾滋病·梅毒·乙肝）育龄防护公益科普互动游戏。双视角（女性/男性）× 三疾病（艾滋病/梅毒/乙肝）交互式文字选择类游戏，覆盖高危暴露、检测抉择、伴侣告知、婚检/孕前检/产检四大场景，三个结局等级。

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（含游戏动画）
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 主页面入口（GameProvider + Game）
│   ├── components/
│   │   ├── game/
│   │   │   └── Game.tsx    # 游戏主组件（含开篇页、剧情页、科普弹窗、结局页）
│   │   └── ui/             # Shadcn UI 组件库
│   ├── lib/
│   │   ├── game-types.ts   # 游戏类型定义
│   │   ├── game-context.tsx # 游戏状态管理（React Context）
│   │   ├── game-data-female.ts    # 女性视角·乙肝剧情数据
│   │   ├── game-data-male.ts      # 男性视角·梅毒剧情数据
│   │   ├── game-data-female-hiv.ts # 女性视角·艾滋病剧情数据
│   │   ├── game-data-male-hiv.ts   # 男性视角·艾滋病剧情数据
│   │   ├── game-data-female-syphilis.ts # 女性视角·梅毒剧情数据
│   │   ├── game-data-male-hb.ts         # 男性视角·乙肝剧情数据
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── DESIGN.md               # 设计规范
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

## 核心架构

- **状态管理**：React Context（`GameProvider` + `useGame` hook），管理游戏流程、节点跳转、选择记录
- **剧情数据**：六个独立的 `PerspectiveData` 对象（`femaleData`(乙肝) / `femaleSyphilisData`(梅毒) / `femaleHivData`(艾滋病) / `maleData`(梅毒) / `maleHbData`(乙肝) / `maleHivData`(艾滋病)），每个节点 `StoryNode` 含叙述、选项、科普弹窗
- **游戏流程**：开篇选择视角 → 选择疾病 → 节点导航（选项/自动跳转） → 科普弹窗 → 结局评级
- **结局评级**：根据选择正确率、是否隐瞒、是否跳过检查计算分数，分三档（完美/普通/遗憾）

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码
- 禁止隐式 `any` 和 `as any`
- 清理未使用的变量和导入

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等
2. 必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染

## 构建与测试命令

- `pnpm dev` - 开发环境启动（端口5000，HMR）
- `pnpm build` - 生产构建
- `pnpm ts-check` - TypeScript 类型检查
- `pnpm lint` - ESLint 检查
