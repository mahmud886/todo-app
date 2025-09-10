'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCompleted, toggleAllTodos } from '@/store/todosSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckSquare, Square, Trash2 } from 'lucide-react';
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useAppDispatch();
  const { todos, filter } = useAppSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const hasCompletedTodos = todos.some((todo) => todo.completed);
  const hasActiveTodos = todos.some((todo) => !todo.completed);
  const allCompleted = todos.length > 0 && todos.every((todo) => todo.completed);

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleToggleAll = () => {
    dispatch(toggleAllTodos());
  };

  if (todos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center py-12'>
        <Card className='p-8 bg-muted/50'>
          <div className='flex flex-col items-center gap-4'>
            <Square className='w-16 h-16 text-muted-foreground' />
            <div>
              <h3 className='text-xl font-semibold text-muted-foreground mb-2'>No todos yet</h3>
              <p className='text-muted-foreground'>Add a todo above to get started!</p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className='text-center py-12'>
        <Card className='p-8 bg-muted/50'>
          <div className='flex flex-col items-center gap-4'>
            <CheckSquare className='w-16 h-16 text-muted-foreground' />
            <div>
              <h3 className='text-xl font-semibold text-muted-foreground mb-2'>No {filter} todos</h3>
              <p className='text-muted-foreground'>
                {filter === 'active' && 'All tasks completed! Great job! 🎉'}
                {filter === 'completed' && 'No completed tasks yet'}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className='space-y-4'>
      {/* Bulk Actions */}
      {todos.length > 1 && (
        <div className='flex flex-wrap gap-2 mb-4'>
          <Button variant='outline' size='sm' onClick={handleToggleAll} className='flex items-center gap-2'>
            <CheckSquare className='w-4 h-4' />
            {allCompleted ? 'Mark all as incomplete' : 'Mark all as complete'}
          </Button>

          {hasCompletedTodos && (
            <Button
              variant='outline'
              size='sm'
              onClick={handleClearCompleted}
              className='flex items-center gap-2 text-destructive hover:text-destructive'>
              <Trash2 className='w-4 h-4' />
              Clear completed
            </Button>
          )}
        </div>
      )}

      {/* Todo Items */}
      <AnimatePresence mode='popLayout'>
        {filteredTodos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
}
