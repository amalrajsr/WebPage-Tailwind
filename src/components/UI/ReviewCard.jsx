import React from "react";

function ReviewCard({ data }) {
  let textColor, backgroundColor, logoColor;

  switch (data.color) {
    case "green":
      textColor = "text-green";
      backgroundColor = "bg-green-100";
      logoColor = " bg-[#a8ba9b]";
      break;
    case "blue":
      (textColor = "text-blue"),
        (backgroundColor = "bg-blue-200"),
        (logoColor = "bg-[#C5DEF4]");
      break;
    case "orange":
      (textColor = "text-orange-100"), (backgroundColor = "bg-light-orange");
      logoColor = "bg-[#c8a898]";
      break;
    default:
      (textColor = "text-orange-100"), (backgroundColor = "bg-light-orange");
      logoColor = "bg-[#c8a898]";
  }

  return (
    <div
      key={data.name}
      className={`flex justify-center rounded-2xl mb-6 ${backgroundColor}`}
    >
      <div className="m-9">
        <p className={`${textColor}  md:text-2xl md:font-medium`}>
          {data.review}
        </p>
        <div className="flex mt-3 gap-4">
          <div className={` ${logoColor} rounded-full my-auto p-6`}></div>
          <div>
            <p
              className={`${textColor} font-mediu md:font-semibold md:text-lg	`}
            >
              {data.name}
            </p>
            <p className={`${textColor} font-medium md:font-semibold`}>
              {data.job}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
