import React from "react";
import Button from "./UI/Button";
import Info from "../assets/info.svg";
function Packages() {
  return (
    <div className="w-9/12 mx-auto">
      {/* heading section */}
      <div className="flex  flex-col gap-3 md:gap-0 md:flex-row justify-between ">
        <h1 className="text-2xl md:text-[4rem] md:leading-tight	 text-center md:text-left  font-medium">
          Packages for your business
        </h1>
        <div className="my-auto  ">
          <div className="rounded-2xl flex justify-between md:justify-evenly bg-light">
            <Button type={"black"}>Mount</Button>
            <span className="my-auto font-semibold mx-3 md:mx-0">Annual</span>
          </div>

          <div className="hidden  mt-4 md:flex gap-2">
            <img src={Info} alt="info" />
            <span className="italic font-semibold ">Annual -</span>
            <span className="text-orange italic font-medium	 ">
              2 months free 🎉
            </span>
          </div>
        </div>
      </div>
      {/* heading section ends */}
      {/* package section start */}
      <div className="grid grid-cols-5 mt-16">
       <div className="col-span-2">1</div>
       <div>2</div>
       <div>3</div>
       <div>4</div>
      </div>
    </div>
  );
}

export default Packages;
