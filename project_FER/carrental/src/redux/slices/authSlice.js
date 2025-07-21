import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { data: users } = await axios.get("http://localhost:3001/users", {
      params: { email, password }
    });
    if (users.length === 0) throw new Error("Email hoặc mật khẩu không đúng.");
    return users[0];
  }
);

const slice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle", error: null },
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    bootstrap(state) {
      const stored = localStorage.getItem("user");
      if (stored) state.user = JSON.parse(stored);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export const { logout, bootstrap } = slice.actions;
export default slice.reducer;