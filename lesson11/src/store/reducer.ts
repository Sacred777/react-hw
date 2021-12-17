import {ActionCreator, AnyAction, Reducer} from "redux";
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  meRequest,
  MeRequestAction, MeRequestErrorAction,
  MeRequestSuccessAction
} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";

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

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

type MyAction = SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
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
