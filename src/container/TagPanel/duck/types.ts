export const GET_TAGS = "GET_TAGS";
export const TAGS_RECIEVED = "TAGS_RECIEVED";

interface GetTagsActionType {
  type: typeof GET_TAGS;
}

type TagRecievedActionType = {
  type: typeof TAGS_RECIEVED;
  payload: string[];
};

export type TagsActions = TagRecievedActionType | GetTagsActionType;

export type GetTagsState = { loading: boolean; tags: string[] };
