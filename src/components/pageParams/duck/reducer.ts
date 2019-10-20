import { PageState, UpdatePageParamsAction, UPDATE_PAGE_PARAMS } from "./types";

const initialState: PageState = {
  currentPage: 0,
  currentTab: 0,
  currentTag: "",
  articlesNumber: 10
};

export function pageReducer(
  state = initialState,
  action: UpdatePageParamsAction
): PageState {
  switch (action.type) {
    case UPDATE_PAGE_PARAMS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
