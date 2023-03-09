import { configureStore } from '@reduxjs/toolkit';
import PostSlice from '../../modules/Posts/slices/PostSlice';
import TodoSlice from '../../modules/Todo/slices/TodoSlice';
import userSlisce from '../../modules/Users/slices/userSlisce';
import UserInfoSlice from '../../modules/UsersInformation/Slices/UserInfoSlice';

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
    users: userSlisce,
    realpost: PostSlice,
    todoform: TodoSlice,
    userinfo: UserInfoSlice,
  },
});


