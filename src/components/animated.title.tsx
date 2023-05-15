import { useEffect, useRef, useState } from "react";

const animationData: { [key: number]: string } = {
  0: "chapter1.json",
  1: "chapter2.json",
};

export const AnimatedTitle: React.FC<{
  // children: React.ReactNode;
  active: boolean;
  tabId: number;
  chapter: string | undefined;
}> = ({ active, tabId, chapter }) => {
  const animatedDiv = useRef(null);
  const [animation, setAnimation] = useState<any>(null);

  useEffect(() => {
    // load the animation
    let w: any = window;
    const anim = w.bodymovin.loadAnimation({
      container: animatedDiv.current,
      rederer: "svg",
      loop: false,
      autoplay: false,
      path: animationData[tabId],
    });
    setAnimation(anim);
    return () => anim.destroy();
  }, [tabId]);

  useEffect(() => {
    if (!animation) return;
    if (active) animation.play();
    else animation.stop();
  }, [active, animation]);

  return (
    <div
      className={`flex flex-col items-center justify-center mx-auto ${
        !active && "hidden"
      }`}
    >
      <p className="font-bold leading-3 opacity-0 animate-delayText">
        CHAPTER {chapter}
      </p>
      <div
        ref={animatedDiv}
        className="-mt-[38px] w-[320px] min-h-[81.58px] mx-auto"
      ></div>
    </div>
  );
};
