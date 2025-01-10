import logoTokners from "../assets/images/logoTokners.png";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-3 text-white">
      <h1 className="flex items-center text-xl font-bold cursor-pointer transition-transform hover:scale-110">
        <img className="scale-75" src={logoTokners} alt="" />
        Tokners
      </h1>

      <IoMdMenu className="text-4xl cursor-pointer transition-transform hover:scale-110" />

    </header>
  );
};

export default Header;
