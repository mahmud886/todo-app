# Modern Todo App

A beautiful and feature-rich todo application built with Next.js 15, Redux Toolkit, and shadcn/ui.

## ✨ Features

- ✅ **Add new todos** - Create tasks with a clean input interface
- ✅ **Edit existing todos** - Inline editing with save/cancel options
- ✅ **Delete todos** - Remove tasks with a single click
- ✅ **Toggle completion** - Mark tasks as complete/incomplete
- ✅ **Filter todos** - View All, Active, or Completed tasks
- ✅ **Clear completed** - Remove all completed tasks at once
- ✅ **Bulk actions** - Mark all as complete/incomplete
- ✅ **Local storage persistence** - Your todos are saved automatically
- ✅ **Dark/Light mode** - Toggle between themes
- ✅ **Responsive design** - Works on all screen sizes
- ✅ **Smooth animations** - Powered by Framer Motion
- ✅ **Modern UI** - Beautiful components from shadcn/ui

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **State Management**: Redux Toolkit
- **Persistence**: Local Storage
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Type Safety**: TypeScript

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
/app
  ├── layout.tsx          # Root layout with providers
  ├── page.tsx            # Main todo page
  └── globals.css         # Global styles

/components
  ├── providers/
  │   ├── ReduxProvider.tsx    # Redux store provider
  │   └── ThemeProvider.tsx    # Theme provider
  ├── todo/
  │   ├── AddTodo.tsx         # Add new todo form
  │   ├── FilterTabs.tsx      # Filter tabs (All/Active/Completed)
  │   ├── TodoItem.tsx        # Individual todo item
  │   └── TodoList.tsx        # Todo list container
  └── ui/
      ├── button.tsx          # shadcn/ui button
      ├── input.tsx           # shadcn/ui input
      ├── checkbox.tsx        # shadcn/ui checkbox
      ├── tabs.tsx            # shadcn/ui tabs
      ├── card.tsx            # shadcn/ui card
      ├── dialog.tsx          # shadcn/ui dialog
      └── theme-toggle.tsx    # Theme toggle button

/store
  ├── store.ts            # Redux store configuration
  ├── todosSlice.ts       # Todos slice with reducers
  └── hooks.ts            # Typed Redux hooks

/lib
  ├── localStorage.ts     # Local storage utilities
  └── utils.ts            # Utility functions
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📱 Usage

### Adding Todos

- Type your task in the input field
- Press Enter or click the + button
- Your todo will appear at the top of the list

### Managing Todos

- **Complete/Uncomplete**: Click the checkbox or the todo text
- **Edit**: Click the edit icon (pencil) to modify the text
- **Delete**: Click the delete icon (trash) to remove the todo

### Filtering

- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

### Bulk Actions

- **Toggle All**: Mark all todos as complete or incomplete
- **Clear Completed**: Remove all completed todos

### Theme

- Click the theme toggle button (sun/moon icon) in the top right
- Supports system preference detection

## 🎨 Customization

### Themes

The app supports both light and dark themes with automatic system preference detection. Themes are powered by `next-themes` and Tailwind CSS.

### Colors

Colors can be customized in the `app/globals.css` file using CSS custom properties for both light and dark modes.

### Animations

Animations are handled by Framer Motion and can be customized in individual components.

## 📊 State Management

The app uses Redux Toolkit for state management with the following structure:

```typescript
interface TodosState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}
```

## 💾 Data Persistence

All todos are automatically saved to localStorage and restored when the app loads. The data persists across browser sessions and page refreshes.

## 🌟 Key Features Explained

### Redux Toolkit Integration

- Centralized state management
- Immutable updates with Immer
- Type-safe actions and selectors
- Automatic localStorage synchronization

### shadcn/ui Components

- Accessible and customizable UI components
- Consistent design system
- Built on Radix UI primitives
- Full TypeScript support

### Modern Next.js 15

- App Router for better performance
- Server and Client Components
- Built-in optimization features
- Turbopack for faster development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Advanced / Next Features

The following features could be implemented to enhance the todo app further:

### 🔔 Due Dates & Reminders

- **Due Date Assignment**: Allow users to assign due dates to tasks
- **Visual Indicators**: Highlight overdue tasks with red borders or icons
- **Countdown Display**: Show "due in X days" or "overdue by X days"
- **Notification System**: Browser notifications for upcoming deadlines
- **Smart Sorting**: Automatically sort by due date proximity

### ⏳ Task Priorities

- **Priority Levels**: Add Low / Medium / High / Critical priority options
- **Visual Hierarchy**: Use colors, icons, or badges to indicate urgency
- **Priority Sorting**: Sort tasks by priority level
- **Smart Filters**: Filter by priority combinations
- **Priority-based Styling**: Different card styles for different priorities

### 📅 Calendar View / Timeline

- **Calendar Integration**: Visualize tasks on a monthly/weekly calendar
- **Timeline View**: Show tasks in chronological order
- **Drag & Drop**: Move tasks between dates
- **Calendar Export**: Export to Google Calendar, Outlook, etc.
- **Month/Week/Day Views**: Multiple calendar perspectives

