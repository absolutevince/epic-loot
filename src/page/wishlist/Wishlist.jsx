import useStaticData from "../../hooks/useStaticData.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import style from "./wishlist.module.css";

export default function Wishlist() {
  const mockGames = useStaticData("games", "mockGames");
  return (
    <section className={style.wishlist}>
      <div className={style.heading}>
        <h2>Wishlist</h2>
      </div>
      <div>
        <GameList fullView data={mockGames} />
      </div>
    </section>
  );
}
