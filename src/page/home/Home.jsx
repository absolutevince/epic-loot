import Hero from "../../layout/hero/Hero.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import Genres from "../../layout/hero/genres/Genres.jsx";
import style from "./home.module.css";
const mockData = [0, 1, 2, 3, 4, 5];

export default function Home() {
  return (
    <main className={style.home}>
      <Genres />
      <Hero />
      <GameList title="Discover New Games" data={mockData} />
      <GameList title="Popular Games" data={mockData} />
      <GameList title="Top PC Games" data={mockData} />
      <GameList title="Top PlayStation Games" data={mockData} />
      <GameList title="Top Xbox Games" data={mockData} />
    </main>
  );
}
