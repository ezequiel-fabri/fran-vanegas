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
  summary: string;
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
    summary:
      "Cuando tenia 5 años tuve mi primer experiencia con una consola de videojuegos, todos mis amigos estaban locos por comenzar a jugar sin siquiera ver las introducciones brindadas por el mismo juego. Fui el único que se entretuvo apreciando las ilustraciones y narración que contenía la caja del juego. No es acaso la historia lo que nos motiva a aventurarnos en el juego? Tal vez soy full autista, pero tal vez soy un entusiasta por las buenas historias y estoy seguro de que esta es una de ellas.",
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
    summary:
      "El comienzo de la pandemia perjudico muchas familias y el caos comenzo a reinar en todo el mundo. Se dice que los actos heroicos aparecen en las derrotas y en los desastres. It Is Fine Now. Why? Because I Am Here!",
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
    summary:
      "Para ser un yonko no bastaba con hacer dibujitos en figma, era necesario comprender los sistemas por dentro. Para acabar con la mentira era necesario empezar a ver en carne propia como crear e implementar los componentes diseñados. Con un arduo entrenamiento por parte de sus senséis Ecle (Prodigy Front-End Jujutsu Sorcerer) y Monkey (Legendary Back-End Warlock) obtendria lo mejor de cada mundo para alcanzar la liberación. Se acabo el Wordpress.",
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
    summary:
      "Developer and designer, full control over the 7 powers inherited by the one for all. Ready to fight against the 4 Yonkos.",
    level: 1,
  },
];
