import logoTokners from "../assets/images/logoTokners.png";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaReddit, FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f1320] font-bold text-white flex flex-col justify-center items-center gap-5 px-5 py-10">
      <h2 className="text-3xl">How to buy</h2>
      <div className="bg-[#171B29] p-5 py-10 rounded-xl">
        <p>
          First Connect your Metamask or TrustWallet to the "Connect Wallet" on
          the Homepage.
        </p>
      </div>
      <div className="bg-[#171B29] p-5 py-10 rounded-xl">
        <p>
          Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
          wallet
        </p>
      </div>
      <div className="bg-[#171B29] p-5 py-10 rounded-xl">
        <p>
          Then after you will received your $WNTR to your address within
          24hours.{" "}
        </p>
      </div>{" "}
      <a href="#">
        <h1 className="flex items-center text-4xl font-bold cursor-pointer transition-transform hover:scale-110 mt-7">
          <img className="scale-90" src={logoTokners} alt="" />
          Tokners
        </h1>
      </a>
      <div className="flex text-3xl gap-3">
        <a href="#">
          <FaXTwitter className="hover:scale-125 transform transition-transform cursor-pointer" />
        </a>
        <a href="#">
          <FaTelegramPlane className="hover:scale-125 transform transition-transform cursor-pointer" />
        </a>
        <a href="#">
          <FaInstagram className="hover:scale-125 transform transition-transform cursor-pointer" />
        </a>
        <a href="#">
          <FaGithub className="hover:scale-125 transform transition-transform cursor-pointer" />
        </a>
        <a href="#">
          <FaReddit className="hover:scale-125 transform transition-transform cursor-pointer" />
        </a>
      </div>
      <p>© 2021 Tokners. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
