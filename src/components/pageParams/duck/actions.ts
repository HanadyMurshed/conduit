import { PageState, UPDATE_PAGE_PARAMS, UpdatePageParamsAction } from "./types";

export function updatePageParams(newParams: PageState): UpdatePageParamsAction {
  return {
    type: UPDATE_PAGE_PARAMS,
    payload: newParams
  };
}
