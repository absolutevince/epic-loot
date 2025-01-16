import { useEffect, useRef, useState } from "react";
import Button from "../../components/button/Button.jsx";
import Dropdown from "../../components/drop-down/Dropdown.jsx";
import style from "./filter.module.css";
import useStaticData from "../../hooks/useStaticData.jsx";
import useWindowDimension from "../../hooks/useWindowDimension.jsx";

const breakpoint = 1036;

export default function Filter() {
  const filtersRef = useRef();
  const genres = useStaticData("genre");
  const platforms = useStaticData("platform");
  const stores = useStaticData("store");
  const publishers = useStaticData("publisher");
  const tags = useStaticData("tag");
  const [openFilters, setOpenFilters] = useState(false);
  const { width, height } = useWindowDimension();
  const [filters, setFilters] = useState({
    store: null,
    genre: null,
    platform: null,
    tag: null,
    publisher: null,
  });

  useEffect(() => {
    if (width <= breakpoint) {
      if (openFilters) {
        filtersRef.current.style.opacity = 1;
        filtersRef.current.style.visibility = "visible";
      } else {
        filtersRef.current.style.opacity = 0;
        filtersRef.current.style.visibility = "hidden";
      }
    } else {
      setOpenFilters(false);
      filtersRef.current.style.opacity = 1;
      filtersRef.current.style.visibility = "visible";
    }
  }, [openFilters, width]);

  const handleOpenFilter = () => {
    setOpenFilters(!openFilters);
  };

  const setFilterGenre = (value) => {
    setFilters({ ...filters, genre: value });
  };

  const setFilterPlatform = (value) => {
    setFilters({ ...filters, platform: value });
  };

  const setFilterStore = (value) => {
    setFilters({ ...filters, store: value });
  };
  const setFilterPublisher = (value) => {
    setFilters({ ...filters, publisher: value });
  };
  const setFilterTag = (value) => {
    setFilters({ ...filters, tag: value });
  };

  const handleFilter = () => { };

  return (
    <aside className={style.filter}>
      {width <= breakpoint && (
        <Button onClick={handleOpenFilter}>Filters</Button>
      )}
      <div ref={filtersRef} className={style.list}>
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
          value={filters.store}
          options={stores}
          name="store"
          onDropDownSelect={setFilterStore}
        />
        <Dropdown
          value={filters.publisher}
          options={publishers}
          name="publisher"
          onDropDownSelect={setFilterPublisher}
        />
        <Dropdown
          value={filters.tag}
          options={tags}
          name="tag"
          onDropDownSelect={setFilterTag}
        />
        <div className={style.buttons}>
          <Button onClick={handleFilter} variant="lightExtra">
            Filter
          </Button>
        </div>
      </div>
    </aside>
  );
}
