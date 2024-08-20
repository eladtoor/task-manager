import React, { useState, useEffect } from 'react';
import { getTasks, deleteTask } from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            fetchTasks(); // Refresh the list after deleting
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;