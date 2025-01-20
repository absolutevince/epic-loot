const URL = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`;

export async function fetchGames(url = URL, opts = {}) {
  let data, isLoading, error;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("An error occured", opts);
    const d = await res.json();
    data = d;
    isLoading = false;
    error = null;
  } catch (err) {
    data = null;
    isLoading = false;
    error = err;
  }

  return { data, isLoading, error };
}

export async function fetchGamesByPage(page, opts = {}) {
  return await fetchGames(URL + `&page=${page}`, opts);
}

export async function fetchGameById(id, opts = {}) {
  const URL = `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`;

  return await fetchGames(URL, opts);
}

export async function fetchScreenshotsById(id, opts = {}) {
  const URL = `https://api.rawg.io/api/games/${id}/screenshots?key=${import.meta.env.VITE_API_KEY}`;

  return await fetchGames(URL, opts);
}
