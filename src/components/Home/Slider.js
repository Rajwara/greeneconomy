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
    {
      id: 1,
      imgUrl: "https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Blue Carbon refers to the carbon captured and stored by coastal and marine ecosystems, such as mangroves, seagrasses, and tidal marshes. These ecosystems are highly efficient at capturing and storing carbon and play a critical role in mitigating the impacts of climate change.",
      name: "Blue Carbon",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Forestry is the management and care of forests and related natural resources, including trees, wildlife, and soil. It encompasses a wide range of activities, including planting, harvesting, and protection of forests, as well as the conservation of biodiversity and ecosystem services.",
      name: "Forestry",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Agriculture can play a role in carbon sequestration, the process of removing carbon dioxide from the atmosphere and storing it in the soil and vegetation.",
      name: "Agriculture",
    },
    {
      id: 5,
      imgUrl: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Wind and solar energy are two renewable sources of power that have started to become much more popular due to their potential for making a positive environmental impact.",
      name: "Wind and Solar",
    },
    {
      id: 6,
      imgUrl:
        "https://images.unsplash.com/photo-1508333509220-c13101299e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      desc: "Anaerobic Digestion is a sustainable process that breaks down organic matter to create energy-rich biogas, vastly reducing the amount of waste sent to landfill.",
      name: "Anaerobic Digestion",
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
              <Button />
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
