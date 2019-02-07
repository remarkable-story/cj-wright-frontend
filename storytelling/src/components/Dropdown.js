import React, { Component } from "react";
import './login.css';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      < React.Fragment>
        <Form>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>Country</DropdownToggle>
              <DropdownMenu right>
                <DropdownItem divider />
                <DropdownItem>Bolivia</DropdownItem>
                <DropdownItem>Brazil</DropdownItem>
                <DropdownItem>Cambodia</DropdownItem>
                <DropdownItem>Colombia</DropdownItem>
                <DropdownItem>Ecuador</DropdownItem>
                <DropdownItem>El Salvador</DropdownItem>
                <DropdownItem>Ghana</DropdownItem>
                <DropdownItem>Guatemala</DropdownItem>
                <DropdownItem>Honduras</DropdownItem>
                <DropdownItem>Kiribati</DropdownItem>
                <DropdownItem>Madagascar</DropdownItem>
                <DropdownItem>Mongolia</DropdownItem>
                <DropdownItem>Nicaragua</DropdownItem>
                <DropdownItem>Paraguay</DropdownItem>
                <DropdownItem>Peru</DropdownItem>
                <DropdownItem>Philippines</DropdownItem>
                <DropdownItem>Zimbabwe</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Form>

      </ React.Fragment>
    );
  }
}
