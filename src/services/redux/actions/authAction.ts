import { IAuthData } from "../../../types";
import { ActionType, SignUpActionType } from "../actionType";

interface loginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: IAuthData;
}

interface loginPendingAction {
  type: ActionType.LOGIN_PENDING;
}

interface loginErrorAction {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}
interface logoutAction {
  type: ActionType.LOGOUT;
}

// signup Action

interface signupRequestAction {
  type: SignUpActionType.SIGNUP_REQUEST;
}

interface signupSuccessAction {
  type: SignUpActionType.SIGNUP_SUCCESS;
  payload: IAuthData;
}

interface signupErrorAction {
  type: SignUpActionType.SIGNUP_ERROR;
  payload: any;
}

export type AuthAction =
  | loginSuccessAction
  | loginPendingAction
  | loginErrorAction
  | logoutAction
  | signupRequestAction
  | signupSuccessAction
  | signupErrorAction;
