import React from "react";
// import * as BooksAPI from './BooksAPI'
import Header from "./components/Header";
import Shelves from "./components/Shelves";
import SearchButton from "./components/SearchButton";
import SearchPage from "./components/SearchPage";
import "./App.css";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => <SearchPage />} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <Shelves />
              <SearchButton />
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
