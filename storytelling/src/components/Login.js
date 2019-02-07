import React from "react";
import './login.css';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export default class Login extends React.Component {
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
      <h1 className='title'>STORYTELLING</h1>
          <Form className="form">
            <h2>Login</h2>
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

            <Button>Submit</Button>
          </Form>
           <h2 className='subtext'>No account? Want to tell your story, signup here!</h2>
      </ React.Fragment>
    );
  }
}
