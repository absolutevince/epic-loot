import { useEffect, useState } from "react";
import Filter from "../../layout/filter/Filter.jsx";
import GameList from "../../layout/games-list/GameList.jsx";
import { fetchGames, fetchGamesByPage } from "../../utils/fetchGamesUtils.js";
import style from "./shop.module.css";
import Button from "../../components/button/Button.jsx";

const prevString = "previous";

export default function Shop() {
  const [pagesData, setPagesData] = useState({
    current: null,
    next: null,
    prev: null,
  });
  const [pageNum, setPageNum] = useState(1);
  const [prevPageNum, setPrevPageNum] = useState(1);

  useEffect(() => {
    (async () => {
      if (pageNum === 1) {
        const current = await f(pageNum);
        const next = await f(pageNum + 1);
        setPagesData({ current, next, prev: null });
      } else if (pageNum > prevPageNum) {
        const newCurrent = pagesData.next;
        const newPrev = pagesData.current;
        const newNext = await f(pageNum + 1);
        setPagesData({ current: newCurrent, next: newNext, prev: newPrev });
      } else if (pageNum < prevPageNum) {
        const newCurrent = pagesData.prev;
        const newPrev = await f(pageNum - 1);
        const newNext = pagesData.current;
        setPagesData({ current: newCurrent, next: newNext, prev: newPrev });
      }
      async function f(pageNumber) {
        return await fetchGamesByPage(pageNumber);
      }
    })();
  }, [pageNum]);

  const handleChangePage = (dest) => {
    if (dest === prevString) {
      if (pageNum === 1) return;
      setPageNum(pageNum - 1);
    } else {
      setPageNum(pageNum + 1);
    }
    setPrevPageNum(pageNum);
  };

  console.log({
    current: pagesData.current,
    next: pagesData.next,
    prev: pagesData.prev,
  });
  console.log({
    pageNum,
    prevPageNum,
  });

  return (
    <main className={style.shop}>
      <div className={style.left}>
        <Filter />
      </div>
      <div>
        <div className={style.right}>
          {pagesData.current && (
            <GameList data={pagesData.current.games.results} fullView={true} />
          )}
        </div>
        <div className={style.buttons}>
          <Button onClick={() => handleChangePage(prevString)}>Previous</Button>
          <Button onClick={() => handleChangePage()}>Next</Button>
        </div>
      </div>
    </main>
  );
}
