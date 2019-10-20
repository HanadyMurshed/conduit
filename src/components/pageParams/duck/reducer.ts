import {
  PageState,
  UPDATE_PAGE_PARAMS,
  UPDATE_PAGE_PARAMS_TAG,
  UPDATE_PAGE_PARAMS_TAP,
  ActionType
} from "./types";

const initialState: PageState = {
  currentPage: 0,
  currentTab: 0,
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
      return {
        ...state,
        ...action.payload,
        currentTab: state.tabs.length + 1
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
