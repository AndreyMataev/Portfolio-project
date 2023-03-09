import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'users/fetchuser',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  },
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],

  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
