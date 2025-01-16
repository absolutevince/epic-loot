import style from "./scrollableFile.module.css";

export default function ScrollableFile({ data, onItemClick }) {
  return (
    <div className={style.container}>
      <ul className={style.scrollable}>
        {data.map((d, index) => (
          <li onClick={() => onItemClick(index)} key={index}>
            <div>{d.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
