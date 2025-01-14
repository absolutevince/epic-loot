import CustomLink from "../custom-link/CustomLink";
import Icon from "../icon/Icon";
import style from "./navigation.module.css";
import homeIcon from "../../assets/icons/home.svg";
import shopIcon from "../../assets/icons/shop.svg";
import heartIcon from "../../assets/icons/heart.svg";

export default function Navigation() {
	return (
		<nav>
			<ul className={style.navigation}>
				<li>
					<CustomLink to="/">
						<Icon src={homeIcon} w="20" h="20" />
						<span>Home</span>
					</CustomLink>
				</li>
				<li>
					<CustomLink to="/shop">
						<Icon src={shopIcon} w="20" h="20" />
						<span>Shop</span>
					</CustomLink>
				</li>

				<li>
					<CustomLink to="/wishlist">
						<Icon src={heartIcon} w="20" h="20" />
						<span>Wishlist</span>
					</CustomLink>
				</li>
			</ul>
		</nav>
	);
}
