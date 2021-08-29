import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { LoginDataType } from "./types";
export const defaultState = {
  isAuth: false,
  okMessage: "",
  errorMessage: "",
  loading: false,
};

export const loginRequest = createAction<LoginDataType>("loginRequest");

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: defaultState,
  reducers: {
    setIsAuth: (state, { payload }: { payload: boolean }) => ({
      ...state,
      isAuth: payload,
    }),
    setOkMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      okMessage: payload,
    }),
    setErrorMessage: (state, { payload }: { payload: string }) => ({
      ...state,
      errorMessage: payload,
    }),
    clearErrorMessage: (state) => ({ ...state, errorMessage: "" }),
    setLoading: (state, { payload }: { payload: boolean }) => ({
      ...state,
      loading: payload,
    }),
  },
});
export const { actions, reducer } = AuthSlice;
