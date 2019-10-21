import {
  PageState,
  UPDATE_PAGE_PARAMS,
  UPDATE_PAGE_PARAMS_TAG,
  UpdatePageParamsAction,
  UpdatePageParamsTagAction,
  UpdatePageParamsTapAction,
  UPDATE_PAGE_PARAMS_TAP
} from "./types";

export function updatePageParams(
  newParams: Partial<PageState>
): UpdatePageParamsAction {
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
export function updatePageParamsCurrentTaP(
  newParams: Pick<PageState, "currentTap">
): UpdatePageParamsTapAction {
  return {
    type: UPDATE_PAGE_PARAMS_TAP,
    payload: newParams
  };
}
