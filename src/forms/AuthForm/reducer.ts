/**
 * Форма авторизации. Редьюсер
 */
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { LoginDataType } from "./types";
export const defaultState = {
  isAuth: false,
  okMessage: "",
  errorMessage: "",
  loading: false,
};

/**
 * Форма авторизации. loginRequest - запрос авторизации
 */
export const loginRequest = createAction<LoginDataType>("loginRequest");

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: defaultState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isAuth: payload,
    }),
    setOkMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      okMessage: payload,
    }),
    setErrorMessage: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      errorMessage: payload,
    }),
    clearErrorMessage: (state) => ({ ...state, errorMessage: "" }),
    setLoading: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      loading: payload,
    }),
  },
});
export const { actions, reducer } = AuthSlice;
