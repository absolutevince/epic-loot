App:

- Fetch the first page of all the data.

Shop:

- Get the data from the `<App />` and store it `currentData state`
- Fetch the second page of the data and save it to a `nextPage state`.
- When the `next` button is clicked, move the data from `currentData state` to `previousData sate` and then move the data
  from `nextPage state` to `currentPage state`.

Home:

- Fetch the data needed for the `<Carousel />`, `NEW`, `POPULAR`, `TOP PC`, `TOP PS`, `TOP XBOX`

Card:

- Create a `dataRecieved state: bool` and use it to determine it's own loading state, (so we can create a placeholder card
