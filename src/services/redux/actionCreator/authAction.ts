import { Dispatch } from "react";
import { IAuthData } from "../../../types";
import authService, { userType } from "../../api/authService";
import { AuthAction } from "../actions/authAction";
import { ActionType } from "../actionType";
import { SignUpActionType } from "./../actionType";

export const login = (payload: userType) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionType.LOGIN_PENDING,
    });
    authService
      .login(payload)
      .then((data) => {
        dispatch({
          type: ActionType.LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionType.LOGIN_ERROR,
          payload: err?.response?.data?.message,
        });
      });
  };
};

export const logout = (): AuthAction => {
  return {
    type: ActionType.LOGOUT,
  };
};

export const signUp = (payload: IAuthData) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: SignUpActionType.SIGNUP_REQUEST,
    });
    authService
      .signup(payload)
      .then((data) => {
        dispatch({
          type: SignUpActionType.SIGNUP_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SignUpActionType.SIGNUP_ERROR,
          payload: err?.response?.data?.message,
        });
      });
  };
};
