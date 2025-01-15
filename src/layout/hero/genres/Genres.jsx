import style from "./genres.module.css";
import useStaticData from "../../../hooks/useStaticData.jsx";

export default function Genres() {
  const genres = useStaticData("genre");
  return (
    <ul className={style.genres}>
      {genres.length > 0 && genres.map((g, i) => <li key={i}>{g}</li>)}
    </ul>
  );
}
