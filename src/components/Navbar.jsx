import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-18 h-18 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="https://nft.fusionwaveai.com/"
          target="_blank"
          className="text-black"
        >
          FusionwaveNFT
        </NavLink>
        <NavLink
          to="https://game.fusionwaveai.com/"
          target="_blank"
          className="text-black"
        >
          FusionFight
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
