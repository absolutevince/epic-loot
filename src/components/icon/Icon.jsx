import { Icon } from "@iconify/react";
import style from "./icon.module.css";

export default function CustomIcon({
	icon,
	width = 25,
	height = 25,
	variant = "light",
}) {
	return (
		<Icon
			icon={icon}
			width={width}
			height={height}
			className={style[variant]}
		/>
	);
}
