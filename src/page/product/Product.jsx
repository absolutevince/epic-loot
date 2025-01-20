import { useState, useEffect } from "react";
import {
	fetchGameById,
	fetchScreenshotsById,
} from "../../utils/fetchGamesUtils";
import { useParams } from "react-router-dom";
import { dataToProduct } from "../../utils/formatData";
import style from "./product.module.css";
import Carousel from "../../layout/carousel/Carousel";
import { Icon } from "@iconify/react";

export default function Product() {
	const [product, setProduct] = useState(null);
	const [screenshots, setScreenshots] = useState(null);
	const params = useParams();

	const [moveToIndex, setMoveToIndex] = useState(null);

	const handleMoveToIndex = (index) => {
		setMoveToIndex(index);
	};

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		(async function() {
			const data = await fetchGameById(params.id, { signal });
			setProduct(dataToProduct(data.data));
		})();

		(async function() {
			const screenshots = await fetchScreenshotsById(params.id, { signal });
			setScreenshots(screenshots.data.results);
		})();

		return () => controller.abort();
	}, [params.id]);

	return (
		<main className={style.wrapper}>
			{product === null && (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
			{product !== null && (
				<section className={style.product}>
					<div className={style.top}>
						<h1 className={style.name}>{product.name}</h1>
						<p className={style.developers}>{product.developers[0].name}</p>
						<div className={style.carouselContainer}>
							{screenshots !== null && (
								<Carousel
									items={screenshots}
									wrapperClassName={style.carouselWrapper}
									sliderClassName={style.carouselSlider}
									carouselButtonsClassName={style.carouselButtons}
									leftButtonChildren={
										<Icon
											icon="material-symbols:chevron-left"
											width={45}
											height={45}
											className={style.icon}
										/>
									}
									rightButtonChildren={
										<Icon
											icon="material-symbols:chevron-right-rounded"
											width={45}
											height={45}
											className={style.icon}
										/>
									}
									w={"100%"}
									h={"100%"}
									direction="horizontal"
									moveToIndex={moveToIndex}
								>
									{screenshots.map((sh) => (
										<div key={sh.id} className={style.carouselItem}>
											<img className={style.image} src={sh.image} alt="" />
										</div>
									))}
								</Carousel>
							)}
						</div>
					</div>

					<div className={style.bottom}>
						<div className={style.left}>
							<div className={style.descriptionContainer}>
								<p className={style.description}>{product.description}</p>
								<div className={style.ratingsContainer}></div>
							</div>
						</div>
						<div className={style.right}></div>
					</div>
				</section>
			)}
		</main>
	);
}
