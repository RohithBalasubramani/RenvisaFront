const INIT_STATE = {
  isAuthenticated: localStorage.getItem("isAuth"),
  accessToken: localStorage.getItem("access_token"),
  refreshToken: localStorage.getItem("refresh_token"),
  firstname: localStorage.getItem("first_name"),
};

export const authreducer = (state = INIT_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case "LOG_SUCCESS":
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("access_token", action.payload.accessToken);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("first_name", action.payload.first_name);

      return {
        state,
      };

    case "LOG_FAIL":
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("first_name");
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
      localStorage.removeItem("first_name");
      localStorage.setItem("isAuth", false);

      return {
        state,
      };
    default:
      return state;
  }
};
