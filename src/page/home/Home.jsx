import Hero from "../../layout/hero/Hero.jsx";
import GameList from "../../layout/hero/GamesList/GameList.jsx";
const mockData = [0, 1, 2, 3, 4, 5];

export default function Home() {
	return (
		<main>
			<Hero />
			<GameList title="Discover New Games" data={mockData} />
			<GameList title="Popular Games" data={mockData} />
		</main>
	);
}
