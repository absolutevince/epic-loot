import SearchInput from "../search-input/SearchInput";
import style from "./header.module.css";
import Navigation from "../navigation/Navigation";

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.left}>
				<h1 className={style.logo}>Epic Loot</h1> <SearchInput />
			</div>
			<Navigation />
		</header>
	);
}
