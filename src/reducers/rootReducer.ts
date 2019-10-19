import { combineReducers } from "redux";
import { systemReducer } from "../components/auth/duck/reducer";
import { loginReducer } from "../pages/login/duck/reducer";

import { tagReducer } from "../container/TagPanel/duck/reducer";

import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  system: systemReducer,
  loginReducer,
  articleReducer,
  tags: tagReducer
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
