import Button from "../button/Button";
import Icon from "../icon/Icon";
import searchIconBold from "../../assets/icons/searchBold.svg";
import style from "./searchInput.module.css";

export default function SearchInput() {
  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        placeholder="Search for games"
      />
      <Button className={style.searchButton}>
        <Icon src={searchIconBold} w="20" h="20" />
      </Button>
    </div>
  );
}
