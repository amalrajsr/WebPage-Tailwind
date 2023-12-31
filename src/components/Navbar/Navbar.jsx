import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import Button from "../UI/Button";
import Sidebar from "./Sidebar";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigationItem = [
    { name: "Features", redirect: "/" },
    { name: "Pricing", redirect: "/" },
    { name: "Blog", redirect: "/" },
    { name: "Resource", redirect: "/" },
  ];

  return (
    <>
      <nav className="mt-6 hidden md:block">
        <div className="w-11/12	 lg:w-4/5	 mx-auto flex justify-between">
          <img src={Logo} alt="logo" />
          <div className="flex gap-x-10 rounded-2xl	pr-4 font-medium	 bg-light  justify-center">
            <Button  type={"black"}>Home</Button>
            {navigationItem.map((item) => {
              return (
                <a className="my-auto" key={item.name} href={item.redirect}>
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="my-auto">
            <Button>Sign in</Button>
          </div>
        </div>
      </nav>

{/* navbar for smaller screen */}
      <Sidebar toggle={toggle} handleToggle={(value) => setToggle(value)} />
    </>
  );
}

export default Navbar;
