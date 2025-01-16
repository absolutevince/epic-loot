import style from "./genres.module.css";
import useStaticData from "../../../hooks/useStaticData.jsx";
import CustomLink from "../../../components/custom-link/CustomLink.jsx";

export default function Genres() {
  const genres = useStaticData("filters", "genre");
  return (
    <ul className={style.genres}>
      {genres.length > 0 &&
        genres.map((g, i) => (
          <li key={i}>
            <CustomLink>{g}</CustomLink>
          </li>
        ))}
    </ul>
  );
}
