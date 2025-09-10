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
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="focus:border-primary flex-1 border-2 px-4 py-6 text-lg transition-colors"
        autoFocus
      />
      <Button
        type="submit"
        size="lg"
        className="bg-primary hover:bg-primary/90 px-6 py-6 transition-colors"
        disabled={!text.trim()}
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
}
