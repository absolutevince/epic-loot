import style from "./button.module.css";

export default function Button({ children, onClick, variant = "default" }) {
	return (
		<button className={style[variant]} onClick={onClick}>
			{children}
		</button>
	);
}
