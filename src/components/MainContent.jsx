import React from "react";

function MainContent() {
  const banner1 =
      "https://res.cloudinary.com/dsw9tifez/image/upload/v1701688146/inter-smart/header1_ijnx37.png",
    banner2 =
      "https://res.cloudinary.com/dsw9tifez/image/upload/v1701688146/inter-smart/header2_mnihv4.png";

  const restaurants = [
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701692820/inter-smart/logo-kfc-colonel_yng9i8.png",
      alt: "KFC",
    },
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701691936/inter-smart/starbucks_k0q4aa.png",
      alt: "Starbucks",
    },
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701692820/inter-smart/Mask_group_bpcusq.png",
      alt: "Mask group",
    },
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701691931/inter-smart/burger-king_lvg7ph.png",
      alt: "burger king",
    },
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701691932/inter-smart/mcdonalds_oht5qr.png",
      alt: "mcdonalds",
    },
    {
      url: "https://res.cloudinary.com/dsw9tifez/image/upload/v1701691934/inter-smart/Pizza-Hut-New_1_igfqyh.png",
      alt: "Pizza hut",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-12  lg:col-span-8 mx-auto">
          <img
            src={banner1}
            alt="providing free options"
            className="w-11/12 mx-auto md:w-full"
          />
        </div>
        <div className=" hidden lg:block col-span-4">
          <img
            src={banner2}
            alt="statistics ,review and rating of the product"
            className=""
          />
        </div>
      </div>
      {/* logo section */}
      <div className="w-10/12 mx-auto">
        <p className="text-center font-medium	">
          Trusted by over 50 thousand restaurants in 10+ countries
        </p>
        <div className="gap-5 grid grid-cols-6 mx-auto mt-5">
          {restaurants.map((item) => {
            return (
              <div
                key={item.url}
                className="col-span-3 sm:col-span-2 lg:col-span-1 flex justify-center"
              >
                <img src={item.url} alt={`${item.alt} restaurant`} className="transition ease-in-out delay-5 duration-300 hover:-translate-y-1" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainContent;
