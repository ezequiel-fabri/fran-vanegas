import Image from "next/image";

interface IChapterTitleProps {
  nextChapter?: string;
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
> = ({ children, nextChapter, small, lastChapter }) => {
  const fontSize = small ? "text-xl" : "text-2xl";
  const figSize = small ? sizes.small : sizes.normal;
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <p className={`font-bold z-10`}>{children}</p>
      <div className="flex z-10">
        <Image
          src="/left_tribal_1.svg"
          width={figSize.width}
          height={figSize.height}
          alt="firulete"
        />
        {nextChapter && (
          <span className={`font-bold z-10 ${fontSize}`}>{nextChapter}</span>
        )}
        <Image
          src="/right_tribal_1.svg"
          width={figSize.width}
          height={figSize.height}
          alt="firulete"
        />
      </div>
      {lastChapter && <span className="text-sm">TO BE CONTINUED...</span>}
    </div>
  );
};

export default ChapterTitle;
