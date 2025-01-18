import { dataToCard } from "../../utils/dataToCard";
import CustomLink from "../custom-link/CustomLink";
import style from "./card.module.css";

export default function Card({ data }) {
	const game = dataToCard(data);

	return (
		<CustomLink to={`/product/${game.id}`}>
			<article className={style.card}>
				<div className={style.imageContainer}>
					<img src={game.backgroundImage} alt="" width={"100%"} />
				</div>
				<div className={style.info}>{game.name}</div>
			</article>
		</CustomLink>
	);
}
