import TextType from "./TextType";
import Logo from "../assets/plane-departure-solid-full.svg";
const Header = () => {
  return (
    <>
      <header className="p-2 flex items-center justify-center border-b border-white/10 bg-white/5 backdrop-blur-lg shadow-lg shadow-black/40">
        <div className="flex gap-3 h-12 justify-center items-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
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
      </header>
    </>
  );
};

export default Header;
