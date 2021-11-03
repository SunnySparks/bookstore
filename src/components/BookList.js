import '../App.css';
import { useSelector } from 'react-redux';
import React from 'react';
import BookRemover from './BookRemover';

const BookList = () => {
  const bookStore = useSelector((store) => store.book);
  console.log('after', bookStore);
  console.log(bookStore.title);
  console.log(bookStore.auth);
  /* const bookList = [
    {
      id: 1,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 2,
      title: 'Harry Potter and the Philosopher\'s stone',
      author: 'JK Rowling',
    },
    {
      id: 3,
      title: 'Ana Karenina',
      author: 'León Tolstói',
    },
  ]; */

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
