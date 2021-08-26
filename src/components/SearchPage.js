import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

class SearchPage extends Component {
  generateBooks = (books, filteredBooks) => {
    const results = [];
    console.log(filteredBooks);
    if (!books || !filteredBooks) {
      return <li>No books found</li>;
    } else {
      //console.log(books);

      filteredBooks &&
        filteredBooks.forEach((b) => {
          const bookExist = books.find((book) => book.title === b.title);
          if (bookExist) {
            results.push(
              <li key={v4()}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: bookExist.imageLinks
                          ? `url(${bookExist.imageLinks.smallThumbnail})`
                          : "",
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={bookExist.shelf ? bookExist.shelf : "none"}
                        onChange={(event) =>
                          this.props.moveBooks(bookExist, event.target.value)
                        }
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
                  <div className="book-title">{bookExist.title}</div>
                  <div className="book-authors">{bookExist.authors}</div>
                </div>
              </li>
            );
          } else {
            results.push(
              <li key={v4()}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: b.imageLinks
                          ? `url(${b.imageLinks.smallThumbnail})`
                          : "",
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                        value={b.shelf ? b.shelf : "none"}
                        onChange={(event) =>
                          this.props.moveBooks(b, event.target.value)
                        }
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
                  <div className="book-title">{b.title}</div>
                  <div className="book-authors">{b.authors}</div>
                </div>
              </li>
            );
          }
        });
    }
    return results;
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              //value={this.state.query}
              onChange={(event) => this.props.handleSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.generateBooks(this.props.books, this.props.filteredBooks)}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;

