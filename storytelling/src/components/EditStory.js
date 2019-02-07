// this is where you can create a new story

import React, { Component } from "react";
import styled from "styled-components";

const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fafafa;
  background-color: white;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const StyledStory = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 320px;
  width: 300px;
  padding-bottom: 20px;
`;

const SecondaryHeading = styled.h2`
  margin-bottom: 2rem;
  margin-left: 320px;
  z-index: 10;
  text-decoration: none;
  color: black;
`;
class EditStory extends Component {
  state = {
    title: "",
    description: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newStory = {
      title: this.state.story.title,
      description: this.state.story.description
    };
    console.log(newStory);
    this.props.editStory(this.props.match.params.id, newStory);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <SecondaryHeading style={{marginTop: '100px'}}>Edit Story:</SecondaryHeading>

        <StyledStory>
          <form onSubmit={this.handleSubmit}>
            <input
              style={{ width: "500px", padding: "15px", marginBottom: "40px" }}
              value={this.state.title}
              placeholder='Title'
              type="text"
              name="title"
              id=""
              cols="100"
              rows="5"
              onChange={this.handleChange}
            />
            <textarea
              value={this.state.description}
              placeholder='Write Something'
              name="description"
              id=""
              cols="80"
              rows="20"
              onChange={this.handleChange}
            />
            <SideButton style={{ backgroundColor: "#00A3FF" }}>
              UPDATE
            </SideButton>
          </form>
        </StyledStory>
      </div>
    );
  }
}
export default EditStory;
