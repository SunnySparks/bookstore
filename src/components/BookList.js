import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import BookRemover from './BookRemover';
import { fetchBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks(dispatch);
  }, []);

  const bookStore = useSelector((state) => state.book);
  return (
    <div>
      <div>
        <div>
          <ul>
            <div>
              {bookStore.map((book) => (
                <li key={book.id}>
                  <h4>
                    {book.title}
                    By:
                    {book.author}
                    <BookRemover bookID={book.id} />
                  </h4>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookList;
