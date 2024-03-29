import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUsers, signupDriver, signupUser } from "../services/auth";
import { addPhoneNumber, uploadProfilePics } from "../services/user";
import {
  FormValues,
  LoginValues,
  userStateProps,
  initialStateProp,
} from "../types";
import { RootState } from "../redux/store";

const initialState: initialStateProp = {
  error: "",
  success: false,
  user: {
    message: "",
    success: false,
    token: "",
    userInfo: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      profilePic: "",
      userId: "",
      userType: "",
    },
  },
};

export const addPassenger = createAsyncThunk(
  "signup/passenger",
  async (values: FormValues, { rejectWithValue }) => {
    try {
      const response = await signupUser(values);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addDriver = createAsyncThunk(
  "signup/driver",
  async (values: FormValues, { rejectWithValue }) => {
    try {
      const response = await signupDriver(values);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "login/user",
  async (values: LoginValues, { rejectWithValue }) => {
    try {
      const response = await loginUsers(values);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addUserPhoneNumber = createAsyncThunk(
  "user/phoneNumber",
  async (values: FormValues, { rejectWithValue }) => {
    try {
      const response = await addPhoneNumber(values);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProfilePic = createAsyncThunk(
  "user/profilePic",
  async (values: any, { rejectWithValue }) => {
    try {
      const response = await uploadProfilePics(values);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
        message: "",
        success: false,
        token: "",
        userInfo: {
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          profilePic: "",
          userId: "",
          userType: "",
        },
      };
      state.error = "";
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPassenger.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
      state.error = "";
    });
    builder.addCase(addPassenger.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
        state.success = false;
      }
      if (action.payload) {
        state.user = action.payload as userStateProps;
      }
    });
    builder.addCase(addDriver.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
      state.error = "";
    });
    builder.addCase(addDriver.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
        state.success = false;
      }
      if (action.payload) {
        state.user = action.payload as userStateProps;
      }
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
      state.error = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
        state.success = false;
      }
      if (action.payload) {
        state.user = action.payload as userStateProps;
      }
    });
    builder.addCase(addUserPhoneNumber.fulfilled, (state, action) => {
      state.user = action.payload as userStateProps;
      state.success = true;
      state.error = "";
    });
    builder.addCase(addUserPhoneNumber.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
        state.success = false;
      }
      if (action.payload) {
        state.user = action.payload as userStateProps;
      }
    });
    builder.addCase(addProfilePic.fulfilled, (state, action) => {
      state.user = action.payload as userStateProps;
      state.success = true;
      state.error = "";
    });
    builder.addCase(addProfilePic.rejected, (state, action) => {
      if (action.error.message) {
        state.error = action.error.message;
        state.success = false;
      }
      if (action.payload) {
        state.user = action.payload as userStateProps;
      }
    });
  },
});

export const { logout } = authSlice.actions;
export const authSelectors = (state: RootState) => state.auth;

export default authSlice.reducer;
