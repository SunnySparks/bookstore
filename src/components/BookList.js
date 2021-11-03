import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = [
    {
      id: Date.now(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: Date.now(),
      title: 'Harry Potter and the Philosopher\'s stone',
      author: 'JK Rowling',
    },
    {
      id: Date.now(),
      title: 'Ana Karenina',
      author: 'León Tolstói',
    },
  ];

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div>
        <div>
          <ul>
            <div>
              {bookList.map((book) => (
                <li key={book.id}>
                  <h4>
                    {book.title}
                    By:
                    {book.author}
                    <button type="button" onClick={handleRemove(book.id)}>Remove</button>
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
