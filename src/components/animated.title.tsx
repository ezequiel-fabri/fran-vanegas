import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const animationData: { [key: number]: string } = {
  0: "chapter1.json",
  1: "ch2.json",
  2: "chapter3.json"
};

export const AnimatedTitle: React.FC<{
  active: boolean;
  tabId: number;
  chapter: string | undefined;
}> = ({ active, tabId, chapter }) => {
  const animatedDiv = useRef<HTMLDivElement | null>(null);
  const [animation, setAnimation] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // load the animation
    if(!animatedDiv.current) return
    const anim = lottie.loadAnimation({
      container: animatedDiv.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: animationData[tabId],
    });
    setAnimation(anim);

    let observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (animatedDiv.current) observer.observe(animatedDiv.current);

    return () => {
      anim.destroy();
      if (observer) observer.disconnect();
    };
  }, [tabId]);

  useEffect(() => {
    if (!animation) return;
    if (active && isVisible) animation.play();
    else animation.stop();
  }, [active, animation, isVisible]);

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
