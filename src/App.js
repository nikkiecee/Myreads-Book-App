import React from 'react'
// import * as BooksAPI from './BooksAPI'
import Header from './components/Header'
import Shelves from './components/Shelves'
import SearchButton from './components/SearchButton'
import SearchPage from './components/SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <Header />
       		<Shelves />
            <SearchButton />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
