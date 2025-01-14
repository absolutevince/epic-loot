import SearchInput from "../../components/search-input/SearchInput";
import style from "./header.module.css";
import Navigation from "../../components/navigation/Navigation";

import Genres from "../../layout/hero/genres/Genres";

export default function Header() {
	return (
		<header className={style.header}>
			<div className={style.main}>
				<div className={style.left}>
					<h1 className={style.logo}>Epic Loot</h1> <SearchInput />
				</div>
				<Navigation />
			</div>
			<Genres />
		</header>
	);
}
