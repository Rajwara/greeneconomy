import React from 'react'
import Banner from '../BannerForAllPages/Banner'
import banner from "../../../src/images/anaerobic-main-bnr.jpg";
const AnaerobicBanner = () => {
  return (
    <Banner
    title='Waste Management'
    description="Anaerobic Digestion is a sustainable process that breaks down organic matter to create energy-rich biogas, vastly reducing the amount of waste sent to landfill. It's an efficient and eco-friendly way for individuals and companies alike to reduce their environmental footprint!"
    backgroundImage={banner}
    buttonText='Contact Us'
    />
  )
}

export default AnaerobicBanner