import { useState, useRef, useEffect } from "react";
import style from "./dropdown.module.css";
import { Icon } from "@iconify/react";

export default function Dropdown({
  value,
  id,
  options,
  name,
  onDropDownSelect,
}) {
  const iconRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue) => {
    if (value !== selectedValue) onDropDownSelect(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      iconRef.current.style.transform = "rotate(90deg)";
    } else if (!open) {
      iconRef.current.style.transform = "rotate(0deg)";
    }
  }, [open]);

  return (
    <div className={style.container}>
      <div className={style.select}>
        <p className={style.name}>
          {name.toUpperCase()}
          <span className={style.iconContainer}>
            <Icon
              icon="material-symbols-light:arrow-top-right-rounded"
              fontSize={30}
            />
          </span>
        </p>
        <div
          onClick={() => setOpen(!open)}
          className={style.value}
          name={name}
          role="select"
        >
          <span>{value}</span>
          <div ref={iconRef} className={style.iconContainer}>
            <Icon icon="material-symbols:arrow-right-rounded" fontSize={30} />
          </div>
        </div>
      </div>
      {open && (
        <div className={style.options}>
          {options.length > 0 &&
            options.map((opt, i) => (
              <div
                key={i}
                data-value={opt}
                onClick={(e) => handleSelect(e.target.dataset.value)}
                role="option"
              >
                {opt}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
