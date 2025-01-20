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
    const controller = new AbortController();
    const signal = controller.signal;
    (async () => {
      if (pageNum === 1) {
        const current = await fetchGamesByPage(pageNum, { signal });
        const next = await fetchGamesByPage(pageNum + 1, { signal });
        setPagesData({ current, next, prev: null });
      } else if (pageNum > prevPageNum) {
        const newCurrent = pagesData.next;
        const newPrev = pagesData.current;
        const newNext = await fetchGamesByPage(pageNum + 1, { signal });

        setPagesData({ current: newCurrent, next: newNext, prev: newPrev });
      } else if (pageNum < prevPageNum) {
        const newCurrent = pagesData.prev;
        const newPrev = await fetchGamesByPage(pageNum - 1, { signal });
        const newNext = pagesData.current;
        setPagesData({ current: newCurrent, next: newNext, prev: newPrev });
      }
    })();

    return () => controller.abort();
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

  return (
    <main className={style.shop}>
      <div className={style.left}>
        <Filter />
      </div>
      <div>
        <div className={style.right}>
          {pagesData.current && (
            <GameList data={pagesData.current.data.results} fullView={true} />
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
