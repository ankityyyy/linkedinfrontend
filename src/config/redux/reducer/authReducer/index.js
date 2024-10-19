import { registerUser } from "../../action/authAction";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  loggedIn: false,
  message: "",
  profileFetched: false,
  connections: [],
  connectionRequest: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    handleLoginUser: (state) => {
      state.message = "hello";
    },

    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.message = "Knocking the door...";
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.loggedIn = true;
          state.message = "Login is Successful!";
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
        })

        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
          state.message = "Registering you...";
        })

        .addCase(registerUser.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.loggedIn = true;
          state.message = "Registration is successfull";
        })

        .addCase(registerUser.rejected, (state, action) => {
          state.isError = true;
          state.isLoading = false;

          state.message = action.payload;
        });
    },
  },
});

export default authSlice.reducer;
