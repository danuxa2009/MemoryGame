import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunk, loggerMiddleware);

const composeEnhancers = devtools || compose;

export const store = createStore(rootReducer, composeEnhancers(middleware));
