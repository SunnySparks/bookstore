import axios from 'axios';

// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const apiID = 'yozOG7uq64vvExbwooD9';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiID}/books`;

const initialState = [];
/*
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
*/

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

/*
export const fetchBooks = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      const datosArr = [];
      // eslint-disable-next-line
      // console.log(response.data);
      Object.entries(response.data).forEach(([id, info]) => {
        const { title, category } = info[0];
        // console.log(id);
        // const datos = { item_id: id, title, category };
        // console.log(category);
        // console.log(title);
        const datos = [id, category, title];
        // const bookTitle = Object.entries(datos);
        // console.log(bookTitle);

        // console.log(merged);
        // eslint-disable-next-line
        // console.log(typeof info);
        // eslint-disable-next-line
        // console.log(datos);
        datosArr.push(datos);
        // eslint-disable-next-line
        console.log(datosArr);
      });
      dispatch(getBooks(datosArr));
    });
};
*/

export const addBooks = (payload) => async (dispatch) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(() => {
      // eslint-disable-next-line
      console.log('payload', payload);
      dispatch(fetchBooks(payload.data));
    });
};
/* export const getBooksRequest = () => (
  {
    type: 'GET_BOOKS_REQUEST',
  }
);
export const getBooksSuccess = (books) => (
  {
    type: 'GET_BOOKS_SUCCESS',
    payload: books,
  }
);
export const getBooksFailure = (error) => (
  {
    type: 'GET_BOOKS_FAILURE',
    payload: error,
  }
);

const fetchBooks = () => (
  (dispatch) => {
    dispatch(getBooksRequest());
    fetch(API_URL, {
      method: 'GET',
    }).then((response) => response.json())
      .then((data) => {
        const books = data;
        dispatch(getBooksSuccess(books));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getBooksFailure(errorMessage));
      });
  }
); */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
