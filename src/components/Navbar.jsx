import React from "react";
import Logo from "../assets/logo.svg";
function Navbar() {
  return (
    <div className="w-1/5	z-20 fixed right-0 h-screen bg-[#f9fbfa]">
      <div className="flex m-5 flex-col gap-5 cursor-pointer">
        <div>
          <img src={Logo} alt="sfdsd" />
        </div>
        <span>sdfjlsjk</span>
        <span>sdfjlsjk</span>
        <span>sdfjlsjk</span>
        
      </div>
    </div>
  );
}

export default Navbar;
