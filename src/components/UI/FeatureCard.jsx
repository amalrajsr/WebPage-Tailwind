import React from "react";

function FeatureCard({ feature }) {
  return (
    <div className="col-span-2 md:col-span-1 " key={feature.heading}>
      <img
        className="mx-auto md:mx-0"
        src={feature.logo}
        alt={feature.heading}
      />
      <h3 className="mt-4 text-center md:text-left font-medium	 text-2xl	">
        {feature.heading}
      </h3>
      <p className="mt-4 mr-3 text-center md:text-left ">
        {feature.description}
      </p>
    </div>
  );
}

export default FeatureCard;
