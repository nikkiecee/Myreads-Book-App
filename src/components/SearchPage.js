import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  
  generateBooks =(books) => {
    if (!books){
      return <li>No books found</li>;
    }
    console.log(books)
    return books && books.map((book) => <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: book.imageLinks ? `url(${book.imageLinks.smallThumbnail})` : ''
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={book.shelf ? book.shelf:"none"} 
                            onChange={(event) =>   this.props.moveBooks(book, event.target.value)}
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
                  </li>)
      } 
   
  render() {
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">
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
			{this.generateBooks(this.props.books)}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
