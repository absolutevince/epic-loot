import getStaticData from "../utils/getStaticData";
import { useState, useEffect } from "react";

export default function useStaticData(source, type) {
  const [value, setValue] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await getStaticData(source, type);
      setValue(data);
    })();
  }, []);

  return value;
}
