import { RegisterUserRequest } from "../../../api/api.types";

export const REGISTER_REQUEST = "REGISTER_REQUEST";

export interface RegisterActionType {
  type: typeof REGISTER_REQUEST;
  payload: RegisterUserRequest;
}

export type RegisterState = { loading: boolean };
