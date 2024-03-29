import React, { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { authOperations } from './store/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </>
  );
}

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
