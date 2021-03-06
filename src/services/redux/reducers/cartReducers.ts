import { IFoodItem } from "../../../types";
import { CartAction } from "../actions/cartAction";
import { ActionType } from "../actionType";

const cartReducer = (
  state: IFoodItem[] = [],
  action: CartAction
): IFoodItem[] => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [...state, action.payload];
    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    }
    case ActionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
