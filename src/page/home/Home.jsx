import Hero from "../../layout/hero/Hero.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import Genres from "../../layout/hero/genres/Genres.jsx";
import style from "./home.module.css";
import useStaticData from "../../hooks/useStaticData.jsx";

export default function Home() {
  const mockGames = useStaticData("games", "mockTopFive");
  return (
    <main className={style.home}>
      <Genres />
      <Hero />
      <GameList title="Discover New Games" data={mockGames} />
      <GameList title="Popular Games" data={mockGames} />
      <GameList title="Top PC Games" data={mockGames} />
      <GameList title="Top PlayStation Games" data={mockGames} />
      <GameList title="Top Xbox Games" data={mockGames} />
    </main>
  );
}
