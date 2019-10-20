export const UPDATE_PAGE_PARAMS = "UPDATE_PAGE_PARAMS";
export const UPDATE_PAGE_PARAMS_TAG = "UPDATE_PAGE_PARAMS_TAG";

export type PageState = {
  currentPage: number;
  currentTab?: number;
  currentTag: string;
  articlesNumber: number;
};

export interface UpdatePageParamsAction {
  type: typeof UPDATE_PAGE_PARAMS;
  payload: PageState;
}

export interface UpdatePageParamsTagAction {
  type: typeof UPDATE_PAGE_PARAMS_TAG;
  payload: Pick<PageState, "currentTag">;
}

export type ActionType = UpdatePageParamsTagAction | UpdatePageParamsAction;
