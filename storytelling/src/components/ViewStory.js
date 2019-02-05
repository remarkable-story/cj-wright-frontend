import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideButton = styled.button`
  width: 80%;
  padding: 1rem;
  margin: 0 10px;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #831332;
  background-color: rgb(55.8%, 54.1%, 53.8%);
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
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

class ViewStory extends Component {
  constructor(props) {
    super(props);
    //   const story  = this.props;
    this.state = {
      id: "",
      title: "",
      country: "",
      description: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://remarkable-story-backend.herokuapp.com/api/stories${
          this.props.match.params.id
        }`
      )
      .then(response => this.setState(response.data));
  }
  helper = () => {
    this.props.deleteStory(this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <SecondaryHeading style={{ marginTop: "100px" }}>
          {this.state.title}
        </SecondaryHeading>

        <StyledStory>
          <div>
            <SideButton style={{ backgroundColor: "#831332" }}>
              <Link
                to={`/editstory/${this.state.id}`}
                style={{ color: "white" }}
              >
                EDIT
              </Link>
            </SideButton>
          </div>
        </StyledStory>
      </div>
    );
  }
}

export default ViewStory;
