import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { authOperations } from '../store/auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameChange = e => setName(e.currentTarget.value);
  const emailChange = e => setEmail(e.currentTarget.value);
  const passwordChange = e => setPassword(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="mainRegister mainContainer">
      <h1>Register Page</h1>
      <Form onSubmit={handleSubmit} className="Form">
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
            onChange={nameChange}
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

        <Button md="2" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperations.register(data)),
// });

// export default connect(null, mapDispatchToProps)(RegisterView);

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

// handleSubmit = e => {
//   e.preventDefault();

//   this.props.onRegister(this.state);

//   this.setState({ name: '', email: '', password: '' });
// };

//   render() {
//     const { name, email, password } = this.state;

//     return (
// <div>
//   <h1 className="hedders">Register Page</h1>
//   <Form onSubmit={this.handleSubmit} className="Form">
//     <FloatingLabel
//       as={Col}
//       md="8"
//       controlId="floatingTextarea"
//       label="Name"
//       className="mb-3"
//     >
//       <Form.Control
//         type="text"
//         name="name"
//         value={name}
//         onChange={this.handleChange}
//         placeholder="Name"
//       />
//     </FloatingLabel>
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

//     <Button md="2" type="submit">
//       Register
//     </Button>
//   </Form>
// </div>
//     );
//   }
// }
