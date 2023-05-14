import { useEffect, useRef } from "react";

const animationData: { [key: number]: string } = {
  0: "chapter1.json",
  1: "chapter2.json",
};

let animation: any;

export const AnimatedTitle: React.FC<{
  children: React.ReactNode;
  active: boolean;
  tabId: number;
}> = ({ children, active, tabId }) => {
  const animatedDiv = useRef(null);
  useEffect(() => {
    let w: any = window;
    animation = w.bodymovin.loadAnimation({
      container: animatedDiv.current,
      rederer: "svg",
      loop: false,
      autoplay: true,
      path: animationData[tabId],
    });
    return () => animation.destroy();
  }, [tabId]);
  return (
    <div className={`flex flex-col items-center justify-center mx-auto`}>
      <p className="font-bold leading-3 opacity-0 animate-delayText">
        {children}
      </p>
      <div
        ref={animatedDiv}
        className="-mt-[38px] w-[320px] min-h-[81.58px] mx-auto"
      ></div>
    </div>
  );
};
