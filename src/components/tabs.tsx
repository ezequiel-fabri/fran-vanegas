import type { Tab } from "@/constants/tabList";

const shakingInAnimations: { [key: number]: string } = {
  0: "animate-tabShakingIn1",
  1: "animate-tabShakingIn2",
  2: "animate-tabShakingIn2",
};

const shakingOutAnimations: { [key: number]: string } = {
  0: "animate-tabShakingOut1",
  1: "animate-tabShakingOut2",
};

const paddingTextAnimations: { [key: number]: string } = {
  0: "animate-raiseText1",
  1: "animate-raiseText2",
};

interface ITabsProps {
  tabs: Tab[];
  selectedTab: Tab;
  onSelectTab: (tab: Tab) => void;
}

const Tabs: React.FC<ITabsProps> = ({ tabs, selectedTab, onSelectTab }) => {
  let tabColorLevel1 = tabs.find((tab) => tab.level === 1);
  let tabColorLevel2 = tabs.find((tab) => tab.level === 2);
  // let tabColorLevel3 = tabs.find((tab) => tab.level === 3);

  return (
    <div className="absolute w-full h-[258px] top-[780px]">
      <div className="container px-6 mx-auto flex justify-end items-end h-full text-textBlack max-w-[1300px] group">
        {tabs.map((tab) => (
          <div
            role="tab"
            onClick={() => onSelectTab(tab)}
            key={tab.id}
            className={`${
              tab.tabColor
            } cursor-pointer font-bold inline-block w-[58px] h-full relative rounded-t-lg border-[3px] mr-5 group-last:mr-0
            ${
              selectedTab.id === tab.id
                ? shakingInAnimations[selectedTab.level - 1] // changes the z-index that tab uses to go front
                : shakingOutAnimations[tab.level - 1] // changes the z-index that tab uses to go back
            }`}
          >
            <span
              className={`${
                selectedTab.id !== tab.id
                  ? paddingTextAnimations[tab.level - 1]
                  : ""
              } pt-3 pl-5 absolute inline-block w-[258px] h-[58px] -translate-x-[100px] translate-y-[100px] -rotate-90 overflow-hidden whitespace-nowrap text-ellipsis uppercase`}
            >
              {tab.text}
            </span>
          </div>
        ))}
      </div>
      <div
        className={`${tabColorLevel1?.sectionColor} transition-all delay-300 w-full h-[20px] absolute bottom-[188px] shadow-2 z-0`}
      />
      <div
        className={`${tabColorLevel2?.sectionColor} transition-all delay-300 w-full h-[20px] absolute bottom-[168px] shadow-2 z-8`}
      />
    </div>
  );
};

export default Tabs;
