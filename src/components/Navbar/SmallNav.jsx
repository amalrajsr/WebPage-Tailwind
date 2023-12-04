import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaAlignJustify } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import Button from "../Button";

function SmallNav({ toggle, handleToggle }) {
  return (
    <>
      {toggle ? (
        <div className="md:hidden w-1/5 min-w-fit z-20 fixed right-0 h-screen bg-[#f9fbfa]">
          <div className="flex m-5 flex-col gap-5 cursor-pointer">
            <div className="flex justify-between">
              <img src={Logo} className="w-10 md:w-1/2" alt="logo" />
              <RxCross2
                className="my-auto text-xl"
                onClick={() => handleToggle(false)}
              />
            </div>
            <span>Home</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>Blog</span>
            <span>Resource</span>
            <div>
              <Button>Sign in</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:hidden mt-5">
          <div className="flex justify-between mx-5">
            <img src={Logo} alt="logo" />{" "}
            <FaAlignJustify
              className="text-xl my-auto"
              onClick={() => handleToggle(true)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SmallNav;
