import type { Tab } from "@/constants/tabList";

interface ITabsProps {
  tabs: Tab[];
  selectedTab: Tab;
  onSelectTab: (tab: Tab) => void;
}

type IndexedObj = {
  [key: number]: string;
};

const shakingOutAnimations: IndexedObj = {
  1: "animate-tabShakingOut1",
  2: "animate-tabShakingOut2",
  3: "animate-tabShakingOut3",
};

const paddingTextAnimations: IndexedObj = {
  1: "animate-raiseText1",
  2: "animate-raiseText2",
};

const shakingInAnimations: IndexedObj = {
  1: "animate-tabShakingIn1",
  2: "animate-tabShakingIn2",
  3: "animate-tabShakingIn3",
  4: "animate-tabShakingIn3",
};

const zIndex: IndexedObj = {
  1: "z-10",
  2: "z-20",
  3: "z-30",
  4: "z-40",
};

const Tabs: React.FC<ITabsProps> = ({ tabs, selectedTab, onSelectTab }) => {
  let tabColorLevel1 = tabs.find((tab) => tab.level === 1);
  let tabColorLevel2 = tabs.find((tab) => tab.level === 2);
  let tabColorLevel3 = tabs.find((tab) => tab.level === 3);

  return (
    <div className="absolute w-full h-[258px] top-[780px]">
      <div className="container px-6 mx-auto flex justify-end items-end h-full text-textBlack max-w-[1300px] group">
        {tabs.map((tab) => {
          const transition =
            tab.id === selectedTab.id
              ? shakingInAnimations[selectedTab.level]
              : `shadow-1 ${shakingOutAnimations[tab.level]}`;
          return (
            <div
              role="tab"
              onClick={() => onSelectTab(tab)}
              key={tab.id}
              className={`${transition} ${tab.tabColor} ${
                zIndex[tab.level]
              } cursor-pointer font-bold inline-block w-[58px] h-full relative rounded-t-lg border-[3px] mr-5 group-last:mr-0`}
            >
              <span
                className={`pt-3 pl-5 absolute inline-block w-[258px] h-[58px] -translate-x-[100px] translate-y-[100px] -rotate-90 overflow-hidden whitespace-nowrap text-ellipsis uppercase`}
              >
                {tab.text}
              </span>
            </div>
          );
        })}
      </div>
      <div
        className={`${tabColorLevel1?.sectionColor} transition-all delay-300 w-full h-[20px] absolute bottom-[208px] shadow-2 z-0`}
      />
      <div
        className={`${tabColorLevel2?.sectionColor} transition-all delay-300 w-full h-[20px] absolute bottom-[188px] shadow-2 z-10`}
      />
      <div
        className={`${tabColorLevel3?.sectionColor} transition-all delay-300 w-full h-[20px] absolute bottom-[168px] shadow-2 z-20`}
      />
    </div>
  );
};

export default Tabs;
