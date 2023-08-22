const INIT_STATE = {
  isAuthenticated: localStorage.getItem("isAuth"),
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
};

export const authreducer = (state = INIT_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case "LOG_SUCCESS":
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("access_token", action.payload.accessToken);
      localStorage.setItem("isAuth", true);

      return {
        state,
      };

    case "LOG_FAIL":
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.setItem("isAuth", false);
      return {
        state,
      };
    case "LOGOUT":
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("userInfo");
      localStorage.setItem("isAuth", false);

      return {
        state,
      };
    default:
      return state;
  }
};
