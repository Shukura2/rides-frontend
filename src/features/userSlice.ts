import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { loginUsers, signupDriver, signupUser } from "@/services/auth";

const initialState = {
  error: false,
  success: false,
  user: {},
};

interface User {
  message: string;
  success: boolean;
  userInfo: {
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
  };
}
interface ValidationErrors {
  message: string;
  field_errors: Record<string, string>;
}
interface CreateUser {
  user: User;
}
interface UserState {
  error: boolean;
  success: boolean;
  user: Record<string, User>;
}

export const addPassenger = createAsyncThunk<
  User,
  { userId: string } & Partial<User>,
  {
    rejectValue: ValidationErrors;
  }
>("signup/passenger", async (values, { rejectWithValue }) => {
  try {
    const response = await signupUser(values);
    return response;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const addDriver = createAsyncThunk(
  "signup/driver",
  async (values, { rejectWithValue }) => {
    try {
      const response = await signupDriver(values);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "login/user",
  async (values, { rejectWithValue }) => {
    try {
      const response = await loginUsers(values);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      state.error = false;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addPassenger.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
    });
    builder.addCase(addPassenger.rejected, (state, action) => {
      state.user = action.payload;
      state.error = true;
      state.success = false;
    });
    builder.addCase(addDriver.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
    });
    builder.addCase(addDriver.rejected, (state, action) => {
      state.user = action.payload;
      state.error = true;
      state.success = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.user = action.payload;
      state.error = true;
    });
  },
});

export const { logout } = authSlice.actions;
export const authSelectors = (state) => state.auth;

export default authSlice.reducer;
