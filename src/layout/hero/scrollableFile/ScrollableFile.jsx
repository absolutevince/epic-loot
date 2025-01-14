import style from "./scrollableFile.module.css";

export default function ScrollableFile({ data, handleChangeItem }) {
	return (
		<div className={style.container}>
			<ul className={style.scrollable}>
				{data.map((d, index) => (
					<li key={index}>
						<div onClick={() => handleChangeItem(index)}>{d}</div>
					</li>
				))}
			</ul>
		</div>
	);
}
