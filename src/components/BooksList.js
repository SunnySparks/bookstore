import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import '../App.css';

const BooksList = (props) => {
  const dispatch = useDispatch();
  const {
    title, category, Author,
  } = props;
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="container row-wrapper border mt-3 p-3">
      <div className="row">
        <div className="col">
          <h2 className="category">{category}</h2>
          <h3 className="title">{title}</h3>
          <span className="author">{Author}</span>
          <ul className="d-flex p-0 mt-3">
            <li className="author  p-2">Comments</li>
            <li className="author   border-start p-2">
              <button type="button" onClick={() => removeBookFromStore(props.id)}>Remove</button>
            </li>
            <li className="author  border-start p-2">Edit</li>
          </ul>
        </div>
        <div className="col d-flex border-end my-5">
          <div className="rounded-circle Oval-2" />
          <div className="d-flex flex-column">
            <span className="PercentComplete"> 64%</span>
            <span className="Completed">Completed</span>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-start flex-column m-5">
          <span className="CurrentChapter">Current Chapter</span>
          <span className="CurrentLesson">Chapter 17</span>
          <button className="Rectangle-2 btn btn-primary" type="button">Update progress</button>
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
