import { useState } from "react";
import Image from "next/image";
import Tabs from "./tabs";
import { tabs, Tab as Tab } from "@/constants/tabList";
import ChapterTitle from "./chapter.title";
import { AnimatedTitle } from "./animated.title";

const CareerPanel = () => {
  const [currentTabs, setCurrentTabs] = useState<Tab[]>(tabs);
  // for switching the tab
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  // for switching the content
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const handleSelectTab = (newTab: Tab) => {
    if (newTab.id === selectedTab.id) return;
    setCurrentTabs((prevTabs) => {
      let newTabs = prevTabs.slice();
      newTabs[selectedTab.id] = { ...selectedTab, level: newTab.level };
      newTabs[newTab.id] = { ...newTab, level: 4 };
      return newTabs;
    });
    setSelectedTab(newTab);
    setTimeout(() => setActiveTab(newTab), 300);
  };

  const { text, chapter, title, backTitle, backTitleColor, sectionColor, id } =
    activeTab;

  const nextChapterLabel =
    activeTab.id !== tabs.length - 1
      ? currentTabs[activeTab.id + 1]?.chapter
      : activeTab.chapter;

  const isLastChapter = activeTab.id === tabs.length - 1;

  return (
    <>
      <Tabs
        tabs={currentTabs}
        selectedTab={selectedTab}
        onSelectTab={handleSelectTab}
      />
      <section
        className={`${sectionColor} transition-background duration-150 relative pt-20 pb-5 z-30 shadow-2`}
      >
        <div className="container px-6 mx-auto max-w-[1300px]">
          {tabs.map((tab) => (
            <AnimatedTitle
              key={tab.id}
              active={tab.id === activeTab.id}
              tabId={tab.id}
              chapter={tab.chapter}
            />
          ))}
          <h1 className="font-bold text-center text-4xl my-20 mb-28 text-textBlack inline-block w-full uppercase relative">
            <span
              className={`pointer-events-none whitespace-nowrap tracking-wide text-[120px] z-0 ${backTitleColor} font-bold absolute left-1/2 -translate-x-1/2`}
            >
              {backTitle}
            </span>
            <span
              className={`relative z-10 font-[800] ${
                isLastChapter ? "text-[#F7F7F7]" : ""
              }`}
            >
              {title || text}
            </span>
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
              <Image
                src="/me_and_pancho.png"
                alt="myself-doing-things"
                className={`${id !== 3 && "hidden"}`}
                width={488}
                height={323}
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <p
                className={`font-bold first-letter:text-4xl ${
                  isLastChapter ? "text-[#F7F7F7]" : ""
                }`}
              >
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
            lastChapter={isLastChapter}
            caption={`${isLastChapter ? "To be continued..." : ""}`}
          >
            NEXT CHAPTER
          </ChapterTitle>
        </div>
      </section>
    </>
  );
};

export default CareerPanel;
