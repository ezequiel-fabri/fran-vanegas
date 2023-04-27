import { useState } from "react";
import Image from "next/image";
import Tabs from "./tabs";
import { tabs, Tab as Tab } from "@/constants/tabList";
import ChapterTitle from "./chapter.title";

const CareerPanel = () => {
  const [currentTabs, setCurrentTabs] = useState<Tab[]>(tabs);
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[2]);
  const handleSelectTab = (newTab: Tab) => {
    if (newTab.id === selectedTab.id) return;
    setCurrentTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.id === selectedTab.id) return { ...tab, level: newTab.level };
        if (tab.id === newTab.id) return { ...tab, level: 3 }; // to set the correct section background
        return tab;
      })
    );
    setSelectedTab(newTab);
  };

  const { text, title, backTitle, backTitleColor, sectionColor, id } =
    selectedTab;

  const nextChapterLabel =
    selectedTab.id !== 2
      ? currentTabs[selectedTab.id + 1]?.chapter
      : selectedTab.chapter;
  return (
    <>
      <Tabs
        tabs={currentTabs}
        selectedTab={selectedTab}
        onSelectTab={handleSelectTab}
      />
      <section
        className={`${sectionColor} transition-background delay-300 relative pt-8 pb-5 z-20 shadow-2`}
      >
        <div className="container px-6 mx-auto max-w-[1300px]">
          <ChapterTitle>CHAPTER {id + 1}</ChapterTitle>
          <h1 className="font-bold text-center text-4xl my-20 mb-28 text-textBlack inline-block w-full uppercase relative">
            <span
              className={`whitespace-nowrap tracking-wide text-[120px] z-0 ${backTitleColor} font-bold absolute left-1/2 -translate-x-1/2`}
            >
              {backTitle}
            </span>
            <span className="relative z-10 font-[800]">{title || text}</span>
          </h1>
          <div className="relative h-[323px] flex max-w-[1050px] mb-28 mx-auto">
            <div className="mr-10 flex-1">
              <Image
                src="/fdrawing.png"
                alt="myself-doing-things"
                className={`${id !== 0 && "hidden"}`}
                width={488}
                height={323}
              />
              <Image
                src="/fdrawing2.png"
                alt="myself-doing-things"
                className={`${id !== 1 && "hidden"}`}
                width={488}
                height={323}
              />
              <Image
                src="/fdrawing3.png"
                alt="myself-doing-things"
                className={`${id !== 2 && "hidden"}`}
                width={488}
                height={323}
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p className="font-bold first-letter:text-4xl">
                Cuando tenia 5 años tuve mi primer experiencia con una consola
                de videojuegos, todos mis amigos estaban locos por comenzar a
                jugar sin siquiera ver las introducciones brindadas por el mismo
                juego. Fui el único que se entretuvo apreciando las
                ilustraciones y narración que contenía la caja del juego. No es
                acaso la historia lo que nos motiva a aventurarnos en el juego?
                Tal vez soy full autista, pero tal vez soy un entusiasta por las
                buenas historias y estoy seguro de que esta es una de ellas.
              </p>
              <button className="w-64 h-14 text-2xl shadow-1 border-3 font-bold py-2 px-4 rounded-lg bg-main rounded-md">
                See Works
              </button>
            </div>
          </div>
          <ChapterTitle
            nextChapter={nextChapterLabel}
            small
            lastChapter={selectedTab.id === 2}
          >
            NEXT CHAPTER
          </ChapterTitle>
        </div>
      </section>
    </>
  );
};

export default CareerPanel;
