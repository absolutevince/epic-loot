import Filter from "../../layout/filter/Filter.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import style from "./shop.module.css";

const mockData = [
  0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
];
export default function Shop() {
  return (
    <main className={style.shop}>
      <div className={style.left}>
        <Filter />
      </div>
      <div className={style.right}>
        <GameList data={mockData} fullView={true} />
      </div>
    </main>
  );
}
