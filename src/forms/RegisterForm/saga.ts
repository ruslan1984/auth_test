import { takeEvery, put } from "redux-saga/effects";
import { actions, registerRequest } from "./reducer";
import { RegisterDataType } from "./types";

function* register({
  payload: { login, password, email },
}: {
  payload: RegisterDataType;
}) {
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
  try {
    const response: { status: number } = yield fetch(
      "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/register",
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
  } catch (e) {
    console.error(e?.message);
  } finally {
    yield put(actions.setLoading(false));
  }
}

export function* RegisterSaga() {
  yield takeEvery(registerRequest, register);
}
