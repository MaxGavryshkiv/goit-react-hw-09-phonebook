import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { authSelectors } from '../../store/auth';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className="naviation">
      {isLoggedIn && (
        <ButtonToolbar>
          <LinkContainer exact to="/contacts">
            <Button>Contacts</Button>
          </LinkContainer>
        </ButtonToolbar>
      )}
    </nav>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
