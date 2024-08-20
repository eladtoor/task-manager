import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [refreshTasks, setRefreshTasks] = useState(false);

  const handleTaskAdded = () => {
    setRefreshTasks(!refreshTasks); // Toggle to trigger re-fetch
  };

  return (
    <div>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList key={refreshTasks} /> {/* Key to re-render */}
    </div>
  );
};

export default App;
