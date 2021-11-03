import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function BookRemover({ bookID }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(bookID));
  };

  return (
    <button type="button" onClick={handleRemove}>
      Remove
    </button>
  );
}

BookRemover.propTypes = {
  bookID: PropTypes.number.isRequired,
};
