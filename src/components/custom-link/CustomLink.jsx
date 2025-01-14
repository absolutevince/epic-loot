import { Link } from "react-router-dom";
import style from "./customLink.module.css";

export default function CustomLink({ to, children, variant = "link" }) {
	return (
		<Link className={style[variant]} to={to}>
			{children}
		</Link>
	);
}
