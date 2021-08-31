import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RegisterDataType } from "./types";
export const defaultState = {
  errorMessage: "",
  loginErrorMessage: "",
  passwordErrorMessage: "",
  confirmPasswordErrorMessage: "",
  emailErrorMessage: "",
  loading: false,
};

/**
 * Форма регистрации. Редьюсер
 */

/**
 * Форма регистрации. registerRequest - запрос регистрации
 */
export const registerRequest =
  createAction<RegisterDataType>("registerRequest");

export const RegisterSlice = createSlice({
  name: "Register",
  initialState: defaultState,
  reducers: {
    setErrorMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      errorMessage: payload,
    }),
    setLoginErrorMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      loginErrorMessage: payload,
    }),
    setPasswordErrorMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      passwordErrorMessage: payload,
    }),
    setConfirmPasswordErrorMessage: (
      state,
      { payload }: PayloadAction<string>
    ) => ({
      ...state,
      confirmPasswordErrorMessage: payload,
    }),
    setEmailErrorMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      emailErrorMessage: payload,
    }),
    clearErrorMessage: (state) => ({
      ...state,
      loginErrorMessage: "",
      passwordErrorMessage: "",
      confirmPasswordErrorMessage: "",
      emailErrorMessage: "",
      errorMessage: "",
    }),
    setLoading: (state, { payload }: { payload: boolean }) => ({
      ...state,
      loading: payload,
    }),
  },
});
export const { actions, reducer } = RegisterSlice;
