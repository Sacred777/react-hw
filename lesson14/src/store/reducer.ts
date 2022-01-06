import {Reducer} from "redux";
import {ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS} from "./me/actions";
import {MeActions, meReducer, MeState} from "./me/reducer";
import {SET_TOKEN, SetTokenAction} from "./token/actions";
import {tokenReducer} from "./token/reducer";
import {UPDATE_COMMENT, UpdateCommentAction} from "./comment/actions";
import {commentReducer} from "./comment/reducer";

export type RootState = {
  comment: string;
  token: string;
  me: MeState;
};

const initialState: RootState = {
  comment: 'оставьте ваш комментарий',
  token: '',
  me: {
    loading: false,
    error: '',
    data: {},
  },
}

export type RootAction = SetTokenAction
    | UpdateCommentAction
    | MeActions;
export const rootReducer: Reducer<RootState, RootAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: commentReducer(state.comment, action),
      }
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
