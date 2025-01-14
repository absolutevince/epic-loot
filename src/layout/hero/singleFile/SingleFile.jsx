import { useState } from "react";
import Button from "../../../components/button/Button";
import Icon from "../../../components/icon/Icon";
import chevronLeftIcon from "../../../assets/icons/chevron-left-outlined.svg";
import chevronRightIcon from "../../../assets/icons/chevron-right-outlined.svg";
import style from "./singleFile.module.css";

export default function SingleFile({ data }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleChangeItem = (mode) => {
		if (mode === "add") {
			if (currentIndex < data.length - 1) {
				setCurrentIndex(currentIndex + 1);
			}
		} else if (mode === "subtract") {
			if (currentIndex > 0) {
				setCurrentIndex(currentIndex - 1);
			}
		}
	};
	return (
		<>
			<div className={style.file}>
				{data[currentIndex]}
				<div className={style.buttons}>
					<Button
						variant="transparent"
						onClick={() => handleChangeItem("subtract")}
					>
						<Icon src={chevronLeftIcon} w="35" h="35" />
					</Button>
					<Button variant="transparent" onClick={() => handleChangeItem("add")}>
						<Icon src={chevronRightIcon} w="35" h="35" />
					</Button>
				</div>
			</div>
		</>
	);
}
