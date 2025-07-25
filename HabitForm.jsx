import { useState } from 'react';
import { addHabit } from '../db/db';

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addHabit({ name });
    setName('');
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter habit"
        className="border p-2 flex-grow rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
