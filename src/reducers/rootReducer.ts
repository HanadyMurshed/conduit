import { combineReducers } from "redux";
import { systemReducer } from "../components/auth/duck/reducer";
import { loginReducer } from "../pages/login/duck/reducer";
import { registerReducer } from "../pages/signup/duck/reducer";
import { tagReducer } from "../container/TagPanel/duck/reducer";
import articleReducer from "../container/ArticleList/duck/reducer";

const rootReducer = combineReducers({
  system: systemReducer,
  loginState: loginReducer,
  registerState: registerReducer,
  tags: tagReducer,
  articlesState: articleReducer
});

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
