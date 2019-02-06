// this is where you can create a new story

import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import styled from "styled-components";

const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  margin-top: 10px;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #FBA423;
  background-color: #FBA423;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  margin-bottom: 100%;
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

class CreateStory extends Component {
  state = {
    title: "",
    country: "",
    description: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newStory = {
      title: this.state.title,
      country:this.state.country,
      description: this.state.description
    };
    console.log(newStory);
    this.props.createStory(newStory);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <SecondaryHeading style={{marginTop: '100px',color:"white"}}>Create New Story:</SecondaryHeading>

        <StyledStory>
          <form onSubmit={this.handleSubmit}>
            <input
              style={{ width: "500px", padding: "15px", marginBottom: "40px" }}
              value={this.state.title}
              placeholder='Title'
              type="text"
              name="title"
              id=""
              cols="80"
              rows="20"
              onChange={this.handleChange}
            />
            <textarea style={{fontSize: '1rem'}}
              value={this.state.description}
              placeholder='Write something'
              name="description"
              id=""
              cols="80"
              rows="20"
              onChange={this.handleChange}
            />
            <SideButton style={{ backgroundColor: "#FBA423", color:"white" }}>SAVE</SideButton>
          </form>
        </StyledStory>
      </div>
    );
  }
}
export default CreateStory;
