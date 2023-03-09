import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let len = 1;

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (input) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title: input,
        completed: false,
        userId: Math.random(),
        id: Math.random(),

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();

    data.id += len;
    len++;
    console.log(data);
    return data;
  },
);

export const fetchTodo = createAsyncThunk(
  'todo/fetchTodo',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      .catch((err) => (console.log(err)));
    const data = await response.json();
    const dataSlicesd = data.slice(0, 10);
    return dataSlicesd;
  },
);

const TodoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload.id);

      toggledTodo.completed = !toggledTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchTodo.fulfilled, (state, action) => {
        
        state.todos = action.payload
         
        
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos = [ action.payload, ...state.todos];
      });
  },
});

export const { removeTodo, toggleTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
