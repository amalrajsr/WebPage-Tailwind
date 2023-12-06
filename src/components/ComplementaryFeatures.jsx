import React from "react";
import Card from "./UI/Card";

function ComplementaryFeatures() {
  const data = [
    {
      heading: "Dashboard to monitor your business sales from anywhere",
      description:
        "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
    },
    {
      heading: "Easier and better Desk Management",
      description:
        "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.",
    },
    {
      heading: "More efficient customer recording and monitoring",
      description:
        "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
    }
  ];
  return (
    <div className="">
      <div className="w-10/12 mx-auto">
        <h1 className="text-2xl md:text-[4rem] md:leading-tight	 text-center md:text-left mt-10 md:mt-16 font-medium">
          Complementary features <br></br> for your business needs
        </h1>
        {data.map((item, i) => {
          return <Card content={item} index={i}/>;
        })}
      </div>
    </div>
  );
}

export default ComplementaryFeatures;
