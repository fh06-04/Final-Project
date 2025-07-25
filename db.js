import { openDB } from 'idb';

const DB_NAME = 'habit-tracker';
const STORE_NAME = 'habits';

export const getDB = () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    },
  });

export const addHabit = async (habit) => {
  const db = await getDB();
  await db.add(STORE_NAME, { ...habit, created: new Date().toISOString(), streak: 0 });
};

export const getHabits = async () => {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
};

export const updateHabit = async (id, updates) => {
  const db = await getDB();
  const habit = await db.get(STORE_NAME, id);
  const updated = { ...habit, ...updates };
  await db.put(STORE_NAME, updated);
};
