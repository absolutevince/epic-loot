import ScrollableFile from "./scrollableFile/ScrollableFile.jsx";
import style from "./hero.module.css";
import useWindowDimension from "../../hooks/useWindowDimension.jsx";
import { useEffect, useRef } from "react";

const mockData = [
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
];

export default function Hero({ data }) {
	const item = useRef();
	const { width, height } = useWindowDimension();

	return (
		<section className={style.hero}>
			<div className={style.left}></div>
			{width > 895 && <ScrollableFile data={mockData} />}
		</section>
	);
}
