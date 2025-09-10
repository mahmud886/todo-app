'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setFilter } from '@/store/todosSlice';
import { FilterType } from '@/lib/localStorage';

export default function FilterTabs() {
  const dispatch = useAppDispatch();
  const { filter, todos } = useAppSelector(state => state.todos);

  const handleFilterChange = (value: string) => {
    dispatch(setFilter(value as FilterType));
  };

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
      <Tabs value={filter} onValueChange={handleFilterChange} className="w-full sm:w-auto">
        <TabsList className="grid w-full grid-cols-3 sm:w-auto">
          <TabsTrigger value="all" className="px-6">
            All ({todos.length})
          </TabsTrigger>
          <TabsTrigger value="active" className="px-6">
            Active ({activeTodosCount})
          </TabsTrigger>
          <TabsTrigger value="completed" className="px-6">
            Completed ({completedTodosCount})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="text-muted-foreground text-sm">
        {activeTodosCount > 0 && (
          <span>
            {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
          </span>
        )}
      </div>
    </div>
  );
}
