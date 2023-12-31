import React from "react";
import Button from "./UI/Button";
import Info from "../assets/info.svg";
import IncludeIcon from "../assets/tick.svg";
import NotIncludeIcon from "../assets/not-include.svg";
function Packages() {
  const features = [
    "Unlimited Transactions",
    "Multi Outlet",
    "Report Featured",
    "Inventory Management",
    "Direct report & teamreview",
    "Emplovee Management System",
    "CRM And Promotion Features",
    "Third Party Application Integration",
  ];
  const plans = [
    {
      name: "Basic",
      price: "$20",
      textColor: "text-green",
      backgroundColor1: "bg-green-100",
      backgroundColor2: "bg-green-200",
      backgroundColor3: "bg-green",
      bestChoice: false,
      features: [
        {
          "Unlimited Transactions": true,
          "Multi Outlet": true,
          "Report Featured": true,
          "Inventory Management": true,
          "Direct report & teamreview": true,
          "Emplovee Management System": false,
          "CRM And Promotion Features": false,
          "Third Party Application Integration": false,
        },
      ],
    },
    {
      name: "Business",
      price: "$30",
      textColor: "text-blue",
      backgroundColor1: "bg-blue-100",
      backgroundColor2: "bg-blue-200",
      backgroundColor3: "bg-blue",
      bestChoice: true,
      features: [
        {
          "Unlimited Transactions": true,
          "Multi Outlet": true,
          "Report Featured": true,
          "Inventory Management": true,
          "Direct report & teamreview": true,
          "Emplovee Management System": true,
          "CRM And Promotion Features": false,
          "Third Party Application Integration": false,
        },
      ],
    },
    {
      name: "Enterprise",
      price: "$50",
      textColor: "text-purple",
      backgroundColor1: "bg-purple-100",
      backgroundColor2: "bg-purple-200",
      backgroundColor3: "bg-purple",
      bestChoice: false,
      features: [
        {
          "Unlimited Transactions": true,
          "Multi Outlet": true,
          "Report Featured": true,
          "Inventory Management": true,
          "Direct report & teamreview": true,
          "Emplovee Management System": true,
          "CRM And Promotion Features": true,
          "Third Party Application Integration": true,
        },
      ],
    },
  ];
  return (
    <div className="w-10/12 mx-auto">
      {/* heading section */}
      <div className="flex  flex-col gap-3 md:gap-0 md:flex-row justify-between ">
        <h1 className="text-2xl md:text-[4rem] md:leading-tight	 text-center md:text-left  font-medium">
          Packages for your business
        </h1>
        <div className="my-auto  ">
          <div className="rounded-2xl flex justify-between  bg-light">
            <Button type={"black"}>Mount</Button>
            <span className="my-auto font-semibold mr-6 ">Annual</span>
          </div>

          <div className="hidden  mt-4 lg:flex gap-2">
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

      <section>
        <div className="container mx-auto py-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="">
                  <p className="text-start mt-16">Price</p>
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={` ${plan.backgroundColor1} border-r-8 border-white text-2xl  rounded-t-3xl  relative`}
                  >
                    {plan.bestChoice && (
                      <span className="bg-orange italic absolute top-0 border-2 border-white  transform translate-x-[-50%] translate-y-[-50%] text-white text-xs lg:py-1 lg:px-2 rounded-full">
                        Best choice
                        <span className="hidden xl:inline">😊</span>
                      </span>
                    )}
                    <div className=" mx-auto rounded-2xl ">
                      <div
                        className={`${plan.backgroundColor2}  flex justify-center place-content-center p-4 rounded-2xl `}
                      >
                        <span
                          className={`font-semibold text-2xl ${plan.textColor}	`}
                        >
                          {plan.name}
                        </span>
                      </div>
                    </div>
                    <p className={`my-3`}>
                      <span className={` text-xl font-semibold md:text-4xl`}>
                        {plan.price}
                      </span>
                      <span className="text-base font-semibold	">/month</span>
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="space-y-6  text-center divide-y divide-[#E2E5E7]">
              {features.map((feature, index) => (
                <tr key={index}>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{feature}</h3>
                  </th>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={`border-r-8 border-white  ${
                        plan.backgroundColor1
                      } ${index === features.length - 1 && "rounded-b-2xl"}`}
                    >
                      {plan.features[0][feature] ? (
                        <img
                          src={IncludeIcon}
                          alt="item includes"
                          className={`${plan.backgroundColor3} rounded-full p-1 m-auto`}
                        />
                      ) : (
                        <img
                          src={NotIncludeIcon}
                          alt="item not includes"
                          className="mx-auto"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Packages;
