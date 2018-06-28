import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as reduxFormReducer } from "redux-form";
import { createLogger } from "redux-logger";

const reducer = combineReducers({
  form: reduxFormReducer
});

export const configureStore = () => {
  const logger = createLogger();

  const middlewares = [logger];

  const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

  const store = createStore(reducer, {}, enhancer);

  return store;
};
