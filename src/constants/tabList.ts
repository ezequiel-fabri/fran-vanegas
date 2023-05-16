export interface Tab {
  id: number;
  text: string;
  chapter?: string;
  title?: string;
  backTitle?: string;
  backTitleColor?: string;
  url: string;
  tabColor: string;
  sectionColor: string;
  level: number;
}

export const tabs: Tab[] = [
  {
    id: 0,
    chapter: "I",
    text: "Chapter 1. Starting the journey",
    title: "Starting the journey",
    backTitle: "冒険の序章",
    backTitleColor: "text-[#F1C679]",
    url: "/fdrawing.png",
    tabColor: "bg-[#FCD07D]",
    sectionColor: "bg-[#FCD07D]",
    level: 4,
  },
  {
    id: 1,
    chapter: "II",
    text: "Chapter 2. Ardent hero of Experiences",
    title: "Ardent hero of Experiences",
    backTitle: "炎の体験英雄",
    backTitleColor: "text-[#FFEECE]",
    url: "/fdrawing2.png",
    tabColor: "bg-[#FBDEA7]",
    sectionColor: "bg-[#FBDEA7]",
    level: 3,
  },
  {
    id: 2,
    chapter: "III",
    text: "Chapter 3. Training arc",
    title: "Training arc",
    backTitle: "鍛錬の弧",
    backTitleColor: "text-[#F8DEAF]",
    url: "/fdrawing2.png",
    tabColor: "bg-[#FAECD1]",
    sectionColor: "bg-[#FAECD1]",
    level: 2,
  },
  {
    id: 3,
    chapter: "IV",
    text: "Chapter 4. God mode",
    title: "God mode",
    backTitle: "神の力、主人公の覚醒",
    backTitleColor: "text-[#2C2C2C]",
    url: "/fdrawing2.png",
    tabColor: "bg-[#1A1A1A]",
    sectionColor: "bg-[#1A1A1A]",
    level: 1,
  },
];
