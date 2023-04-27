import Header from "./header";
import Footer from "./footer";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({
  subsets: ["latin"],
});

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={alegreya.className}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
