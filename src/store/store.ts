import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);
