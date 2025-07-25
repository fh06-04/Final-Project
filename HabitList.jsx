import { useEffect, useState } from 'react';
import { getHabits, updateHabit } from '../db/db';

export default function HabitList() {
  const [habits, setHabits] = useState([]);

  const load = async () => {
    const data = await getHabits();
    setHabits(data);
  };

  const handleCheckIn = async (id, streak) => {
    await updateHabit(id, { streak: streak + 1 });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      {habits.map((habit) => (
        <div key={habit.id} className="flex justify-between p-2 bg-gray-100 mb-2 rounded">
          <span>{habit.name}</span>
          <div>
            <span className="mr-4">🔥 {habit.streak}</span>
            <button
              className="bg-green-500 text-white px-2 rounded"
              onClick={() => handleCheckIn(habit.id, habit.streak)}
            >
              Check-In
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
