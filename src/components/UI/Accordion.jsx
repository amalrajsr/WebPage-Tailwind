import React, { useState } from "react";
import { FaPlus,FaMinus  } from "react-icons/fa6";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex items-center justify-between p-4 border-t-2 border-b-2 border-[#E4E4E4] cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className={`${activeIndex === index && 'text-orange'} font-medium text-lg md:text-2xl	`}>{item.title}</div>
            <div>{activeIndex === index ? <FaMinus aria-label="close" className="text-orange"/>: <FaPlus  aria-label="open"/>}</div>
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-white transition ease-in duration-300">
              <p className="md:text-xl">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
