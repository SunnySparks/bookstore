import '../App.css';
import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Book = () => (
  <div>
    <div>
      <div>
        <h1>
          Your book list
        </h1>
      </div>
    </div>
    <div>
      <div>
        <BookList />
      </div>
    </div>
    <div>
      <BookForm />
    </div>
  </div>
);

export default Book;
