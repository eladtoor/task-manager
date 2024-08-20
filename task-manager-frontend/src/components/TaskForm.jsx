import React, { useState } from 'react';
import { createTask } from '../api';

const TaskForm = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            completed: false,
        };

        try {
            await createTask(newTask);
            setTitle(''); // Clear the form
            setDescription('');
            onTaskAdded(); // Notify parent to refresh the list
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div>
            <h2>Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default TaskForm;