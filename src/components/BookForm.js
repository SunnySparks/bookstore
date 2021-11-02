import '../App.css';
import React from 'react';

const BookForm = () => (
  <div>
    <form action="/action_page.php">
      <input type="text" name="title" value="Add your title" />
      <br />
      <input type="text" name="Author" value="Author's name" />
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default BookForm;
