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
            <span className="my-auto font-semibold mx-3 md:mx-0">Annual</span>
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
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="">
                  <p className="text-start mt-10">Price</p>
                </th>
                {plans.map((plan) => (
                  <>
                    <th
                      key={plan.name}
                      scope="col"
                      className={` ${plan.backgroundColor1} rounded-t-xl`}
                    >
                      {/* {plan.bestChoice && (
                      <span className="bg-red-500  text-white text-xs  px-2 rounded-full">
                        Best choice
                      </span>
                    )} */}
                      <div className=" mx-auto rounded-xl ">
                        <div
                          className={`${plan.backgroundColor2}  flex justify-center place-content-center p-3 rounded-xl `}
                        >
                          <span
                            className={`font-semibold text-2xl ${plan.textColor}	`}
                          >
                            {plan.name}
                          </span>
                        </div>
                      </div>
                      <p className={`mb-3`}>
                        <span className={` text-2xl font-bold sm:text-4xl`}>
                          {plan.price}
                        </span>
                        <span className="font-medium">/month</span>
                      </p>
                    </th>
                  </>
                ))}
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y divide-[#E2E5E7]">
              {features.map((feature, index) => (
                <tr key={index}>
                  <th scope="row" className="text-left">
                    <h3 className="py-3">{feature}</h3>
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`${plan.backgroundColor1}`}>
                      {plan.features[0][feature] ? (
                        <img
                          src={IncludeIcon}
                          alt="item includes"
                          className="bg-green rounded-full p-1 m-auto"
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
