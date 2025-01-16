import ScrollableFile from "./scrollableFile/ScrollableFile.jsx";
import style from "./hero.module.css";
import useWindowDimension from "../../hooks/useWindowDimension.jsx";
import Carousel from "../carousel/Carousel.jsx";
import { useState } from "react";
import useStaticData from "../../hooks/useStaticData.jsx";
import { Icon } from "@iconify/react";

export default function Hero({ data }) {
  const mockGames = useStaticData("games", "mockTopFive"); // To be Deleted
  const { width } = useWindowDimension();
  const [moveToIndex, setMoveToIndex] = useState(null);

  const handleMoveToIndex = (index) => {
    setMoveToIndex(index);
  };

  return (
    <section className={style.hero}>
      <div className={style.left}>
        <Carousel
          items={mockGames}
          wrapperClassName={style.carouselWrapper}
          sliderClassName={style.carouselSlider}
          carouselButtonsClassName={style.carouselButtons}
          leftButtonChildren={
            <Icon
              icon="material-symbols:chevron-left"
              width={45}
              height={45}
              className={style.icon}
            />
          }
          rightButtonChildren={
            <Icon
              icon="material-symbols:chevron-right-rounded"
              width={45}
              height={45}
              className={style.icon}
            />
          }
          w={"100%"}
          h={"100%"}
          direction="horizontal"
          moveToIndex={moveToIndex}
        />
      </div>
      {width > 895 && (
        <ScrollableFile data={mockGames} onItemClick={handleMoveToIndex} />
      )}
    </section>
  );
}
