import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';

const Feature = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8');
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu task');
        }
        const data = await response.json();
        const formattedTasks = data.map((item) => ({
          id: item.id,
          title: item.title,
          description: `Task được giao cho user #${item.userId}`,
          status: item.completed ? 'done' : 'pending',
          dueDate: '2026-06-30',
        }));
        setTasks(formattedTasks);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    const pendingCount = tasks.filter((task) => task.status === 'pending').length;
    document.title = `Task Tracker (${pendingCount} pending)`;
  }, [tasks]);

  const handleToggleStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'done' ? 'pending' : 'done' }
          : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  if (loading) return <p>Đang tải danh sách task...</p>;
  if (error) return <p className="text-danger">Lỗi: {error}</p>;

  return (
    <div>
      <h2 className="mb-3">Task List</h2>
      <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} onDelete={handleDelete} />
    </div>
  );
};

export default Feature;