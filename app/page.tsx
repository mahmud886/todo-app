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
    <div className="from-background via-background to-muted/20 min-h-screen bg-gradient-to-br">
      <div className="relative container mx-auto max-w-4xl px-4 py-8">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="bg-primary rounded-2xl p-3">
              <CheckSquare className="text-primary-foreground h-8 w-8" />
            </div>
            <h1 className="from-primary to-primary/60 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              Todo App
            </h1>
          </div>
          <p className="text-muted-foreground mx-auto max-w-md text-lg">
            Stay organized and productive with this modern task manager
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-card/95 supports-[backdrop-filter]:bg-card/60 border-0 p-6 shadow-xl backdrop-blur">
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
          className="text-muted-foreground mt-8 text-center text-sm"
        >
          <p>Built with ❤️ using Next.js 15, Redux Toolkit, and shadcn/ui</p>
        </motion.footer>
      </div>
    </div>
  );
}
