import React from 'react'
import backgroundImage from "../../../src/images/bluecarbonbanner.jpg";
import Banner from '../BannerForAllPages/Banner';

const BlueCarbonBanner = () => {
  return (
    <Banner
    title='Carbon Credits'
    description='The Green Economy Partnership specializes in carbon trading. Industries receive CO2 emission quotas each year, monitored by CO2 sensor technology. Our experts help businesses reduce emissions, align with less-polluting tech, and calculate carbon footprints. Our experts identify suitable projects, ensuring compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards.'
    backgroundImage={backgroundImage}
    buttonText='Read more'
    />
  )
}

export default BlueCarbonBanner