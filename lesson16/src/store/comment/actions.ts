import {ActionCreator} from "redux";

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  comment: string;
}
export const updateComment: ActionCreator<UpdateCommentAction> = (comment: string) => ({
  type: UPDATE_COMMENT,
  comment,
});
