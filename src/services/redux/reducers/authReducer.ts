import { IAuthData } from "../../../types";
import { AuthAction } from "../actions/authAction";
import { ActionType } from "../actionType";
import { SignUpActionType } from "./../actionType";

interface IAuthState {
  data: IAuthData | null;
  status: "idle" | "pending" | "success" | "error";
  loading?: boolean;
  error: null | string;
}

const initialState: IAuthState = {
  data: null,
  status: "idle",
  loading: false,
  error: null,
};

const authReducer = (
  state: IAuthState = initialState,
  action: AuthAction
): IAuthState => {
  switch (action.type) {
    case SignUpActionType.SIGNUP_REQUEST:
      return {
        data: null,
        status: "pending",
        loading: false,
        error: null,
      };
    case SignUpActionType.SIGNUP_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        status: "success",
        error: null,
      };
    case SignUpActionType.SIGNUP_ERROR:
      return {
        data: null,
        status: "error",
        loading: true,
        error: action.payload,
      };

    case ActionType.LOGIN_PENDING:
      return {
        data: null,
        status: "pending",
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        data: action.payload,
        status: "success",
        error: null,
      };
    case ActionType.LOGIN_ERROR:
      return {
        data: null,
        status: "error",
        error: action.payload,
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
