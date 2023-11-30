import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Welcome to
        <span className="font-semibold mx-2 text-white">FusionwaveAI</span>
        <br />
        Fusion of Web3 and GenerativeAI
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          GenerativeAI enabled NFT Marketplace for <br /> Web3 enthusiasts, NFT
          artists and AI artists
        </p>

        <Link
          to="https://nft.fusionwaveai.com/"
          target="_blank"
          className="neo-brutalism-white neo-btn"
        >
          FusionwaveNFT
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          NFT Card style fully on-chain <br /> 2-player battle game
        </p>

        <Link
          to="https://game.fusionwaveai.com/"
          target="_blank"
          className="neo-brutalism-white neo-btn"
        >
          FusionFight
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Want to know more about FusionwaveAI <br /> We are just a few
          keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          About Us
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
