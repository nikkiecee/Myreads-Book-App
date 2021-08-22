import React from "react";
import * as BooksAPI from "./BooksAPI";
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import SearchButton from "./components/SearchButton";
import SearchPage from "./components/SearchPage";
import "./App.css";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    value: "",
    books: [],
  };
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,                      
      }));
    });
  }
  
moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => {
          if (b.id === book.id) {
            return (book.shelf = shelf);
          } else {
            return book;
          }
        }),
      }))
    );
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchPage} />
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
