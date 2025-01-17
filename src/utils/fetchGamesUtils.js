const URL = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`;

export async function fetchGames(url = URL, opts = {}) {
  let games, isLoading, error;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("An error occured", opts);
    const data = await res.json();
    games = data;
    isLoading = false;
    error = null;
  } catch (err) {
    games = null;
    isLoading = false;
    error = err;
  }

  return { games, isLoading, error };
}

export async function fetchGamesByPage(page, opts = {}) {
  return await fetchGames(URL + `&page=${page}`, opts);
}
