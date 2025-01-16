import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: false,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw Error("An error occured");
        const data = await res.json();
        setState({
          data: data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          error: error,
        });
      }
    })();
  }, []);

  return { data: state.data, isLoading: state.isLoading, error: state.error };
}
