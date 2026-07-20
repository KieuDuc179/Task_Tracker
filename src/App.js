import TaskItemFunctional from './components/TaskItemFunctional';
import TaskItemClass from './components/TaskItemClass';

const sampleTask = {
  id: 1,
  title: 'Học React Router',
  description: 'Hoàn thành LO5',
  status: 'pending',
  dueDate: '2026-06-20',
};

function App() {
  return (
    <div className="App">
      <TaskItemFunctional task={sampleTask} />
      <TaskItemClass task={sampleTask} />
    </div>
  );
}

export default App;