import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SweetAlert from '../../src/helper/SweetAlert';
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Card,
    CardContent,
    CardActions,
    Stack
} from '@mui/material';
import { generatePDF } from '../utils/pdfHelper';

const TaskForm = () => {
    const [tasks, setTasks] = useState([]);
    const [form, setForm] = useState({ title: '', description: '' });

    // Fetch all tasks
    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/tasks');
            setTasks(res.data);
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: 'Error to Fetch Tasks!',
            });
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add a task
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title) {
            return SweetAlert({
                icon: 'error',
                text: 'Title is Required!',
            });
        }

        try {
            const res = await axios.post('http://localhost:5000/api/tasks', form);
            if (res?.data.success === true) {
                SweetAlert({
                    icon: 'success',
                    text: 'Task has been Added!',
                });
            }
            setForm({ title: '', description: '' });
            fetchTasks();
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: err.response?.data?.error?.message || 'Something went wrong',
            });
        }
    };

    // Toggle task completion
    const toggleTask = async (task) => {
        try {
            await axios.patch(`http://localhost:5000/api/tasks/${task.id}`, {
                completed: !task?.completed,
                title: task?.title,
                description: task?.description
            });
            fetchTasks();
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: err.response?.data?.error?.message || 'Error updating task',
            });
        }
    };

    // Delete a task
    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
            if (res?.data.success === true) {
                SweetAlert({
                    icon: 'success',
                    text: 'Task has been Deleted!',
                });
            }
            fetchTasks();
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: err.response?.data?.error?.message || 'Error deleting task',
            });
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Task Manager
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                <TextField
                    label="Title"
                    fullWidth
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Description"
                    fullWidth
                    multiline
                    minRows={2}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" type="submit" fullWidth>
                    Add Task
                </Button>
            </Box>

            <Button
                variant="outlined"
                color="primary"
                onClick={() => generatePDF(tasks)}
                sx={{ mb: 3 }}
            >
                Export as PDF
            </Button>

            <Stack spacing={2}>
                {tasks?.map((task) => (
                    <Card
                        key={task.id}
                        variant="outlined"
                        sx={{
                            backgroundColor: task.completed ? '#e0f7fa' : '#ffffff',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">{task.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {task.description || 'No description...'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                onClick={() => toggleTask(task)}
                                variant="contained"
                                color={task.completed ? 'warning' : 'success'}
                            >
                                Mark as {task.completed ? 'Incomplete' : 'Completed'}
                            </Button>
                            <Button
                                size="small"
                                onClick={() => deleteTask(task.id)}
                                variant="outlined"
                                color="error"
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Stack>
        </Container>
    );
};

export default TaskForm;
