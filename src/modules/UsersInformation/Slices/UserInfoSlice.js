import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsersInfo = createAsyncThunk(
  'users/fetchall',
  async (id) => {
    try {
      const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((res) => res);
      const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((res) => res.json())
        .then((res) => res);
      const todos = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((res) => res.json())
        .then((res) => res);
      const album = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((res) => res.json())
        .then((res) => res);

      return {
        user, posts, todos, album,
      };
    } catch (error) {
      return error;
    }
  },

);

const UserInfoSlice = createSlice({
  name: 'usersInfo',
  initialState: {
    albums: [],
    todos: [],
    posts: [],
    user: [],
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsersInfo.fulfilled, (state, action) => {
        state.albums = action.payload.album;
        state.user = action.payload.user;
        state.todos = action.payload.todos;
        state.posts = action.payload.posts;
      });
  },
});

export default UserInfoSlice.reducer;
