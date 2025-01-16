import useStaticData from "../../hooks/useStaticData.jsx";
import Filter from "../../layout/filter/Filter.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import style from "./shop.module.css";

export default function Shop() {
  const mockGames = useStaticData("games", "mockGames");
  return (
    <main className={style.shop}>
      <div className={style.left}>
        <Filter />
      </div>
      <div className={style.right}>
        <GameList data={mockGames} fullView={true} />
      </div>
    </main>
  );
}
