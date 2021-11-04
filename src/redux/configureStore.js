import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yozOG7uq64vvExbwooD9`;
const reducer = combineReducers({
  book: booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
