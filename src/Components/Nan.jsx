import React, { useState } from "react";
import Logo from "../assets/assets/logo.svg";
import Text from "../assets/assets/text.svg";


import Dash from "../assets/assets/Icons/dash.svg";
import Analy from "../assets/assets/Icons/analytics.svg";
import Bond from "../assets/assets/Icons/bond.svg";
import Chart from "../assets/assets/Icons/chart.svg";
import Doc from "../assets/assets/Icons/doc.svg";
import Pass from "../assets/assets/Icons/pass.svg";
import Stake from "../assets/assets/Icons/stake.svg";

import {AiOutlineMenu} from "react-icons/ai"


import Tweet from "../assets/assets/Icons/social/twitter.svg"
import Tele from "../assets/assets/Icons/social/telegram.svg"
import Discord from "../assets/assets/Icons/social/discord.svg"

const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <div className="bg-transparent w-full  py-4 ">
      <div className="max-w-[1450px] flex justify-between items-center mx-auto text-white">

        <img src={Logo} alt="/" className="w-12 px-2" />
        <img src={Text} alt="/" className="pl-4 w-32 sm:w-48" />
    

      </div>
    </div>
  );
};

export default Navbar;
