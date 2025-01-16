import CustomLink from "../../components/custom-link/CustomLink.jsx";

import style from "./gameList.module.css";

export default function GameList({ title, data, fullView = false }) {
  return (
    <section className={style.container}>
      {!fullView && (
        <div className={style.header}>
          <h2 className={style.heading}>{title}</h2>
          <CustomLink>View More </CustomLink>
        </div>
      )}
      <ul className={style.list}>
        {data.map((d, i) => (
          <li key={i}>{d.name}</li>
        ))}
      </ul>
    </section>
  );
}
