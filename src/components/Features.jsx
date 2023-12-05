import React from "react";
import ReviewCard from "./UI/ReviewCard";
import FeatureCard from "./UI/FeatureCard";
import SettingLogo from "../assets/settings.svg";
import FinanceLogo from "../assets/finance.svg";
import IntegrateLogo from "../assets/integrate.svg";
import ScalableLogo from "../assets/scalable.svg";
import StockLogo from "../assets/stock.svg";
import SecurityLogo from "../assets/security.svg";
function Features() {
  const features = [
    {
      logo: SettingLogo,
      heading: "Operational efficiency",
      description: "Automate ordering, payment and stock management.",
    },
    {
      logo: SecurityLogo,
      heading: "Security data",
      description:
        "Strong security to protect your customer and business data.",
    },
    {
      logo: StockLogo,
      heading: "Stock management",
      description: "Track stock in real-time and avoid stock outs or wastage.",
    },
    {
      logo: IntegrateLogo,
      heading: "Easy to integrate",
      description:
        "The integration process with third-party services runs easily.",
    },
    {
      logo: FinanceLogo,
      heading: "Manage financial",
      description: "Better record all purchase transactions automatically.",
    },
    {
      logo: ScalableLogo,
      heading: "Business Scalability",
      description: "Easily add & upgrade according to your business growth.",
    },
  ];

  const reviews = [
    {
      review:
        "“We are very impressed with the use of this POS application. Management of orders and payments becomes faster and more accurate so as to increase our operational efficiency.”",
      name: "Stevano William",
      job: "CEO at Pizza Hut",
      color:'green'
    },
    {
      review:
        "“The use of this application has given our company efficiency and accuracy in managing orders and payments.”",
      name: "Jennifer Lopes ",
      job: "Bussiness Owner at KFC Indonesia  ",
      color:'blue'
    },
    {
      review:
        "“We are pleased with the flexibility of this company's POS application. We can easily adapt our menu, prices and promotions according to market needs.”",
      name: "Emanuel Rodrigo ",
      job: "Product Owner McDonald's  ",
      color:'orange'
    },
  ];
  return (
    <div className="w-9/12 mx-auto mt-5 grid grid-cols-12 gap-5 md:gap-0">
      {/* left section */}
      <div className="col-span-12 md:col-span-6">
        <h1 className="text-2xl md:text-[4rem] md:leading-tight	 text-center md:text-left  font-medium">
          Ease in the <span className="md:block">Hand</span>
        </h1>
        <p className="mt-3">
          Using our app in business, especially in the restaurant industry, has
          many advantages. Here are some of them:
        </p>
        <div className="grid grid-cols-2 mt-6 gap-6">
          {features.map((item) => {
            return <FeatureCard feature={item} />;
          })}
        </div>
      </div>

      {/* right section */}
      <div className="col-span-12 md:col-span-6 ">
        {reviews.map((item)=>{
          return <ReviewCard data={item}/>
        })}
        
      </div>
    </div>
  );
}

export default Features;
