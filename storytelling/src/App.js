import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Allstories from "./components/Allstories";
import axios from "axios";
import CreateStory from "./components/CreateStory";
import Story from "./components/Story";
import ViewStory from "./components/ViewStory";
import EditStory from "./components/EditStory";
import Header from "./components/Navbar";

const MainContent = styled.div`
  padding: 4rem;
  border-radius: 3px;
  text-decoration: none;
`;

class App extends Component {
  state = {
    stories: [],
    search: ""
  };
  componentDidMount() {
    axios
      .get("https://remarkable-story-backend.herokuapp.com/api/stories")
      .then(response => this.setState({ stories: response.data }))
      .catch(error => console.log(error));
  }

  createStory = newStory => {
    axios
      .post(`https://remarkable-story-backend.herokuapp.com/api/stories`, { newStory })
      .then(response => {
        newStory.id = response.data.success;

        this.setState({ stories: [newStory, ...this.state.stories] });

        console.log("create story", this.state.stories.concat(newStory));
        console.log(response);
      });
  };
  editStory = (id, editedStory) => {
    axios
      .put(`https://remarkable-story-backend.herokuapp.com/api/stories${id}`, editedStory)
      .then(response => {
        console.log(response);
        editedStory.id = response.data;

        this.setState({
          stories: this.state.stories.map(story => {
            if (story.id === id) return response.data;
            return story;
          })
        });
      });
  };

  // if id === id return response.data return story
  deleteStory = id => {
    axios
      .delete(`https://fe-stories.herokuapp.com/story/deletehttps://remarkable-story-backend.herokuapp.com/api/stories/${id}`)
      .then(response => {
        const deleteStory = this.state.stories.filter(story => {
          console.log(story.id, id, story.id !== id);

          return story.id !== id;
        });
        console.log("deleted story", deleteStory);
        this.setState({ stories: deleteStory }, console.log(this.state));
      });
  };








  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient( #e0e2e4, #c8ccce, #b1b7b6, #9da29d, #8c8c86)"
        }}
      >
      <Header />
      <Sidebar />
      <MainContent>
          <Route
            exact
            path="/"
            render={() => <Allstories stories={this.state.stories} />}
          />
          <Route
            path="/createstory"
            render={props => (
              <CreateStory createStory={this.createStory} {...props} />
            )}
          />
          <Route
            path="/viewstory/:id"
            render={props => (
              <ViewStory {...props} viewStory={this.viewStory} />
            )}
          />
          <Route
            path="/editstory/:id"
            render={props => <EditStory editStory={this.editStory} {...props} />}
          />

        </MainContent>
      </div>
    );
  }
}

export default App;
