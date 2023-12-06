import React from "react";
import Button from "./UI/Button";
import Logo from "../assets/white-logo.svg";
import FacebookLogo from '../assets/facebook.svg'
import InstaGramLogo from '../assets/instagram.svg'
import TwitterLogo from '../assets/twitter.svg'
function Footer() {
  const footerImage =
    "https://res.cloudinary.com/dsw9tifez/image/upload/v1701786534/inter-smart/footer_yzenm6.png";

    const footerOptions=['Features','Pricing','Blog','Resource','Terms & Conditions','Privacy Policy']
  return (
    <footer className="w-11/12 mx-auto">
      <img src={footerImage} alt="describing unforgettable customer experience"  loading="lazy" className="rounded-t-xl w-full" />
      <div className="footer bg-dark lg:h-[37.375rem] flex items-center ">
        <div className="md:m-auto  h-3/4 w-10/12 mx-auto ">
          <h1 className="text-lg md:text-5xl md:leading-tight mx-auto text-white text-center md:text-left  font-medium">
            Don't Miss This Exclusive
            <span className="md:block"> Opportunity</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-12">
            <p className=" text-center md:text-left md:text-xl text-[#C2C2C2]">
              Enter your email address and start connecting with a
              <span className="md:block">
                better business world using our POS products.
              </span>
            </p>
            {/* subscribe section */}
            <div className="mx-16">
              <div className="rounded-3xl hidden  mx-auto bg-[#232329] my-auto px-2 lg:flex justify-between md:py-2 ">
                <input
                  className="outline-none rounded-2xl text-[#828487] bg-[#232329]"
                  type="text"
                  placeholder="Enter your email"
                />
                <Button type={"orange"}> Subscribe</Button>
              </div>
            </div>
            {/* subscribe section ends*/}
          </div>
          <div class="border-t border-[#2D2D30] h-px mt-16"></div>
          {/* footer section starts */}
          <div className="flex justify-between flex-col md:flex-row  mt-5 md:mt-16 md:my-10">
            <div>
              <img src={Logo} alt="coca logo" className="mx-auto " />
            </div>
            <div className="grid grid-cols-6 gap-3 md:gap-0 ">
                {footerOptions.map((item)=>{
                    return <p key={item} className="col-span-6 md:col-span-1 mx-auto cursor-pointer text-white">{item}</p>
                })}
            </div>
           
          </div>
          <div  className="flex flex-col md:flex-row justify-between">
            <p className="text-white my-auto mx-auto md:mx-0">© 2023 Coca, Inc. All rights reserved.</p>
            <div className="md:flex gap-5 justify-evenly rounded-2xl bg-[#232329] hidden p-3 mx-5">
                <img src={FacebookLogo} alt="facebook logo" />
                <img src={InstaGramLogo} alt="instagram logo" />
                <img src={TwitterLogo} alt="twitter logo" />
            </div>
          </div>
          {/* footer section ends */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
