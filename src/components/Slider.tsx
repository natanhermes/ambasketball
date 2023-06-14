import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';
import Image from 'next/image';

let count = 0;

let slideInterval: any;
export default function Slider({ items }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef(null);

  const removeAnimation = () => {
    // @ts-ignore
    slideRef.current.classList.remove('fade-anim');
  };

  const handleOnNextClick = () => {
    count = (count + 1) % items.length;
    setCurrentIndex(count);
    // @ts-ignore
    slideRef.current.classList.add('fade-anim');
  };

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  useEffect(() => {
    // @ts-ignore
    slideRef.current.addEventListener('animationend', removeAnimation);
    // @ts-ignores
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    // @ts-ignore
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const handleOnPrevClick = () => {
    const productsLength = items.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    // @ts-ignore
    slideRef.current.classList.add('fade-anim');
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-8 aspect-h-6">
        <Image
          key={currentIndex}
          src={items[currentIndex]}
          priority
          width={500}
          height={500}
          alt="AM Team"
        />
      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
