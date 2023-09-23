import React from "react";
import MainBanner from "../../components/ContactUS/ContactBanner";
import ContactForm from "../../components/ContactUS/ContactForm";
import ContactMap from "../../components/ContactUS/ContactMap";
// import Banner from "../../components/BannerForAllPages/Banner";

const ContactUs = () => {
  return (
    <div>
      <div className="  font-roboto relative">
        {/* Text Content */}
        <MainBanner />
        {/* <Banner
          title="Welcome to Our Website"
          description="Discover amazing content here!"
          backgroundImage="/images/home-background.jpg"
          buttonText="Learn More" // Replace with your desired button text
        /> */}

        {/* 2nd Section */}

        <section className=" dark:bg-gray-800 mb-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
          <ContactForm />
        </section>
        <section className=" text-white  ">
          <ContactMap />
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
