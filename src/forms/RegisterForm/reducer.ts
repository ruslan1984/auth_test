import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { RegisterDataType } from "./types";
export const defaultState = {
  errorMessage: "",
  loginErrorMessage: "",
  passwordErrorMessage: "",
  emailErrorMessage: "",
  loading: false,
};

export const registerRequest =
  createAction<RegisterDataType>("registerRequest");

export const RegisterSlice = createSlice({
  name: "Register",
  initialState: defaultState,
  reducers: {
    setErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      errorMessage: payload,
    }),
    setLoginErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      loginErrorMessage: payload,
    }),
    setPasswordErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      passwordErrorMessage: payload,
    }),
    setEmailErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      emailErrorMessage: payload,
    }),
    clearErrorMessage: (state) => ({
      ...state,
      loginErrorMessage: "",
      passwordErrorMessage: "",
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
