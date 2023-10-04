import React,{useState} from "react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { MdAccountBalance } from 'react-icons/md';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GiGreenhouse } from 'react-icons/gi';
import { GiGreenPower } from 'react-icons/gi';
import { PiSuitcaseSimpleDuotone } from 'react-icons/pi';





import agriculture from "../../../src/images/agriculture-nature.jpg";

const TabsCustomAnimation = () => {

  const data = [
    {
      label: "Paris Agreement",
      value: "Paris",
      icon: GiGreenPower,
      heading: "2015",
      desc: `  It was adopted by 196 nations at the 21st session of the Conference of Parties (COP21). In this agreement, the goal  was set to limit global warming to well below 2 degrees Celsius above pre-industrial levels to limit the increase in temperature to 1.5 degrees Celsius. 
          From 2015 onwards, there was a rapid expansion of renewable energy capacity, advancing the transition to zero emissions. 
          `,
      imagedec: agriculture,
    },
    {
      label: "Profile",
      value: "profile",
      icon: FcMoneyTransfer,
      desc: `There was implementation of cap-and-trade systems, aimed to create financial incentives to encourage industries to reduce their carbon footprint. 
          There was also significant advancement in electric vehicle technology, contributing to zero emission transportation goals. 
          `,
      heading: "2015 - 2017",

      imagedec: agriculture,
    },
    {
      heading: "2020- 2021 ",
      label: "Greenhouse",
      value: "Greenhouse",
      icon: GiGreenhouse,
      desc: `Global greenhouse gas emission reduced in the pandemic. It highlighted the potential for emission reductions, and encouraged discussions to increase carbon capture.
          Renewable energy installations also continued to grow in these years, demonstrating the importance of renewable energy in achieving long-term zero emissions goals. 
          `,
      imagedec: agriculture,
    },
    {
      heading: "2030 ",
      label: "Countries",
      value: "year2030",
      icon: MdAccountBalance,
      desc: `Countries have set ambitious climate goals for 2030. These include advancement toward carbon neutrality by investing in carbon capture technologies. 
          The development efforts in this decade will lead to breakthroughs in cost-effective solutions in reducing CO2 from the atmosphere. 
           
          `,
      imagedec: agriculture,
    },
    {
      heading: "2050",
      label: "Pledges",
      value: "year2050",
      icon: PiSuitcaseSimpleDuotone,
      desc: `Pledges to achieve net-zero emissions by 2050 have been made by the top seven emitters (China, the United States of America, India, the European Union, Indonesia, the Russian Federation, Brazi)

           
          `,
      imagedec: agriculture,
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].value);

  return (
    

    <div className="">
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl md:text-3xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4 text-center">
        The Route to Carbon Neutrality
      </h2>
      <Tabs value={activeTab}>
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)} // Set the active tab on click
            >
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5 text-[#316D69]" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="active">
          {data.map((items) => (
            <TabPanel key={items.value} value={items.value}>
              <div className="grid grid-cols-2 justify-around ">
                <div className="justify-center flex flex-col">
                  <h5 className="uppercase text-2xl text-[#316D69] font-bold	font-montserrat mt-5">
                    {items.heading}
                  </h5>
                  <p className="font-poppins text-lg text-[#3c3c3c] font-normal leading-7 mt-3">
                    {items.desc}
                  </p>
                </div>
                <div className="pl-10">
                  <img src={items.imagedec} alt="" />
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  </div>

  );
};

export default TabsCustomAnimation;
