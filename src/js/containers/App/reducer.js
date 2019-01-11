import { fromJS } from "immutable";
import * as types from "./actionTypes";

export const initialState = fromJS({
  heroes: []
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SUPER_HEROES: {
      return state.set("heroes", action.payload);
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
