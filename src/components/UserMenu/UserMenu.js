import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { authSelectors, authOperations } from '../../store/auth';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUseremail);
  const dispatch = useDispatch();

  // const onLogout = dispatch(authOperations.logOut);

  return (
    <div className="UserMenu">
      <span>{email}</span>
      <Button
        className="ml5"
        type="button"
        onClick={dispatch(authOperations.logOut)}
      >
        Logout
      </Button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   email: authSelectors.getUseremail(state),
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
