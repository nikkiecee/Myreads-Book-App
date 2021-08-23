import React, { Component } from "react";

class Shelves extends Component {
  
    returnBooks = (items, shelf) => {
        if (!items){
      return <p>No books found</p>;
        }
else{
      const books = items.filter((i) => i.shelf === shelf);
      return (
        books &&
        books.map((book) => (
          <div key={book.id} className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`,
                      }}
                    />
                    
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf}
                        onChange={(event) => {
                          this.props.moveBooks(book, event.target.value);
                        }}
                      >
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            </ol>
          </div>
        ))
      );
}
    };

  render() {
   
    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>{this.returnBooks(this.props.books, "currentlyReading")}</li>
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want To Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>{this.returnBooks(this.props.books, "wantToRead")}</li>
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>{this.returnBooks(this.props.books, "read")}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Shelves;
