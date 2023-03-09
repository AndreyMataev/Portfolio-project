import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPost = createAsyncThunk(
  'realpost/fetchpost',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  },
);

const PostSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.posts = action.payload
        
      });
  },
});

export default PostSlice.reducer;
