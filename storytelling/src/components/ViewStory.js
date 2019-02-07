import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideButton = styled.button`
  width: 60%;
  padding: 1rem;
  margin: 10px 10px;
  margin-left: 190%;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: #fba423;
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
        `https://remarkable-story-backend.herokuapp.com/api/stories/${
          this.props.match.params.id
        }`
      )
      .then(response => this.setState({ story: response.data[0] }));
  }
  helper = () => {
    this.props.deleteStory(this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    return this.state.story ? (
      <div>
        <SecondaryHeading style={{ marginTop: "100px", color:"white"}}>
          {this.state.story.title}
          <span style={{marginLeft:"40%", textDecoration:"underline"}}>Country: {this.state.story.country}</span>

          </SecondaryHeading>

        <StyledStory>
          <div>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                width: "20rem",
                border: "1.5px solid grey",
                borderRadius: "6px",
                fontSize: "16px",
                padding: "4rem",
                margin: "4rem",
                lineHeight:"1.6",

                backgroundColor: "rgba(255,255,255, 0.75)"

              }}
            >
              {this.state.story.description}
            </div>
            <div>
              <SideButton style={{ backgroundColor: "#FBA423" }}>
                <Link
                  to={`/editstory/${this.state.id}`}
                  style={{ color: "white" }}
                >
                  EDIT
                </Link>
              </SideButton>
              <SideButton
                style={{ backgroundColor: "#FBA423", color: "white" }}
                onClick={this.helper}
              >
                DELETE
              </SideButton>
            </div>
          </div>
        </StyledStory>
      </div>
    ) : (
      <h1>Story not found</h1>
    );
  }
}

export default ViewStory;
