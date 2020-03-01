import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// actual local storage object on our window browser
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "directory"] // the reducer that we want to persist our data
};

const rootReducer = combineReducers({
  user: userReducer, // handled by Firebase
  cart: cartReducer, // add it to the 'whitelist'
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
