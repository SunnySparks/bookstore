import '../App.css';
import React from 'react';

const Book = () => {
  const bookList = [
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
  ];
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
          <ul>
            <div>
              {bookList.map((book) => (
                <li key={book.id}>
                  <h4>
                    {book.title}
                    By:
                    {book.author}
                    <button type="button">Remove</button>
                  </h4>
                </li>
              ))}
            </div>
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
};

export default Book;
