import '../App.css';
import React from 'react';

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
        <ul>
          <li>
            Book 1 by Author
            <button type="button">Remove</button>
          </li>
          <li>
            Book 2 by Author
            <button type="button">Remove</button>
          </li>
          <li>
            Book 3 by Author
            <button type="button">Remove</button>
          </li>
          <li>
            Book 4 by Author
            <button type="button">Remove</button>
          </li>
          <li>
            Book 5 by Author
            <button type="button">Remove</button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <form action="/action_page.php">
        <input type="text" name="title" value="Add your title" />
        <br />
        <input type="text" name="Author" value="Author's name" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
);

export default Book;
