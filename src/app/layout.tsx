import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '守护·知情·选择 — 艾梅乙育龄防护科普互动游戏',
    template: '%s | 艾梅乙科普互动游戏',
  },
  description:
    '面向育龄人群的艾梅乙（艾滋病、梅毒、乙肝）公益科普文字互动游戏。通过双视角剧情体验，掌握全套育龄防护知识，守护家庭健康。',
  keywords: [
    '艾梅乙',
    '艾滋病',
    '梅毒',
    '乙肝',
    '育龄防护',
    '母婴阻断',
    '婚前检查',
    '科普游戏',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
