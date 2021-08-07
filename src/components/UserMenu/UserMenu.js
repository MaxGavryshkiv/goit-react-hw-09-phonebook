import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { authSelectors, authOperations } from '../../store/auth';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUseremail);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className="UserMenu">
      <span>{email}</span>
      <Button type="button" onClick={onLogout}>
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
