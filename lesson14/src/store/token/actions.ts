import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import {ActionCreator, AnyAction} from "redux";

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export const saveToken = ():ThunkType => (dispatch) => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
}


