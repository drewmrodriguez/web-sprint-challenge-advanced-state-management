import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_LOADED = "SMURFS_LOADED";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";
export const website = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(website)
    .then((response) => {
      console.log("response from api", response);
      dispatch({
        type: SMURFS_LOADED,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error response", error);
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .post(website, newSmurf)
    .then((response) => {
      console.log(response, "response from addSmurf");
      dispatch({
        type: ADD_SMURF,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error message", error);
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    });
};