import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from './Search';



//  handleChange(event) {
//     let StorysToSearch = [];
//     let newSearch = [];

//     if (event.target.value !== "") {
//       StorysToSearch = this.props.stories;

//       newSearch = StorysToSearch.filter(item => {
//         const lc = item.toLowerCase();
//         const filter = event.target.value.toLowerCase();
//         return lc.includes(filter);
//       });
//     } else {
//       newSearch = this.props.stories;
//     }
//     this.setState({
//       filtered: newSearch
//     });
//   }
class Navbar extends Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#FBA423",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 500,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          width: "100vw",
          boxShadow: "1px 3px 6px 2px rgba(0,0,0,0.75)"

        }}
      >
      <Search />
        <header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "white",
            fontSize: "1.5rem",
            marginRight: "20px"
          }}
        >
          <Link to="/" style={{ color: "white" }}>
            Storytelling
          </Link>
        </header>
        <footer style={{
          backgroundColor: "#00D9FF",
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 500,
          paddingBottom: "6rem",
          width: "100vw",

        }}></footer>

      </nav>
    );
  }
}

export default Navbar;
