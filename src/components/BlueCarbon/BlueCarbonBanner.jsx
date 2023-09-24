import React from 'react'
import backgroundImage from "../../../src/images/bluecarbonbanner.jpg";
import Banner from '../BannerForAllPages/Banner';

const BlueCarbonBanner = () => {
  return (
    <Banner
    title='Carbon Credits'
    description='Carbon Credits'
    backgroundImage={backgroundImage}
    buttonText='Read more'
    />
  )
}

export default BlueCarbonBanner