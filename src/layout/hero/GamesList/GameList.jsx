import style from "./gameList.module.css";

export default function GameList({ title, data }) {
	return (
		<section className={style.container}>
			<h2 className={style.heading}>{title}</h2>
			<ul className={style.list}>
				{data.map((d, i) => (
					<li key={i}>{d}</li>
				))}
			</ul>
		</section>
	);
}
