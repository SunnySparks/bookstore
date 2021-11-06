import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import '../App.css';

const percentage = 64;

const BooksList = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, Author,
  } = props;
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="container row-wrapper border mt-3 p-3 bg-white">
      <div className="row">
        <div className="col pt-3">
          <h2 className="category monB catego">{category}</h2>
          <h3 className="title roBold ">{title}</h3>
          <span className="roLite bookTitle">{Author}</span>
          <ul className="d-flex p-0 mt-3">
            <li className="p-2 roLite bookTitle">Comments</li>
            <li className="border-start p-2">
              <button className="roLite bookTitle noButton" type="button" onClick={() => removeBookFromStore(props.id)}>Remove</button>
            </li>
            <li className="border-start p-2 roLite bookTitle">Edit</li>
          </ul>
        </div>
        <div className="col border-end my-4">
          <div className="d-flex flex-row">
            <CircularProgressbar value={percentage} className="progress-circle" />
            <span className="px-2">
              <div className="monR percent"> 64%</div>
              <div className="monR completed">Completed</div>
            </span>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-start flex-column m-4 roLight">
          <span className="completed">CURRENT CHAPTER</span>
          <span className="chapter pb-3">Chapter 17</span>
          <button className="progressButton btn btn-primary" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};
export default BooksList;

BooksList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
