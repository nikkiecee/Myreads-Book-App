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
    query: "",
    filteredBooks:[],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  moveBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {});
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  };

handleSearch = (searchtext) => {
    BooksAPI.search(searchtext).then((books) =>{
      /*
      	- using the books currently in state:
        
      */
      
      this.setState(() => ({
        filteredBooks: books,
      }))
    }
    ).catch(err => console.log(err))
  }
  

  
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage
              books={this.state.books}
              filteredBooks={this.state.filteredBooks}
             // value={this.state.query}
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
