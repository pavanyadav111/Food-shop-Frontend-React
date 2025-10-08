import React from "react";
import Heading from "../Heading/Heading.jsx";
import Fruitscat from '../../assets/fruits-and-veggies.png'
import SeaFoodcat from '../../assets/meat-and-seafood.png';
import Dairycat from "../../assets/dairy-and-eggs.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map(card => {
    return (
      <div className="flex-1  basis-[300px] " key={card.id}>
        <div className="w-full min-h-[30vh] relative -mb-10">
          <img src={card.image} alt="" className="absolute bottom-0" />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-xl ">
          <h3 className="text-zinc-800 text-3xl font-bold"> {card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link to={card.path} className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-poiinter ">See all</Link>
        </div>

      </div>
    )
  })
  return (
    <section>
      <div className=" max-w-[1400px] mx-auto px-10 py-20">

        <Heading highlight="Shop" heading="by Category" />

        {/* category card */}
        <div className="flex gap-10 md:mt-15 flex-wrap">
          {renderCards}
        </div>
      </div>
    </section>
  );
};

export default Category;

export const category = [
  {
    id: 1,
    title: "Fruits & Vegies",
    description:
      " Fresh ,Organic product sourced daily from local farms, Explore a wide range of seasional fruits and crisp vegitables.",
    image: Fruitscat,
    path:'/Fruits',
  },

  {
    id: 2,
    title: "Meat & SeaFood",
    description:
      " High quality, responsibilitu sourced meat and seafood . choose from fresh cuts , marinated options, and more.",
    image: SeaFoodcat,
    path:'/SeaFood',
  },

  {
    id: 3,
    title: "Dairy & Eggs ",
    description:
      " Dairy and Eggs high quality, responsibilitu sourced meat and seafood . choose from fresh cuts , marinated options, and more.",
    image: Dairycat,
    path:'/Dairy'
  },
];
