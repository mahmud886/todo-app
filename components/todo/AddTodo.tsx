'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/store/hooks';
import { addTodo } from '@/store/todosSlice';

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 text-lg py-6 px-4 border-2 focus:border-primary transition-colors"
        autoFocus
      />
      <Button
        type="submit"
        size="lg"
        className="px-6 py-6 bg-primary hover:bg-primary/90 transition-colors"
        disabled={!text.trim()}
      >
        <Plus className="w-5 h-5" />
      </Button>
    </form>
  );
}
