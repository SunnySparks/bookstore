import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState();
  const [bookCategory, setBookCategory] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemID = uuidv4();
    dispatch(addBooks({
      title: bookTitle,
      item_id: itemID,
      category: bookCategory,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e); }}>
        <input type="text" name="bookTitle" value={bookTitle} placeholder="Add your title" onChange={(e) => setBookTitle(e.target.value)} />
        <br />
        <input type="text" name="bookCategory" value={bookCategory} placeholder="Category" onChange={(e) => setBookCategory(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default BookForm;
