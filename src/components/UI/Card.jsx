import React from "react";
import Button from "../UI/Button";
function Card({ content, index }) {
  return (
    <div key={content.heading} className="mx-auto m-[4rem] bg-light rounded-xl">
      <div className="grid grid-cols-12  gap-3">
        {/* left section */}
        <div
          className={`${
            index % 2 !== 0 && "order-last"
          } bg-ash border-8 rounded-2xl	 lg:block md:col-span-6 hidden m-8 border-darkGray h-10/12 w-10/12  xl:h-[21.875rem] xl:-[30.375rem]`}
        ></div>
        {/* left section ends*/}
        {/* right section */}
        <div className="col-span-12 lg:col-span-6 m-8 flex flex-col	justify-between">
            <h3 className="text-xl md:text-[2rem] leading-10	  font-medium	">
              {content.heading}
            </h3>
            <p className="mt-5">{content.description}</p>
          <div className="flex flex-col lg:flex-row gap-3 mt-3 lg:mt-0">
            <Button styles={"my-2 md:my-0"} type={"orange"}>
              Launch Demo
            </Button>
            <Button styles={'my-auto'} type={"white"}>More Info</Button>
          </div>
        </div>
        {/* right section ends*/}
      </div>
    </div>
  );
}

export default Card;
