import axios from "axios";

export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove iteams
export const DLT = (item) => {
  return {
    type: "RMV_CART",
    payload: item,
  };
};

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
    type: "RMV_ONE",
    payload: iteam,
  };
};

// Add Fav
export const FAV = (id) => {
  return {
    type: "ADD_FAV",
    payload: id,
  };
};

// remove Fav

export const REMOVEFAV = (iteam) => {
  return {
    type: "RMV_FAV",
    payload: iteam,
  };
};

export const loginSuccess = (accessToken) => {
  return {
    type: "LOG_SUCCESS",
    payload: accessToken,
  };
};

// remove iteams
export const loginFailure = (accessToken) => {
  return {
    type: "LOG_FAIL",
    payload: accessToken,
  };
};

// remove individual iteam

export const logout = (accessToken) => {
  return {
    type: "LOGOUT",
    payload: accessToken,
  };
};

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Action Creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

// Async Action
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("https://renvisa.org/product/")
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
