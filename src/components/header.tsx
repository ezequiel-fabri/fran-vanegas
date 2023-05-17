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
      <div className="min-w-[354px] absolute bottom-0 z-40 left-1/4">
        <Image
          className="relative z-10"
          src="/fposing.png"
          alt="myself-in-cool-pose"
          height={538}
          width={354}
        />
        {/* <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 294,
            width: "0px",
            height: "0px",
            borderStyle: "solid",
            borderWidth: "0 0px 58px 425px",
            borderColor:
              "transparent transparent rgba(10, 0, 0, 0.4) transparent",
            transform: "rotate(180deg)",
            filter: "blur(5px)",
          }}
        /> */}
      </div>
      <div className="min-w-[788px] absolute bottom-0 left-1/4 max-[740px]:hidden z-0">
        <div className="absolute bottom-0 w-[350px] max-[740px]:hidden text-white flex flex-col h-[507px] right-[60px]">
          <div className="name text-[35px] w-full">
            <p className="font-light leading-10">
              <span className="font-bold">Francisco</span> Joaquin
            </p>
            <p className="font-light leading-10">
              <span className="font-bold">Vanegas</span> Alessio
            </p>
          </div>
          <p className="mt-5 text-[14px]">
            UX/UI Designer specializing in design (and occasionallydeveloping)
            exeptional digital expereneces.
          </p>
        </div>
        <Image
          src="/fposing_dark.png"
          priority={true}
          alt="my-shadow-in-cool-pose"
          height={994}
          width={788}
        />
      </div>
    </header>
  );
};

export default Header;
