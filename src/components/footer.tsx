const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] w-full">
      <div className="container text-white p-5 flex max-w-[1300px] mx-auto items-center justify-between">
        <div>
          <i className="fa-brands fa-square-behance mr-8 text-2xl"></i>
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </div>
        <div className="flex items-center">
          <i className="fa-brands fa-linkedin mr-8 text-2xl"></i>
          <i className="fa-brands fa-github mr-8 text-2xl"></i>
          <p>Made with ❤️‍🔥 by Fran & Ecle.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
