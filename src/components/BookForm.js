import '../App.css';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(addBook({ title: bookTitle, author: bookAuthor, id }));
  };

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input type="text" name="bookTitle" value={bookTitle} placeholder="Add your title" onChange={(e) => setBookTitle(e.target.value)} />
        <br />
        <input type="text" name="bookAuthor" value={bookAuthor} placeholder="Author's name" onChange={(e) => setBookAuthor(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
