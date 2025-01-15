import Hero from "../../layout/hero/Hero.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
const mockData = [0, 1, 2, 3, 4, 5];

export default function Home() {
  return (
    <main>
      <Hero />
      <GameList title="Discover New Games" data={mockData} />
      <GameList title="Popular Games" data={mockData} />
      <GameList title="Top PC Games" data={mockData} />
      <GameList title="Top PlayStation Games" data={mockData} />
      <GameList title="Top Xbox Games" data={mockData} />
    </main>
  );
}
