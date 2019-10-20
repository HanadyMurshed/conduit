export const UPDATE_PAGE_PARAMS = "UPDATE_PAGE_PARAMS";

export type PageState = {
  currentPage: number;
  currentTab?: number;
  currentTag?: string;
  articlesNumber: number;
};

export interface UpdatePageParamsAction {
  type: typeof UPDATE_PAGE_PARAMS;
  payload: PageState;
}
