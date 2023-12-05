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
          } bg-ash border-8 rounded-2xl	hidden lg:block col-span-6 m-8 border-darkGray h-[21.875rem] w-[30.375rem]`}
        ></div>
        {/* left section ends*/}
        {/* right section */}
        <div className="col-span-12 md:col-span-6 m-8 flex flex-col	justify-between">
          <div>
            <h3 className="text-xl md:text-[2rem] leading-10	  font-medium	">
              {content.heading}
            </h3>
            <p className="mt-5">{content.description}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
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
