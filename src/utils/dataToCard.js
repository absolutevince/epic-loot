export function dataToCard(data) {
  const game = data;
  return {
    name: game.name,
    id: game.id,
    backgroundImage: game.background_image,
    rating: game.rating,
    ratingTop: game.rating_top,
    released: game.released,
  };
}
