import CustomLink from "../custom-link/CustomLink";
import CustomIcon from "../icon/Icon";
import style from "./navigation.module.css";

export default function Navigation() {
	return (
		<nav className={style.container}>
			<ul className={style.navigation}>
				<li>
					<CustomLink to="/">
						<CustomIcon icon="material-symbols:home-rounded" />
						<span>Home</span>
					</CustomLink>
				</li>
				<li>
					<CustomLink to="/shop">
						<CustomIcon icon="material-symbols:shop-rounded" />
						<span>Shop</span>
					</CustomLink>
				</li>

				<li>
					<CustomLink to="/wishlist">
						<CustomIcon icon="material-symbols:bookmark-heart-rounded" />
						<span>Wishlist</span>
					</CustomLink>
				</li>
			</ul>
		</nav>
	);
}
