import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="relative overflow-x-hidden h-[870px]">
      <nav className="container mx-auto flex justify-between py-3 px-6 h-[60px] max-w-[1300px]">
        <p>MY NAME</p>
        <div className="flex">
          <p className="mr-10">WORKS</p>
          <p>ABOUT ME</p>
        </div>
      </nav>
      <div className="w-full absolute sm:hidden top-24">
        <div className="mx-auto px-6 w-full">
          <div className="name text-[35px] w-full">
            <p className="font-light">
              <span className="font-bold">Francisco</span> Joaquin
            </p>
            <p className="font-light">
              <span className="font-bold">Vanegas</span> Alessio
            </p>
          </div>
          <p className="mt-5 text-[14px] z-10">
            UX/UI Designer specializing in design (and occasionally
            <br />
            developing) exeptional digital expereneces.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 z-40 left-1/4">
        <Image
          src="/fposing.png"
          alt="myself-in-cool-pose"
          height={538}
          width={354}
        />
        {/* <div
          style={{
            left: "300px",
            position: "absolute",
            bottom: 3,
            clipPath: "polygon(0px 31%, 100% 0px, 100% 100%, 0px 100%)",
            transform: "rotate(180deg)",
            filter: "blur(5px)",
            background: "rgba(10, 0, 0, 0.4)",
            width: 500,
            height: 200,
          }}
        /> */}
      </div>
      <div className="max-w-none absolute bottom-0 left-1/4 max-[740px]:hidden z-0">
        <Image
          src="/fposing_dark.png"
          alt="my-shadow-in-cool-pose"
          height={994}
          width={788}
        />
      </div>
      {false && (
        <div className="h-full w-full -mt-[60px] max-w-[1000px] mx-auto relative pointer-events-none z-0 min-[980px]:z-10">
          <Image
            src="/fposing.png"
            alt="myself-in-cool-pose"
            className="absolute bottom-0 left-5 z-10"
            height={538}
            width={354}
          />
          <Image
            src="/fposing_dark.png"
            alt="my-shadow-in-cool-pose"
            className="max-w-none absolute bottom-0 max-[740px]:hidden"
            height={994}
            width={788}
          />
          <div className="absolute bottom-0 w-[350px] max-[740px]:hidden text-white max-[740px]:text-black flex flex-col h-[507px] right-[286px] pointer-events-auto">
            <div className="name text-[35px] w-full">
              <p className="font-light">
                <span className="font-bold">Francisco</span> Joaquin
              </p>
              <p className="font-light">
                <span className="font-bold">Vanegas</span> Alessio
              </p>
            </div>
            <p className="mt-5 text-[14px] z-10">
              UX/UI Designer specializing in design (and occasionallydeveloping)
              exeptional digital expereneces.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
