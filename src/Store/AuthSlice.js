import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    saveAuthInfo: (state, param) => {
      const { payload } = param;
      state.user = payload.user;
      state.token = payload.token;
      state.via = payload.via;
      // axiosInstance.defaults.headers.common.authorization = `Bearer ${state.token}`;
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
      // axiosInstance.defaults.headers.common.authorization = null;
    },
  },
});

const { actions, reducer } = authSlice;

export const { saveAuthInfo, logoutUser } = actions;
export default reducer;
