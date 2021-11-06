import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import BookRemover from './BookRemover';
import { fetchBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const bookStore = useSelector((state) => state.book);
  // eslint-disable-next-line
  return (
    <div>
      <div>
        <div>
          <ul>
            <div>
              { bookStore.map((book) => {
                // eslint-disable-next-line
                console.log(book);
                return (
                  <li key={book}>
                    <h4>
                      {book[0][1]}
                      By:
                      <BookRemover bookID={book.id} />
                    </h4>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookList;
