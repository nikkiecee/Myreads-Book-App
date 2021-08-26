import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import SearchButton from "./components/SearchButton";
import SearchPage from "./components/SearchPage";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    value: "",
    books: [],
    query: "",
    filteredBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
      });
    });
  };

  handleSearch = (searchtext) => {
    this.setState({ filteredBooks: [] });

    if (searchtext.length > 0) {
      BooksAPI.search(searchtext)
        .then((books) => {
          if (books.error) {
            this.setState({ filteredBooks: [] });
          } else {
            this.setState({ filteredBooks: books });
          }
        })
        .catch((err) => this.setState({ filteredBooks: [] }));
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              filteredBooks={this.state.filteredBooks}
              moveBooks={this.moveBooks}
              handleSearch={this.handleSearch}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <Shelves
                books={this.state.books}
                value={this.state.value}
                moveBooks={this.moveBooks}
              />
              <SearchButton />
            </div>
          )}
        />
      </div>
    );
  }
}
export default BooksApp;
