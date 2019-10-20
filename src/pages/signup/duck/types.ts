import { RegisterUserRequest } from "../../../api/api.types";
import {
  AuthFailedActionType,
  AuthFaildType
} from "../../../components/auth/duck/types";

export const REGISTER_REQUEST = "REGISTER_REQUEST";

export interface RegisterActionType {
  type: typeof REGISTER_REQUEST;
  payload: RegisterUserRequest;
}

export type RegisterFaildState = AuthFaildType;
export type ActionType = AuthFailedActionType | RegisterActionType;
export type RegisterSReqtate = { loading: boolean };
export type RegisterState = RegisterSReqtate & RegisterFaildState;
