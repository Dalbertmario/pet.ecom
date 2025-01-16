
import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function CarouselImage({ image = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < image.length - 1 ? prevIndex + 1 : 0
    );
  };

  const onLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : image.length - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <ul className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${image.length * 100}%`,
          }}
      >
        {image.map((el, i) => (
          <li key={el.corid} className="flex-none w-full">
            <img
              src={el.image}
              className="md:h-[280px] md:max-w-[800px] xl:max-w-[1000px] xl:h-[350px] xs:h-[180px] xs:max-w-[390px]"
            />
          </li>
        ))}
      </ul>
      <button
        onClick={onLeft}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-slate-200 bg-opacity-90 text-slate-500 rounded-full p-2"
      >
        <FaAngleLeft size={10} />
      </button>
      <button
        onClick={onRight}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-slate-100 bg-opacity-90 text-slate-500 rounded-full p-2"
      >
        <FaAngleRight size={10} />
      </button>
    </div>
  );
}



