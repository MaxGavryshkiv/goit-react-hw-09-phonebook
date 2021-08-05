const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUseremail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
  getUseremail,
};
