import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
  if (!response.ok) {
    throw new Error('Không thể tải dữ liệu task');
  }
  const data = await response.json();
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    description: `Task được giao cho user #${item.userId}`,
    status: item.completed ? 'done' : 'pending',
    dueDate: '2026-06-30',
  }));
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { items: [], loading: false, error: null },
  reducers: {
    toggleStatus: (state, action) => {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) task.status = task.status === 'done' ? 'pending' : 'done';
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;