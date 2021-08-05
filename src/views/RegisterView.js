import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { authOperations } from '../store/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className="hedders">Register Page</h1>
        <Form onSubmit={this.handleSubmit} className="Form">
          <FloatingLabel
            as={Col}
            md="8"
            controlId="floatingTextarea"
            label="Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </FloatingLabel>
          <FloatingLabel
            as={Col}
            md="8"
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            as={Col}
            md="8"
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </FloatingLabel>

          <Button md="2" type="submit">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
