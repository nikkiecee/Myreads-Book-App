import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchButton extends Component {
  render() {
    return (
      <div >
        <Link to='/search' className="open-search">Add a book</Link>
      </div>
    );
  }
}
export default SearchButton;
