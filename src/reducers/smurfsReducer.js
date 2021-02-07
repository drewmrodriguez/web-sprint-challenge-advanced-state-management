import * as actions from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCHING_SMURFS:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.SMURFS_LOADED:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: "",
      };
    case actions.ADD_SMURF:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};