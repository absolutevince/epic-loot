import ScrollableFile from "./scrollableFile/ScrollableFile.jsx";
import style from "./hero.module.css";
import useWindowDimension from "../../hooks/useWindowDimension.jsx";
import Carousel from "../carousel/Carousel.jsx";
import chevronLeft from "../../assets/icons/chevron-left-outlined.svg";
import chevronRight from "../../assets/icons/chevron-right-outlined.svg";
import Icon from "../../components/icon/Icon.jsx";
import { useState } from "react";

const mockData = ["#300", "#030", "#003", "#330", "#033"];

export default function Hero({ data }) {
  const { width, height } = useWindowDimension();
  const [moveToIndex, setMoveToIndex] = useState(null);

  const handleMoveToIndex = (index) => {
    setMoveToIndex(index);
  };

  return (
    <section className={style.hero}>
      <div className={style.left}>
        <Carousel
          items={mockData}
          wrapperClassName={style.carouselWrapper}
          sliderClassName={style.carouselSlider}
          carouselButtonsClassName={style.carouselButtons}
          leftButtonChildren={
            <Icon src={chevronLeft} alt="Slide Left" w="45" h="45" />
          }
          rightButtonChildren={
            <Icon src={chevronRight} alt="Slide Right" w="45" h="45" />
          }
          w={"100%"}
          h={"100%"}
          direction="horizontal"
          moveToIndex={moveToIndex}
        />
      </div>
      {width > 895 && (
        <ScrollableFile data={mockData} onItemClick={handleMoveToIndex} />
      )}
    </section>
  );
}
