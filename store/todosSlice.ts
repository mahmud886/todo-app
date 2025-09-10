import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, FilterType, TodosState } from '@/lib/localStorage';

const initialState: TodosState = {
  todos: [],
  filter: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: action.payload.trim(),
        completed: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      state.todos.unshift(newTodo);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = Date.now();
      }
    },

    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text.trim();
        todo.updatedAt = Date.now();
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    clearCompleted: state => {
      state.todos = state.todos.filter(todo => !todo.completed);
    },

    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },

    loadFromLocalStorage: (state, action: PayloadAction<TodosState>) => {
      return action.payload;
    },

    toggleAllTodos: state => {
      const allCompleted = state.todos.every(todo => todo.completed);
      state.todos.forEach(todo => {
        todo.completed = !allCompleted;
        todo.updatedAt = Date.now();
      });
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  editTodo,
  deleteTodo,
  clearCompleted,
  setFilter,
  loadFromLocalStorage,
  toggleAllTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
