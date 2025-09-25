import TextType from "./TextType.jsx";
import Logo from "../assets/plane-departure-solid-full.svg";

const Footer = ({ Items }) => {
  const items = Items.length;
  const PackedItems = Items.filter((item) => item.packed).length;
  const percentage = Math.round((PackedItems / items) * 100) || 0;
  let message =
    percentage >= 100
      ? `Everything’s packed. Next stop: takeoff! ✈️🔥`
      : ` you have (${items}) items on your list.And you already packed
          ${PackedItems} (${percentage})%
        `;
  return (
    <>
      <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 text-gray-300 py-8 mt-10 shadow-inner shadow-black/30">
        <p className="text-center capitalize  p-3">{message}</p>
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
