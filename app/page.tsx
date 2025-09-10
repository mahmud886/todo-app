'use client';

import AddTodo from '@/components/todo/AddTodo';
import FilterTabs from '@/components/todo/FilterTabs';
import TodoList from '@/components/todo/TodoList';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { loadFromLocalStorage } from '@/lib/localStorage';
import { useAppDispatch } from '@/store/hooks';
import { loadFromLocalStorage as loadFromLocalStorageAction } from '@/store/todosSlice';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import { useEffect } from 'react';

export default function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Load todos from localStorage on initial render
    const savedState = loadFromLocalStorage();
    if (savedState) {
      dispatch(loadFromLocalStorageAction(savedState));
    }
  }, [dispatch]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-muted/20'>
      <div className='container mx-auto px-4 py-8 max-w-4xl relative'>
        <div className='absolute top-4 right-4'>
          <ThemeToggle />
        </div>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='p-3 bg-primary rounded-2xl'>
              <CheckSquare className='w-8 h-8 text-primary-foreground' />
            </div>
            <h1 className='text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
              Todo App
            </h1>
          </div>
          <p className='text-lg text-muted-foreground max-w-md mx-auto'>
            Stay organized and productive with this modern task manager
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className='p-6 shadow-xl border-0 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60'>
            <AddTodo />
            <FilterTabs />
            <TodoList />
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='text-center mt-8 text-sm text-muted-foreground'>
          <p>Built with ❤️ using Next.js 15, Redux Toolkit, and shadcn/ui</p>
        </motion.footer>
      </div>
    </div>
  );
}