### 📝 Subtasks / Checklist

- **Nested Todos**: Support hierarchical task structure
- **Progress Tracking**: Show completion percentage for parent tasks
- **Collapsible Groups**: Expand/collapse task groups
- **Subtask Dependencies**: Mark subtasks as prerequisites
- **Bulk Subtask Actions**: Complete all subtasks at once

### 🗂️ Projects / Categories / Tags

- **Project Organization**: Group todos into projects or categories
- **Color-coded Categories**: Visual distinction between project types
- **Tag System**: Multiple tags per task with autocomplete
- **Advanced Filtering**: Filter by project, category, or tag combinations
- **Project Templates**: Pre-defined task templates for common projects

### 🔍 Search Functionality

- **Full-text Search**: Search through task titles and descriptions
- **Tag-based Search**: Quick search by tags or categories
- **Advanced Filters**: Combine search with date, priority, and status filters
- **Search History**: Remember recent searches
- **Fuzzy Search**: Find tasks even with typos

### 🔁 Recurring Tasks

- **Repeat Patterns**: Daily, weekly, monthly, yearly recurrence
- **Custom Intervals**: Every X days, specific days of week
- **Smart Scheduling**: Skip weekends, handle holidays
- **Recurrence Management**: Edit or stop recurring task series
- **Template-based Recurring**: Use templates for complex recurring tasks

### 📊 Stats / Analytics

- **Productivity Dashboard**: Visual charts of task completion
- **Streak Tracking**: Track daily/weekly completion streaks
- **Time Analysis**: Average time to complete tasks
- **Category Insights**: Most productive categories or times
- **Goal Setting**: Set and track completion goals
- **Gamification**: Points, badges, and achievements

### 🔄 Undo / Redo

- **Action History**: Track all user actions with timestamps
- **Undo Stack**: Multiple levels of undo/redo
- **Visual Feedback**: Show what action will be undone
- **Keyboard Shortcuts**: Ctrl+Z / Ctrl+Y support
- **Batch Undo**: Undo multiple related actions at once

### 🌍 Multi-language / i18n Support

- **Language Selection**: Support for multiple languages
- **RTL Support**: Right-to-left languages like Arabic, Hebrew
- **Date Localization**: Localized date formats
- **Dynamic Loading**: Load language packs on demand
- **Fallback System**: Graceful handling of missing translations

### 📤 Import / Export Todos

- **Multiple Formats**: JSON, CSV, Markdown export options
- **Import Sources**: From files, clipboard, or other todo apps
- **Data Migration**: Import from popular todo apps (Todoist, Any.do, etc.)
- **Backup/Restore**: Full app state backup and restoration
- **Selective Export**: Export specific projects or date ranges

### ☁️ Sync Across Devices

- **Cloud Storage**: Sync via Firebase, Supabase, or custom backend
- **Real-time Updates**: Live sync across multiple devices
- **Conflict Resolution**: Handle simultaneous edits gracefully
- **Offline Queue**: Queue changes when offline, sync when online
- **User Authentication**: Secure user accounts and data

### 🧪 Offline Mode Indicator

- **Connection Status**: Visual indicator of online/offline state
- **Offline Capabilities**: Full functionality when offline
- **Sync Status**: Show pending sync operations
- **Data Persistence**: Ensure no data loss during offline periods
- **Background Sync**: Automatic sync when connection is restored

### 🎨 Additional UI/UX Enhancements

- **Custom Themes**: User-defined color schemes
- **Drag & Drop**: Reorder tasks with drag and drop
- **Keyboard Shortcuts**: Power user keyboard navigation
- **Voice Input**: Add tasks via voice commands
- **Quick Actions**: Swipe gestures on mobile
- **Focus Mode**: Distraction-free view for current tasks

### 📱 Mobile Enhancements

- **Progressive Web App**: Full PWA with offline support
- **Native App Feel**: Smooth animations and gestures
- **Push Notifications**: Mobile notifications for reminders
- **Widget Support**: Home screen widgets
- **Share Integration**: Share tasks from other apps

### 🔐 Advanced Features

- **Task Templates**: Reusable task templates
- **Time Tracking**: Track time spent on tasks
- **Task Dependencies**: Link related tasks
- **Batch Operations**: Select and modify multiple tasks
- **Advanced Search**: Regular expressions, saved searches
- **API Integration**: Connect with external services
- **Automation Rules**: Trigger actions based on conditions

## Implementation Priority

**Phase 1 (Quick Wins)**:

- Due dates & reminders
- Task priorities
- Search functionality
- Undo/redo

**Phase 2 (Enhanced UX)**:

- Projects/categories
- Subtasks
- Import/export
- Stats/analytics

**Phase 3 (Advanced)**:

- Calendar view
- Recurring tasks
- Multi-language support
- Cloud sync

**Phase 4 (Premium Features)**:

- Advanced analytics
- Automation
- API integrations
- Enterprise features

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

Built with ❤️ using modern web technologies.
