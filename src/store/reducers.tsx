import { combineReducers } from "redux";
import { reducer as AuthReducer } from "@forms/AuthForm/reducer";
import { reducer as RegisterReducer } from "@forms/RegisterForm/reducer";

export const reducer = combineReducers({
  AuthReducer,
  RegisterReducer,
});

export type reducerType = ReturnType<typeof reducer>;
export default reducer;
