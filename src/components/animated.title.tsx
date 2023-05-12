import { useEffect, useRef } from "react";

interface IAnimatedTitleProps {
  nextChapter?: string;
  caption?: string;
  small?: boolean;
}

let animation: any;

export const Chapter2: React.FC<{
  children: React.ReactNode;
  active: boolean;
}> = ({ children }) => {
  const animatedDiv = useRef(null);
  useEffect(() => {
    let w: any = window;
    animation = w.bodymovin.loadAnimation({
      container: animatedDiv.current,
      rederer: "svg",
      loop: false,
      autoplay: true,
      path: "/data_animacion1.json",
    });
    return () => animation.destroy();
  }, []);
  return (
    <div className={`flex flex-col items-center justify-center mx-auto`}>
      <p className="font-bold leading-3 opacity-0 animate-delayText">
        {children}
      </p>
      <div ref={animatedDiv} className="w-[320px] h-[40px] mx-auto"></div>
    </div>
  );
};

export const Chapter3: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const animatedDiv = useRef(null);
  useEffect(() => {
    let w: any = window;
    animation = w.bodymovin.loadAnimation({
      container: animatedDiv.current,
      rederer: "svg",
      loop: false,
      autoplay: false,
      path: "/data.json",
    });
    animation.play();
    return () => animation.destroy();
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center mx-auto`}>
      <p className="font-bold leading-3 opacity-0 animate-delayText">
        {children}
      </p>
      <div
        ref={animatedDiv}
        className="w-[320px] h-[73px] mt-[-29px] mx-auto"
      ></div>
    </div>
  );
};
