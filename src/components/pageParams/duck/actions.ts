import {
  PageState,
  UPDATE_PAGE_PARAMS,
  UPDATE_PAGE_PARAMS_TAG,
  UpdatePageParamsAction,
  UpdatePageParamsTagAction
} from "./types";

export function updatePageParams(newParams: PageState): UpdatePageParamsAction {
  return {
    type: UPDATE_PAGE_PARAMS,
    payload: newParams
  };
}
export function updatePageParamsCurrentTag(
  newParams: Pick<PageState, "currentTag">
): UpdatePageParamsTagAction {
  return {
    type: UPDATE_PAGE_PARAMS_TAG,
    payload: newParams
  };
}
