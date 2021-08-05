import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { authSelectors } from '../../store/auth';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated && (
      <ButtonToolbar className="custom-btn-toolbar-contact">
        <LinkContainer exact to="/contacts">
          <Button>Contacts</Button>
        </LinkContainer>
      </ButtonToolbar>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
