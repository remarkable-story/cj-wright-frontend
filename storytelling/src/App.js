import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Allstories from "./components/Allstories";
import axios from "axios";
import CreateStory from "./components/CreateStory";
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
      .post(`https://remarkable-story-backend.herokuapp.com/api/stories`, {
        newStory
      })
      .then(response => {
        newStory.id = response.data.success;

        this.setState({ stories: [newStory, ...this.state.stories] });

        console.log("create story", this.state.stories.concat(newStory));
        console.log(response);
      });
  };
  editStory = (id, editedStory) => {
    axios
      .put(
        `https://remarkable-story-backend.herokuapp.com/api/stories${id}`,
        editedStory
      )
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
      .delete(
        `https://fe-stories.herokuapp.com/story/deletehttps://remarkable-story-backend.herokuapp.com/api/stories/${id}`
      )
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
      <div>
        <Header />
        <Sidebar />
        <MainContent style={{  backgroundImage: "url(" + "https://lh3.googleusercontent.com/pxPWx06weuwYKbTWua9vLFhExbD4wWeaB8a9PCjBBK3sD3QAOptErowYaEBcELAXqe7QY8j0eyGhDlS2mln3ITeSYCFUKd2O82tAweYs-phxbhfinOXK2ozoEuFB9smvMgH2zTJmGq5cNko5WmK6p7qmvAPF2CSFyiMBFVAis169TooTIxUoVO3MjFh52Z-VF0WidMYe3aw7Aj_mrf_Tb0qTygG1LD4S2w4oKJm8ob2MqzxoEGzK8GOYQogDxw2VFITwVWo9WdQYxLzFfRZy1wPr8J-Wdi6rlSWi8nb8WHvWUnu-BJJt1jg9Ykc0S6U37KrrJs0I1mDOvdI8QWGT144LY9tk5d4NiqcZpqluMcdzsHBC0qG2Nzh-05fqvB7_e6vrm8cRx3BHrHqSaNpQU6zdnQEfsMG0VeEZtajSRq9Ed2sY4txtXVeLsDJeUUgXW06VR7uTTIangP4lX7FfEsDsFidcjxubowJYt5JF6G5U0K5XrSa54a_n4b8Y3owi-VsjRxnivgHHn-gZrgqnDBByNLsEtr8gs2PV_1WQvsg_LbWANos5uKKS_dGucEXR9L9m-BYtzq8sXEh_Ek4QWB4fPN2bUj1bje577ESqwQ4j1Yuq_wkKGOSiaZ82YgwKo9SM2bIu_kfh0Fis_Pr_XGb_Id84EVNW=w1600-h1200-no" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'inherit',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:'fixed',
       brightness:"119%",

        }}>
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
            render={props => (
              <EditStory deleteStory={this.editStory} {...props} />
            )}
          />
        </MainContent>
      </div>
    );
  }
}

export default App;
