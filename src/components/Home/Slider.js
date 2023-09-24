import React, { useRef, useState } from "react";
import "./slider.css";
import arrowleft from "../../../src/images/arrow-left.png"
import arrowright from "../../../src/images/arrow-right.png"
import Button from "../Home/Button";


const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress] = useState(0);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };
  // https://i.postimg.cc/PrMGqZwx/pexels-m-venter-1659437.jpg






  const data = [
   
    {id: 2,
    imgUrl: "https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    desc: "The Green Economy Partnership specializes in carbon trading. Industries receive CO2 emission quotas each year, monitored by CO2 sensor technology. Our experts help businesses reduce emissions, align with less-polluting tech, and calculate carbon footprints. Our experts identify suitable projects, ensuring compliance with Article 6.2 standards, develop project plans, and seek certification from recognized carbon standards. ",
    name: "Carbon Credits",
    buttontext : "Join us for a sustainable tomorrow !",

  },
  {
   
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    desc: "Your global leader in carbon trading and climate solutions. With a goal to achieve net-zero carbon emissions by 2050, our experts help you to play your part to prevent climate change through nature based solutions, renewable energy sources, and carbon trading.",
    name: "Welcome to Green Economy Partnership",
    buttontext : "Join us for a sustainable tomorrow!",
  },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Our planet is suffering from a climate crisis, and demands immediate action. Luckily, nature offers a powerful ally in this fight, with assets like sustainable forestry, blue carbon, and climate-smart agriculture. GEP embraces open climate investments, aiming for zero emissions by 2050. Through sustainable forest management and collaboration, our experts create new income streams while reducing carbon emissions. Join us in the shared goal of a greener future.",
      name: "Nature-Based Solutions ",
      buttontext : "Join us for a sustainable tomorrow!",

    },
    {
      id: 4,
      imgUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "In our pursuit of sustainability, wind generators and solar panels play pivotal roles in combating climate change. GEP encourages cost-effective renewable energy. According to the International Renewable Energy Agency (IREA), unsubsidized renewables are the most economical energy source today. GEP supports wind and solar energy incentives within local communities, helping you contribute to a sustainable future. Our initiatives empower local communities, ensuring a sustainable, cost-efficient, and greener future.",
      name: "Renewable Energy",
      buttontext : "Join us for a sustainable tomorrow!",

    },
    {
      id: 5,
      imgUrl:
        "https://images.unsplash.com/photo-1508333509220-c13101299e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Anaerobic digestion converts organic matter into efficient biogas and nutrient-rich digestate, reducing landfill gas emissions. It's a process found in nature and gaining popularity in waste management and renewable energy, particularly in Dubai. GEP offers consultancy to harness its potential, cut carbon footprints, and establish cost-effective power generation systems for a greener future.",
      name: "Waste Management ",
      buttontext : "Join us for a sustainable tomorrow!",

    },
  ];

  return (
    <div className="container container_slider mx-auto max-w-none px-4 ">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              <button className="capitalize bg-[#316D69] text-white px-6 py-2 rounded font-montserrat">{item.buttontext}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <img src={arrowleft} alt="" /> {/* Left angle symbol */}
        </button>
        <button id="next" onClick={handleClickNext}>
          <img src={arrowright} alt="" />{/* Right angle symbol */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
