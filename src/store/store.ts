import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import AuthReducer from "../reducers/authReducer";
import rootSaga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  AuthReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);
