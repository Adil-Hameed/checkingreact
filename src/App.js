import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { TbToolsOff } from "react-icons/tb"
import { GrPieChart } from "react-icons/gr"
import { MdOutlineSendToMobile } from "react-icons/md"
import Navbar from "./Components/Navbar";
import Section2 from "./Components/section2";
import Section3 from "./Components/section3";
import Section4 from "./Components/section4";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Section2 />
      <div className="bg-gray-400 ">
        <div className="container grid grid-cols-4 mx-auto">
          <Section3 data={{ h1: "UI/UX Designing", icon: <RiComputerLine /> }} />
          <Section3 data={{ h1: "Graphic Designing", icon: <TbToolsOff /> }} />
          <Section3 data={{ h1: "Website Development", icon: <GrPieChart /> }} />
          <Section3 data={{ h1: "App Development", icon: <MdOutlineSendToMobile /> }} />
        </div>
      </div>
      <Section4 />
    </div>
  );
}

export default App;
