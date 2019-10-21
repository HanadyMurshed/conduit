export const UPDATE_PAGE_PARAMS = "UPDATE_PAGE_PARAMS";
export const UPDATE_PAGE_PARAMS_TAG = "UPDATE_PAGE_PARAMS_TAG";
export const UPDATE_PAGE_PARAMS_TAP = "UPDATE_PAGE_PARAMS_TAP";

export const GLOBAL_FEED = "Global Feed";
export const YOURE_FEED = "Your Articles";
export const USER_ARTICLES = "My Articles";
export const USER_FAVORITE = "Favorited Articles";

export type PageState = {
  currentPage: number;
  tabs: string[];
  currentTap: number;
  currentTag: string;
  articlesNumber: number;
};

export interface UpdatePageParamsAction {
  type: typeof UPDATE_PAGE_PARAMS;
  payload: Partial<PageState>;
}

export interface UpdatePageParamsTagAction {
  type: typeof UPDATE_PAGE_PARAMS_TAG;
  payload: Pick<PageState, "currentTag">;
}

export interface UpdatePageParamsTapAction {
  type: typeof UPDATE_PAGE_PARAMS_TAP;
  payload: Pick<PageState, "currentTap">;
}

export type ActionType =
  | UpdatePageParamsTagAction
  | UpdatePageParamsAction
  | UpdatePageParamsTapAction;
