import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import { fetchTasks, toggleStatus, deleteTask } from '../redux/tasksSlice';

const Feature = () => {
  const dispatch = useDispatch();
  const { items: tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    const pendingCount = tasks.filter((task) => task.status === 'pending').length;
    document.title = `Task Tracker (${pendingCount} pending)`;
  }, [tasks]);

  if (loading) return <p>Đang tải danh sách task...</p>;
  if (error) return <p className="text-danger">Lỗi: {error}</p>;

  return (
    <div>
      <h2 className="mb-3">Task List</h2>
      <TaskList
        tasks={tasks}
        onToggleStatus={(id) => dispatch(toggleStatus(id))}
        onDelete={(id) => dispatch(deleteTask(id))}
      />
    </div>
  );
};

export default Feature;