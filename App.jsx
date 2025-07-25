import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import { useState } from 'react';
import './App.css';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-5xl font-bold mb-10 flex items-center gap-3 text-pink-400 drop-shadow-[0_0_10px_rgba(255,105,180,0.8)]">🗓️ Habit Tracker</h1>
      <HabitForm onAdd={() => setRefresh(!refresh)} />
      <HabitList key={refresh} />
    </div>
  );
}

export default App;
