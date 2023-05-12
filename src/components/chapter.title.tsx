import Image from "next/image";

interface IChapterTitleProps {
  nextChapter?: string;
  caption?: string;
  small?: boolean;
  lastChapter?: boolean;
}

const sizes = {
  normal: {
    width: 87,
    height: 38,
  },
  small: {
    width: 73,
    height: 32,
  },
};

const ChapterTitle: React.FC<
  { children: React.ReactNode } & IChapterTitleProps
> = ({ children, nextChapter, small, lastChapter, caption }) => {
  const fontSize = small ? "text-xl" : "text-2xl";
  const figSize = small ? sizes.small : sizes.normal;

  return (
    <div
      className={`flex flex-col items-center justify-center mx-auto ${
        lastChapter ? "text-[#F7F7F7]" : ""
      }`}
    >
      <p className="font-bold z-10 leading-3">{children}</p>
      <div className="flex z-10">
        <Image
          className={`${lastChapter ? "invert" : ""}`}
          src="/left_tribal_1.svg"
          width={figSize.width}
          height={figSize.height}
          alt="firulete"
        />
        {nextChapter && (
          <span className={`font-bold z-10 ${fontSize}`}>{nextChapter}</span>
        )}
        <Image
          className={`${lastChapter ? "invert" : ""}`}
          src="/right_tribal_1.svg"
          width={figSize.width}
          height={figSize.height}
          alt="firulete"
        />
      </div>
      {Boolean(caption) && <span className="text-sm">{caption}</span>}
    </div>
  );
};

export default ChapterTitle;
