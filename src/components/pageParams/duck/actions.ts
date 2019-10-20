import { PageState, UPDATE_PAGE_PARAMS, UpdatePageParamsAction } from "./types";

export function updateSession(newSession: PageState): UpdatePageParamsAction {
  return {
    type: UPDATE_PAGE_PARAMS,
    payload: newSession
  };
}
