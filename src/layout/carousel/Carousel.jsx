import { useRef, useState, useEffect, createContext } from "react";

export default function Carousel({
  items,
  wrapperClassName,
  sliderClassName,
  carouselButtonsClassName,
  leftButtonChildren,
  rightButtonChildren,
  w,
  h,
  direction,
  moveToIndex,
  children,
}) {
  const sliderRef = useRef();
  const wrapperRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const move = (direction) => {
    if (direction === "left") {
      if (currentIndex === 0) return;
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right") {
      if (currentIndex === items.length - 1) return;
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (moveToIndex !== null || moveToIndex !== undefined)
      setCurrentIndex(moveToIndex);
  }, [moveToIndex]);

  useEffect(() => {
    const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
    const wrapperHeight = wrapperRef.current.getBoundingClientRect().width;
    if (direction === "horizontal") {
      sliderRef.current.style.transform = `translateX(-${wrapperWidth * currentIndex}px)`;
    } else {
      sliderRef.current.style.transform = `translateX(-${wrapperHeight * currentIndex}px)`;
    }
  }, [currentIndex]);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{
        overflow: "hidden",
      }}
    >
      <div
        ref={sliderRef}
        className={sliderClassName}
        style={{
          width:
            direction === "horizontal"
              ? `calc(${w} * ${items.length})`
              : `${w}`,
          height:
            direction === "vertical" ? `calc(${h} * ${items.length})` : `${h}`,
          transition: " transform 300ms",
          display: "flex",
          flexDirection: `${direction === "horizontal" ? "row" : "column"}`,
        }}
      >
        {children}
      </div>
      <div className={carouselButtonsClassName}>
        <button onClick={() => move("left")}>{leftButtonChildren}</button>
        <button onClick={() => move("right")}>{rightButtonChildren}</button>
      </div>
    </div>
  );
}
