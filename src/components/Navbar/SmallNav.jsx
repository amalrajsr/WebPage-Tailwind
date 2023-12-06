import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaAlignJustify } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import Button from "../UI/Button";

function SmallNav({ toggle, handleToggle }) {
  const navigationItem = [
    { name: "Home", redirect: "/" },
    { name: "Features", redirect: "/" },
    { name: "Pricing", redirect: "/" },
    { name: "Blog", redirect: "/" },
    { name: "Resource", redirect: "/" },
  ];
  return (
    <>
      {toggle ? (
        <div className="md:hidden transition-all duration-300 ease-in-out w-1/5 min-w-fit z-20 fixed right-0 h-screen bg-[#f9fbfa]">
          <div className="flex m-5 flex-col gap-5 cursor-pointer">
            <div className="flex justify-between">
              <img src={Logo} className="w-10 md:w-1/2" alt="logo of coca" />
              <RxCross2
                className="my-auto text-xl"
                onClick={() => handleToggle(false)}
              />
            </div>
            {navigationItem.map((item) => {
              return (
                <a className="text-sm " key={item.name} href={item.redirect}>
                  {item.name}
                </a>
              );
            })}

            <div>
              <a className="text-orange" href="/">
                Sign in
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="md:hidden transition-all duration-300 ease-in-out mt-5">
          <div className="flex justify-between mx-5">
            <img src={Logo} alt="logo of coca" />
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
