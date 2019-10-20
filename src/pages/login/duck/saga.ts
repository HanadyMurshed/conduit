import { put, takeLatest } from "redux-saga/effects";
import { login } from "../../../api/server";
import { LOGGIN_REQUEST, LoginActionType } from "./types";
import { AUTH_FAILED } from "../../../components/auth/duck/types";
import { UPDATE_SESSION } from "../../../components/auth/duck/types";

function* performeLogin(action: LoginActionType) {
  const responssAction = yield login(action.payload)
    .then((response: any) => {
      sessionStorage.setItem("data", JSON.stringify(response.data.user));
      const payload = { user: response.data.user, loggedIn: true };
      return { type: UPDATE_SESSION, payload: payload };
    })
    .catch((err: any) => {
      const payload = {
        IsError: true,
        ErrorMsg: "Invalid username and password"
      };
      return {
        type: AUTH_FAILED,
        payload: payload
      };
    });
  yield put(responssAction);
}

export function* LoginActionWatcher() {
  yield takeLatest(LOGGIN_REQUEST, performeLogin);
}
