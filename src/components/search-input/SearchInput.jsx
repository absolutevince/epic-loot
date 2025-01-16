import Button from "../button/Button";
import style from "./searchInput.module.css";
import CustomIcon from "../icon/Icon";

export default function SearchInput() {
  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        placeholder="Search for games"
      />
      <Button className={style.searchButton}>
        <CustomIcon icon="material-symbols:search" width={25} height={25} />
      </Button>
    </div>
  );
}
