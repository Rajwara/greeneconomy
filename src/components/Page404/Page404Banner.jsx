import React from 'react'
import ForestryBanner from "../../../src/images/About-Us-Banner.jpg"


const Page404Banner = ({title, description, backgroundImage, buttonText}) => {
        const bannerStyle = {
        backgroundImage :  `url(${ForestryBanner})`,
        backgroundSize : "cover",
        backgroundPosition: "center",
        }
  return (
  <  div className="relative">
    <div style={bannerStyle} >
      <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] flex flex-col justify-center text-center	h-[400px]  bg-[#000000] bg-opacity-60  ">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-9xl leading-tight font-[900] text-[#BAB220] font-montserrat" >
        404
        </h1>
        <p className="font-poppins text-lg text-[#EFEDD1] mt-6">OOps Error Page</p>

        <div className="pt-[20px]">
          <a href="/">
          <button className="py-[12px] px-[25px]   hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
           Go Back to Home
          </button>
          </a>
         
        </div>
      </div>
    </div>
  </div>
  )
};

export default Page404Banner








