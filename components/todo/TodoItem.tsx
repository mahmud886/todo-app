'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Todo } from '@/lib/localStorage';
import { useAppDispatch } from '@/store/hooks';
import { deleteTodo, editTodo, toggleTodo } from '@/store/todosSlice';
import { motion } from 'framer-motion';
import { Check, Edit, Trash2, X } from 'lucide-react';
import { useState } from 'react';

interface TodoItemProps {
  todo: Todo;
  index: number;
}

export default function TodoItem({ todo, index }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim() && editText.trim() !== todo.text) {
      dispatch(editTodo({ id: todo.id, text: editText }));
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
      layout
    >
      <Card className="bg-card mb-3 p-4 transition-shadow hover:shadow-md">
        <div className="flex items-center gap-3">
          <Checkbox checked={todo.completed} onCheckedChange={handleToggle} className="h-5 w-5" />

          <div className="flex-1">
            {isEditing ? (
              <div className="flex gap-2">
                <Input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                  autoFocus
                />
                <Button size="sm" variant="default" onClick={handleSaveEdit} disabled={!editText.trim()}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={handleCancelEdit}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <span
                className={`text-lg select-none ${
                  todo.completed ? 'text-muted-foreground line-through' : 'text-foreground'
                } cursor-pointer transition-colors`}
                onClick={handleToggle}
              >
                {todo.text}
              </span>
            )}
          </div>

          {!isEditing && (
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleEdit}
                className="text-muted-foreground hover:text-foreground"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDelete}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="text-muted-foreground mt-2 ml-8 text-xs">
          Created: {new Date(todo.createdAt).toLocaleDateString()}
          {todo.updatedAt !== todo.createdAt && (
            <span className="ml-2">• Updated: {new Date(todo.updatedAt).toLocaleDateString()}</span>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
