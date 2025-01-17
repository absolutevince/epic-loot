import { useEffect, useState } from "react";
import Filter from "../../layout/filter/Filter.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import { fetchGames, fetchGamesByPage } from "../../utils/fetchGamesUtils.js";
import style from "./shop.module.css";
import Button from "../../components/button/Button.jsx";

export default function Shop() {
  const [gameData, setGameData] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function f() {
      const data = await fetchGamesByPage(currentPage, { signal });
      setGameData(data);
    }
    f();

    return () => controller.abort();
  }, [currentPage]);

  const handleChangePage = (dest) => {
    if (dest === "previous") {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className={style.shop}>
      <div className={style.left}>
        <Filter />
      </div>
      <div className={style.right}>
        {!gameData.isLoading && (
          <GameList data={gameData.games.results} fullView={true} />
        )}
      </div>
      <div>
        <Button onClick={() => handleChangePage()}>Next</Button>
        <Button onClick={() => handleChangePage("previous")}>Previous</Button>
      </div>
    </main>
  );
}
