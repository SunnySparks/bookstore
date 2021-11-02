import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';