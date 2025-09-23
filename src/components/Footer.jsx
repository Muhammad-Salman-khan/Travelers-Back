import TextType from "./TextType.jsx";
import Logo from "../assets/plane-departure-solid-full.svg";

const Footer = ({ count }) => {
  return (
    <>
      <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 text-gray-300 py-8 mt-10 shadow-inner shadow-black/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex gap-3 h-12 justify-center items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10 shadow-md">
              <img className="w-7 h-7 object-contain" src={Logo} alt="Logo" />
              <TextType
                text={["Travelers List", "By travelers, for travelers."]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                cursorCharacter="|"
                className="md:text-2xl font-extrabold italic tracking-wide text-white capitalize"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-4 text-center text-sm text-gray-400">
          © 1947-2025 Travelers List. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
