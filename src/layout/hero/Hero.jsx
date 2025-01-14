import { useRef } from "react";
import SingleFile from "./singleFile/SingleFile";
import ScrollableFile from "./scrollableFile/ScrollableFile";
import style from "./hero.module.css";
import useWindowDimension from "../../hooks/useWindowDimension";

const mockData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Hero({ data }) {
	const scrollable = useRef();
	const { width, height } = useWindowDimension();

	return (
		<section className={style.hero}>
			<div className={style.left}></div>
			<div className={style.right} ref={scrollable}>
				{width <= 895 && <SingleFile data={mockData} />}
				{width > 895 && <ScrollableFile data={mockData} />}
			</div>
		</section>
	);
}
