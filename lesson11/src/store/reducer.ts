import {ActionCreator, AnyAction, Reducer} from "redux";
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  meRequest,
  MeRequestAction, MeRequestErrorAction,
  MeRequestSuccessAction
} from "./me/actions";
import {MeActions, meReducer, MeState} from "./me/reducer";
import {SET_TOKEN, SetTokenAction} from "./token/actions";
import {tokenReducer} from "./token/reducer";

export type RootState = {
  token: string;
  me: MeState;
};

const initialState: RootState = {
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

type MyAction = SetTokenAction
    | MeActions;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return state;
  }
}
