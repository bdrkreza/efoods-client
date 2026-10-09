/* eslint-disable no-unused-vars */

export enum ActionType {
  ADD_TO_CART = "add_to_cart",
  REMOVE_FROM_CART = "remove_from_cart",
  CLEAR_CART = "clear_cart",
  LOGIN_PENDING = "login/pending",
  LOGIN_SUCCESS = "login/success",
  LOGIN_ERROR = "login/error",
  LOGOUT = "logout",
}

export enum SignUpActionType {
  SIGNUP_REQUEST = "SIGNUP/REQUEST",
  SIGNUP_SUCCESS = "SIGNUP/SUCCESS",
  SIGNUP_ERROR = "SIGNUP/ERROR",
}

export enum FoodCreateActionTypes {
  FOOD_CREATE_REQUEST = "FOOD_CREATE_REQUEST",
  FOOD_CREATE_SUCCESS = "FOOD_CREATE_SUCCESS",
  FOOD_CREATE_FAILURE = "FOOD_CREATE_FAILURE",
  FOOD_CREATE_RESET = "FOOD_CREATE_RESET",
}

export enum FoodGetActionTypes {
  FOOD_GET_REQUEST = "FOOD_GET_REQUEST",
  FOOD_GET_SUCCESS = "FOOD_GET_SUCCESS",
  FOOD_GET_FAILURE = "FOOD_GET_FAILURE",
}

export enum RemoveActionTypes {
  REMOVE_REQUEST = "FOOD_REMOVE_REQUEST",
  REMOVE_SUCCESS = "FOOD_REMOVE_SUCCESS",
  REMOVE_FAILURE = "FOOD_REMOVE_FAILURE",
}
