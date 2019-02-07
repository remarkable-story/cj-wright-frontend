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

export default class Login extends Component {
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
      <h1 className='title'>TELL YOUR STORY</h1>

          <Form className="form">
            <h2>Sign up</h2>
            <Col>
            <FormGroup>
            <Label>Name</Label>
            <Input
              type="name"
              name="Username"
              id="exampleName"
              placeholder="Eric Everyman"
            />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
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
            <Button>Submit</Button>
          </Form>
           <h2 className='subtext'>Create an account? Tell us your story! </h2>
           <h3 className='subtext'>Already have an account, Log </h3>
      </ React.Fragment>
    );
  }
}
