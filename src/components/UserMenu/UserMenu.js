import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { authSelectors, authOperations } from '../../store/auth';

const UserMenu = ({ email, onLogout }) => (
  <div className="UserMenu">
    <span>{email}</span>
    <Button className="ml5" type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUseremail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
