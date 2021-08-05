import React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AuthNav = () => (
  <div>
    <ButtonToolbar className="custom-btn-toolbar">
      <LinkContainer to="/register">
        <Button>Register</Button>
      </LinkContainer>
      <LinkContainer to="/login">
        <Button>Log in</Button>
      </LinkContainer>
    </ButtonToolbar>
    {/* <NavLink to="/register" exact>
      Register
    </NavLink>
    <NavLink to="/login" exact>
      Log in
    </NavLink> */}
  </div>
);

export default AuthNav;
