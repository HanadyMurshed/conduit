import {
  PageState,
  UPDATE_PAGE_PARAMS,
  UPDATE_PAGE_PARAMS_TAG,
  ActionType
} from "./types";

const initialState: PageState = {
  currentPage: 0,
  currentTab: 0,
  currentTag: "",
  articlesNumber: 10
};

export function pageReducer(
  state = initialState,
  action: ActionType
): PageState {
  switch (action.type) {
    case UPDATE_PAGE_PARAMS:
    case UPDATE_PAGE_PARAMS_TAG: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
