import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThank from "redux-thunk";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducers";
import {
  FoodDeleteReducer,
  foodListReducer,
  foodReducer,
} from "./reducers/foodReducer";
import { changeState } from "./reducers/sidebarShow";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  nav: changeState,
  foodCreate: foodReducer,
  food: foodListReducer,
  delete: FoodDeleteReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(reduxThank);

const store = createStore(persistedReducer, composeWithDevTools(middleware));
export const persister = persistStore(store);
export type AppState = ReturnType<typeof rootReducer>;

export default store;
