import { useState } from "react";
import Button from "../../components/button/Button.jsx";
import Dropdown from "../../components/drop-down/Dropdown.jsx";
import style from "./filter.module.css";
import useStaticData from "../../hooks/useStaticData.jsx";

export default function Filter() {
  const genres = useStaticData("genre");
  const platforms = useStaticData("platform");
  const [filters, setFilters] = useState({ genre: null, platform: null });

  const setFilterGenre = (value) => {
    setFilters({ ...filters, genre: value });
  };

  const setFilterPlatform = (value) => {
    setFilters({ ...filters, platform: value });
  };
  const handleFilter = (value) => {};

  return (
    <aside className={style.filter}>
      <Dropdown
        value={filters.genre}
        options={genres}
        name="genre"
        onDropDownSelect={setFilterGenre}
      />
      <Dropdown
        value={filters.platform}
        options={platforms}
        name="platfrom"
        onDropDownSelect={setFilterPlatform}
      />
      <Dropdown
        value={filters.platform}
        options={platforms}
        name="platfrom"
        onDropDownSelect={setFilterPlatform}
      />
      <div className={style.buttons}>
        <Button onClick={handleFilter} variant="lightExtra">
          Filter
        </Button>
      </div>
    </aside>
  );
}
