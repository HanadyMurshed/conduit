import {
  PageState,
  UPDATE_PAGE_PARAMS,
  UPDATE_PAGE_PARAMS_TAG,
  UPDATE_PAGE_PARAMS_TAP,
  ActionType
} from "./types";

const initialState: PageState = {
  currentPage: 0,
  currentTap: 0,
  tabs: [],
  currentTag: "",
  articlesNumber: 10
};

export function pageReducer(
  state = initialState,
  action: ActionType
): PageState {
  switch (action.type) {
    case UPDATE_PAGE_PARAMS:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_PAGE_PARAMS_TAG: {
      if (action.payload.currentTag === "")
        return {
          ...state,
          ...action.payload,
          currentPage: 0
        };
      else
        return {
          ...state,
          ...action.payload,
          currentTap: state.tabs.length,
          currentPage: 0,
          tabs: [...state.tabs, action.payload.currentTag]
        };
    }
    case UPDATE_PAGE_PARAMS_TAP: {
      return {
        ...state,
        ...action.payload,
        currentTag: "",
        currentPage: 0
      };
    }
    default:
      return state;
  }
}
