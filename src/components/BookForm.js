import '../App.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const bookTitle = e.target.title.value;
    const bookAuthor = e.target.author.value;
    const id = Date.now();
    e.target.title.value = '';
    e.target.author.value = '';
    dispatch(addBook({ title: bookTitle, author: bookAuthor, id }));
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }}>
        <input type="text" name="title" placeholder="Add your title" />
        <br />
        <input type="text" name="author" placeholder="Author's name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
