import '../App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import BookRemover from './BookRemover';

const BookList = () => {
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
