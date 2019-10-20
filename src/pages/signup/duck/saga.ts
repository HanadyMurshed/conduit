import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../../api/server";
import { REGISTER_REQUEST, RegisterActionType } from "./types";
import {
  UPDATE_SESSION,
  AUTH_FAILED
} from "../../../components/auth/duck/types";

function* performRegister(action: RegisterActionType) {
  const responseAction = yield login(action.payload)
    .then((response: any) => {
      sessionStorage.setItem("data", JSON.stringify(response.data.user));
      const payload = { user: response.data.user, loggedIn: true };
      return { type: UPDATE_SESSION, payload: payload };
    })
    .catch((err: any) => {
      const payload = {
        ErrorMsg: "Invalid username or email"
      };
      return {
        type: AUTH_FAILED,
        payload: payload
      };
    });
  yield put(responseAction);
}

export function* LoginActionWatcher() {
  yield takeLatest(REGISTER_REQUEST, performRegister);
}
