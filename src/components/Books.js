import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import BooksList from './BooksList';
import { getBooks } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const BookItem = [];
  const booklist = useSelector((data) => data.booksReducer.books);
  Object.entries(booklist).forEach((element) => {
    const [key, value] = element;
    BookItem.push(value.map((item) => (
      <BooksList
        key={key}
        title={item.title}
        Author={item.title}
        category={item.category}
        id={key}
      />
    )));
  });
  return (
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
          {BookItem}
        </div>
      </div>
      <div>
        <BookForm />
      </div>
    </div>
  );
};

export default Book;
