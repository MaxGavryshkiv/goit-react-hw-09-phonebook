import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { authOperations } from '../store/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChange = e => setEmail(e.currentTarget.value);
  const passwordChange = e => setPassword(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className="hedders">Login Page</h1>

      <Form onSubmit={handleSubmit} className="Form">
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
            onChange={emailChange}
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
            onChange={passwordChange}
            placeholder="Password"
          />
        </FloatingLabel>

        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onLogin: data => dispatch(authOperations.logIn(data)),
// });

// export default connect(null, mapDispatchToProps)(LoginView);

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

// handleSubmit = e => {
//   e.preventDefault();

//   this.props.onLogin(this.state);

//   this.setState({ email: '', password: '' });
// };

//   render() {
//     const { email, password } = this.state;
//     return (
// <div>
//   <h1 className="hedders">Login Page</h1>

//   <Form onSubmit={this.handleSubmit} className="Form">
//     <FloatingLabel
//       as={Col}
//       md="8"
//       controlId="floatingInput"
//       label="Email address"
//       className="mb-3"
//     >
//       <Form.Control
//         type="email"
//         name="email"
//         value={email}
//         onChange={this.handleChange}
//         placeholder="name@example.com"
//       />
//     </FloatingLabel>
//     <FloatingLabel
//       as={Col}
//       md="8"
//       controlId="floatingPassword"
//       label="Password"
//       className="mb-3"
//     >
//       <Form.Control
//         type="password"
//         name="password"
//         value={password}
//         onChange={this.handleChange}
//         placeholder="Password"
//       />
//     </FloatingLabel>

//     <Button type="submit">Login</Button>
//   </Form>
// </div>
//     );
//   }
// }
