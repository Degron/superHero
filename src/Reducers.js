//Top Level Redux Reducer. All Reducers Should be added here.
import { combineReducers } from "redux";
import appReducer from "./js/containers/App/reducer";

//ADD ALL REDUCERS TO THE 'allReducers' OBJECT HERE
const allReducers = {
  app: appReducer
};

//REDUCERS ARE THEN COMBINED TO BE USED WITH REDUX
const combinedReducers = combineReducers(allReducers);

export default combinedReducers;
