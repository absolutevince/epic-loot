import CustomLink from "../../../components/custom-link/CustomLink";
import style from "./genres.module.css";

export default function Genres() {
	return (
		<ul className={style.genres}>
			<li>
				<CustomLink>Action</CustomLink>
			</li>
			<li>
				<CustomLink>Indie</CustomLink>
			</li>
			<li>
				<CustomLink>Adventure</CustomLink>
			</li>
			<li>
				<CustomLink>RPG</CustomLink>
			</li>
			<li>
				<CustomLink>Strategy</CustomLink>
			</li>
			<li>
				<CustomLink>Shooter</CustomLink>
			</li>
			<li>
				<CustomLink>Casual</CustomLink>
			</li>
			<li>
				<CustomLink>Simulation</CustomLink>
			</li>
			<li>
				<CustomLink>Puzzle</CustomLink>
			</li>
			<li>
				<CustomLink>Arcade</CustomLink>
			</li>
			<li>
				<CustomLink>Platform</CustomLink>
			</li>
			<li>
				<CustomLink>Massively Multiplayer</CustomLink>
			</li>
			<li>
				<CustomLink>Racing</CustomLink>
			</li>
			<li>
				<CustomLink>Sports</CustomLink>
			</li>
			<li>
				<CustomLink>Fighting</CustomLink>
			</li>
			<li>
				<CustomLink>Family</CustomLink>
			</li>
			<li>
				<CustomLink>Board Games</CustomLink>
			</li>
			<li>
				<CustomLink>Educational </CustomLink>
			</li>
			<li>
				<CustomLink>Card</CustomLink>
			</li>
		</ul>
	);
}
