import { TagsActions, GET_TAGS, TAGS_RECIEVED } from "./types";

export interface TagsState {
  loading: boolean;
  tags: string[];
}

const intialState: TagsState = {
  loading: false,
  tags: []
};

export const tagReducer = (state = intialState, action: TagsActions) => {
  switch (action.type) {
    case GET_TAGS:
      return { ...state, loading: true };
    case TAGS_RECIEVED:
      return {
        loading: false,
        tags: action.payload
      };
    default:
      return state;
  }
};
