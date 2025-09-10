import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import { saveToLocalStorage, loadFromLocalStorage } from '@/lib/localStorage';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state.todos);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
