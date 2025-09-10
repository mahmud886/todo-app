export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TodosState {
  todos: Todo[];
  filter: FilterType;
}

const TODOS_STORAGE_KEY = 'todos-app-state';

export const loadFromLocalStorage = (): TodosState | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const serializedState = localStorage.getItem(TODOS_STORAGE_KEY);
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
    return null;
  }
};

export const saveToLocalStorage = (state: TodosState): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(TODOS_STORAGE_KEY, serializedState);
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

export const clearLocalStorage = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(TODOS_STORAGE_KEY);
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
};
