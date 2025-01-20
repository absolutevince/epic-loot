export function dataToCard(game) {
  return {
    name: game.name,
    id: game.id,
    backgroundImage: game.background_image,
    rating: game.rating,
    ratingTop: game.rating_top,
    released: game.released,
  };
}

export function dataToProduct(game) {
  return {
    ...dataToCard(game),
    description: game.description_raw,
    metacritic: game.metacritic,
    ratings: game.ratings,
    ratingsCount: game.ratings_count,
    tags: game.tags,
    stores: game.stores,
    genres: game.genres,
    platforms: game.parent_platforms,
    playtime: game.playtime,
    developers: game.developers,
  };
}
