import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

/*
 * Middleware is the suggested way to extend Redux with custom functionality.
 * Middleware lets you wrap the store's dispatch method for fun and profit.
 */
const middleware = [logger];

/*
 * createStore(reducer, [preloadedState], [enhancer])
 * The applyMiddleware function returns a function which is a store enhancer that applies the given middleware.
 */
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
