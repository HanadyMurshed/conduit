import { RegisterUserRequest } from "../../../api/api.types";
import { REGISTER_REQUEST } from "./types";

export const registerAction = (user: RegisterUserRequest) => ({
  type: REGISTER_REQUEST,
  payload: user
});
