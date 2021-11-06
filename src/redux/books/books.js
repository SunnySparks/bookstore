const GET_BOOKS_SUCCESS = 'bookStore/books/GET_BOOKS_SUCCESS';
const apiID = 'yozOG7uq64vvExbwooD9';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;
const initialState = {
  books: [],
};
export const getBooks = () => (dispatch) => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: resResponse,
    }));
};
export const addBook = (payload) => (dispatch) => {
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => dispatch(getBooks()));
};
export const removeBook = (payload) => (dispatch) => {
  fetch(`${API_URL}/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => dispatch(getBooks()));
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
export default booksReducer;
