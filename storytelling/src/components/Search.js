
import React, { Component } from 'react';
class Search extends Component {


handleChange(event) {
    let storiesToSearch = [];
    let newSearch = [];


    if (event.target.value !== "") {
      storiesToSearch = this.props.stories;

      newSearch = storiesToSearch.filter(stories => {
        const lc = stories.toLowerCase();
        const filter = event.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newSearch = this.props.stories;
    }
    this.setState({
      filtered: newSearch
    });
  }

    render() {
        return (
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <input
              style={{
                width: "500px",
                marginBottom: "10px",
                fontSize: "1rem",
                padding: "10px"
              }}
              type="text"
              id=""
              name="search"
              placeholder="Search"
              onChange={event => (this.props.stories)}
            />
            <button
              style={{
                backgroundColor: "white",
                marginLeft: "15px",
                cursor: "pointer"
              }}
            >
              search
            </button>
          </div>
        );
    }
}

export default Search;

