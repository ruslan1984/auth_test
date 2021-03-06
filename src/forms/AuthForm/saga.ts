import { takeEvery, put, call } from "redux-saga/effects";
import { actions, loginRequest } from "./reducer";
import { LoginDataType } from "./types";

/**
 * Форма авторизации. saga
 * @param {string} login
 * @param {string} password
 */

function* login({ payload: { login, password } }: { payload: LoginDataType }) {
  try {
    yield put(actions.setLoading(true));
    const response: { status: number } = yield fetch(
      `${process.env.REACT_APP_HOST}/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          login,
          password,
        }),
      }
    );
    if (response.status === 204) {
      yield put(actions.setIsAuth(true));
      alert("Вы авторизованны");
    } else {
      yield put(actions.setErrorMessage("Не верный логин или пароль"));
      yield put(actions.setIsAuth(false));
    }
  } catch (e) {
    yield put(actions.setIsAuth(false));
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* AuthSaga() {
  yield takeEvery(loginRequest, login);
}
