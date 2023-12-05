import React from "react";
import Button from "./UI/Button";
import SearchIcon from "../assets/search.svg";
import Accordion from "./UI/Accordion";

function Faq() {
  const items = [
    {
      title: "What are the common features in the Coca POS system?",
      content:
        "Content for SCommon features in a POS system include order management, payment integration, stock management, sales reporting, data analysis, table management (in restaurants), and customer support.ection 1",
    },
    { title: "How does Coca POS help in managing stock?", content: "Empty " },
    {
      title: "Can the Coca POS application be integrated with other systems?",
      content: "Empty ",
    },
    {
      title: "What is the average cost to purchase and implement a Coca POS?",
      content: "Empty ",
    },
    { title: "What about customer data security?", content: "Empty " },
  ];
  const options = ["Transactions", "Payment", "Others"];
  return (
    <div className="w-11/12 bg-light mx-auto  rounded-xl mb-16">
      <div className=" my-16 mx-10">
        {/* heading section start*/}
        <div className="flex flex-col  md:flex-row">
          <h1 className="text-2xl ml-5 md:text-[4rem] md:leading-tight font-medium text-center md:text-left">
            Frequently Asked <span className="md:block">Questions</span>
          </h1>
          {/* search section */}
          <div className="grow m-auto">
            <div className="rounded-3xl hidden  w-3/4 mx-auto bg-white my-auto lg:flex justify-between md:py-2 ">
              <input
                className="outline-none rounded-2xl ml-3"
                type="text"
                placeholder="type your question here"
              />
              <Button styles={"flex  gap-3 md:mr-2"} type={"orange"}>
                <img className="my-auto" src={SearchIcon} alt="search" />{" "}
                <span className="my-auto">search</span>
              </Button>
            </div>
          </div>

          {/* search section ends */}
        </div>
        {/* heading section ends*/}
        {/* accordian start */}
        <div className="grid grid-cols-12 mt-16 gap-3">
          <div className="col-span-12 md:col-span-2  mx-auto">
            <Button styles={"text-xs md:text-base"}>General</Button>
            {options.map((item) => {
              return (
                <p key={item} className="mx-auto my-4 md:my-10 text-center cursor-pointer font-medium">
                  {item}
                </p>
              );
            })}
           
          </div>

          <div className="col-span-12 md:col-span-10 w-full md:w-10/12 mx-auto	 ">
            <Accordion items={items} />
          </div>
        </div>
        {/* accordian ends */}
      </div>
    </div>
  );
}

export default Faq;
