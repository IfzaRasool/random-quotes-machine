const DISPLAY_QUOTES = 'DISPLAY_QUOTES';
const BASE_URL = 'https://api.quotable.io/random';

const quoteReducers = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_QUOTES:
      return {
        content: action.contents,
        author: action.authors,
      };

    default:
      return state;
  }
};

const displayQuotes = (contents, authors) => ({
  type: DISPLAY_QUOTES,
  contents,
  authors,
});

export async function fetchQuotes(dispatch) {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const contents = data.content;
  const authors = data.author;
  dispatch(displayQuotes(contents, authors));
}

export default quoteReducers;
