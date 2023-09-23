import React from "react";

import SolutionsHomeimg from "../../assets/img/SolutionsHomeimg.png";
export default function SolutionsHome() {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-4 mx-auto font-roboto mt-10 ">
        <div className=" p-4">
          <img src={SolutionsHomeimg} alt="" />
        </div>

        <div className=" p-4  ">
          <h2 className="text-4xl">Solution: High Standard Carbon Offsets</h2>
          <p className="text-lg">
            Afforestation, the practice of planting trees to restore forests,
            has been a key climate change solution for many years. Sustainable
            afforestation projects can reduce the net zero carbon footprint and
            help combat global warming. By sequestering carbon dioxide, these
            efforts also promote biodiversity in their local area and revive
            ecosystems that have been degraded or destroyed. Afforestation
            offers a win-win situation with its capacity to reduce high-level
            carbon emissions while providing sustainable solutions for future
            generations.
          </p>
          <p className="text-lg">
            The use of high standard carbon offsets for afforestation activities
            is an important approach to creating positive ecological outcomes
            and ensuring lasting change against climate change.
          </p>
        </div>
      </div>
    </div>
  );
}
