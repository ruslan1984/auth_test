import { takeEvery, put } from "redux-saga/effects";
import { actions, registerRequest } from "./reducer";
import { RegisterDataType } from "./types";

/**
 * Форма регистрации. saga
 * @param {string} login
 * @param {string} password
 * @param {string} confirm_password
 * @param {string} email
 */

function* register({
  payload: { login, password, email, confirm_password },
}: {
  payload: RegisterDataType;
}) {
  try {
    yield put(actions.setLoading(true));
    let valid = true;
    if (login.length < 4) {
      yield put(
        actions.setLoginErrorMessage("обязательное поле не менее 4 символов")
      );
      valid = false;
    }
    if (password.length < 6) {
      yield put(
        actions.setPasswordErrorMessage("обязательное поле не менее 6 символо")
      );
      valid = false;
    } else if (password !== confirm_password) {
      yield put(actions.setConfirmPasswordErrorMessage("Пароли не совпадают"));
      valid = false;
    }

    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(email).toLowerCase()
      )
    ) {
      yield put(actions.setEmailErrorMessage("не валидный email"));
      valid = false;
    }

    if (!valid) return null;

    const response: { status: number } = yield fetch(
      `${process.env.REACT_APP_HOST}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          login,
          password,
          email,
        }),
      }
    );
    if (response.status === 204) {
      alert("Вы зарегистрированы");
    } else {
      yield put(actions.setErrorMessage("Ошибка регистрации"));
    }
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* RegisterSaga() {
  yield takeEvery(registerRequest, register);
}
