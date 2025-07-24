import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SweetAlert from '../../src/helper/SweetAlert';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Stack,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Modal,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { generatePDF } from '../utils/pdfHelper';

const TaskForm = () => {
    const [tasks, setTasks] = useState([]);
    const [poin, setPoin] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [form, setForm] = useState({
        title: '',
        description: '',
        pic_name: '',
        start_date: '',
        end_date: '',
    });
    const [data, setData] = useState({
        id: '',
        title: '',
        description: '',
        pic_name: '',
        start_date: '',
        end_date: '',
    });

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    // Fetch all tasks
    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`);
            setTasks(res.data);
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: 'Error to Fetch Tasks!',
            });
        }
    };

    const getTasks = async (taskId) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks/${taskId}`);
            setData({
                id: res.data.id || '',
                title: res.data.title || '',
                description: res.data.description || '',
                pic_name: res.data.pic_name || '',
                start_date: res.data.start_date ? moment(res.data.start_date).format('YYYY-MM-DD') : '',
                end_date: res.data.end_date ? moment(res.data.end_date).format('YYYY-MM-DD') : '',
            });
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: 'Error to Fetch Tasks!',
            });
        }
    };

    const buka = (task) => {
        setPoin(task.id)
        setEditModal(true)
        getTasks(task.id)
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Add a task
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, pic_name, start_date, end_date } = form;

        if (!title || !pic_name || !start_date || !end_date) {
            return SweetAlert({
                icon: 'error',
                text: 'Please complete all required fields!',
            });
        }

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks`, form);

            if (res?.data.success === true) {
                SweetAlert({
                    icon: 'success',
                    text: 'Task has been Added!',
                });
                setOpenModal(false);
            }
            setForm({
                title: '',
                description: '',
                pic_name: '',
                start_date: '',
                end_date: '',
            });
            fetchTasks();
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: err.response?.data?.error?.message || 'Something went wrong',
            });
        }
    };

    // Edit a task
    const handleEdit = async (e) => {
        e.preventDefault();

        const { title, pic_name, start_date, end_date } = form;

        if (!title || !pic_name || !start_date || !end_date) {
            return SweetAlert({
                icon: 'error',
                text: 'Please complete all required fields!',
            });
        }

        try {
            const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/tasks/${poin?.id}`, form);

            if (res?.data.success === true) {
                SweetAlert({
                    icon: 'success',
                    text: 'Task has been Edited!',
                });
            }
            setEditModal(false);
            setForm({
                title: '',
                description: '',
                pic_name: '',
                start_date: '',
                end_date: '',
            });
            fetchTasks();
        } catch (err) {
            SweetAlert({
                icon: 'error',
                text: err.response?.data?.error?.message || 'Something went wrong',
            });
        }
    };

    // Toggle task completion
    const toggleTask = (task) => {
        SweetAlert({
            icon: 'question',
            title: `${task.completed ? 'Unconfirm' : 'Confirm'} Data`,
            text: `Are you sure you want to ${task.completed ? 'Unconfirm' : 'Confirm'} this Task?`,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`${import.meta.env.VITE_API_URL}/api/tasks/${task.id}`, {
                    completed: task?.completed ? 0 : 1,
                    title: task?.title,
                    description: task?.description
                }).then((res) => {
                    if (res.data.status === true) {
                        fetchTasks();
                    } else {
                        SweetAlert({
                            icon: 'error',
                            text: 'Error updating Task',
                        })
                    }
                });
            }
        })
    };

    // Delete a task
    const deleteTask = (id) => {
        SweetAlert({
            icon: 'question',
            title: 'Delete Data',
            text: 'Are you sure want to Delete this Data?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/api/tasks/${id}`)
                    .then((res) => {
                        if (res?.data.status === true) {
                            SweetAlert({
                                icon: 'success',
                                text: 'Task has been Deleted!',
                            });
                            fetchTasks();
                        } else {
                            SweetAlert({
                                icon: 'error',
                                text: 'Error deleting task!',
                            });
                        }
                    })
            }
        })
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Task Manager
            </Typography>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Button variant="contained" onClick={() => setOpenModal(true)}>
                    Add Task
                </Button>
                <Button variant="outlined" onClick={() => generatePDF(tasks)}>
                    Export as PDF
                </Button>
            </Box>


            {/* Task Table in a Card */}
            <Card variant="outlined">
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Title</strong></TableCell>
                                    <TableCell><strong>Description</strong></TableCell>
                                    <TableCell><strong>PIC</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell><strong>Start Date</strong></TableCell>
                                    <TableCell><strong>End Date</strong></TableCell>
                                    <TableCell><strong>Created At</strong></TableCell>
                                    <TableCell><strong>Actions</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks?.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.title}</TableCell>
                                        <TableCell>{task.description || 'No description...'}</TableCell>
                                        <TableCell>{task.pic_name}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={task.completed ? 'Completed' : 'Incomplete'}
                                                color={task.completed ? 'success' : 'default'}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>{task.start_date ? moment(task.start_date).format('DD MMM YYYY') : ""}</TableCell>
                                        <TableCell>{task.end_date ? moment(task.end_date).format('DD MMM YYYY') : ""}</TableCell>
                                        <TableCell>{task.created_at ? moment(task.created_at).format('DD MMM YYYY') : ""}</TableCell>
                                        <TableCell>
                                            <Stack direction="row" spacing={1}>
                                                <CheckCircleIcon
                                                    onClick={() => toggleTask(task)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: task.completed ? 'orange' : 'green',
                                                        '&:hover': { opacity: 0.7 }
                                                    }}
                                                    titleAccess={task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                                />
                                                <EditIcon
                                                    onClick={() => buka(task)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: '#1976d2',
                                                        '&:hover': { opacity: 0.7 }
                                                    }}
                                                    titleAccess="Edit Task"
                                                />
                                                <DeleteIcon
                                                    onClick={() => deleteTask(task.id)}
                                                    sx={{
                                                        cursor: 'pointer',
                                                        color: 'red',
                                                        '&:hover': { opacity: 0.7 }
                                                    }}
                                                    titleAccess="Delete Task"
                                                />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            {/* Modal for Add Task */}
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box component="form" onSubmit={handleSubmit} sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        Add New Task
                    </Typography>

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

                    <TextField
                        label="PIC Name"
                        fullWidth
                        value={form.pic_name}
                        onChange={(e) => setForm({ ...form, pic_name: e.target.value })}
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <TextField
                            label="Start Date"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={form.start_date}
                            onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                        />
                        <TextField
                            label="End Date"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={form.end_date}
                            onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button variant="outlined" onClick={() => setOpenModal(false)}>
                            Close
                        </Button>
                        <Button type="submit" variant="contained">
                            Save Task
                        </Button>
                    </Box>
                </Box>
            </Modal>

            {/* Modal for Edit Task */}
            <Modal open={editModal} onClose={() => setEditModal(false)}>
                <Box component="form" onSubmit={handleEdit} sx={modalStyle}>
                    <Typography variant="h6" gutterBottom>
                        Edit a Task
                    </Typography>

                    <TextField
                        label="Title"
                        fullWidth
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="Description"
                        fullWidth
                        multiline
                        minRows={2}
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                        sx={{ mb: 2 }}
                    />

                    <TextField
                        label="PIC Name"
                        fullWidth
                        value={data.pic_name}
                        onChange={(e) => setData({ ...data, pic_name: e.target.value })}
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <TextField
                            label="Start Date"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={data.start_date}
                            onChange={(e) => setData({ ...data, start_date: e.target.value })}
                        />
                        <TextField
                            label="End Date"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={data.end_date}
                            onChange={(e) => setData({ ...data, end_date: e.target.value })}
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Button variant="outlined" onClick={() => setEditModal(false)}>
                            Close
                        </Button>
                        <Button type="submit" variant="contained">
                            Edit Task
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Container>
    );
};

export default TaskForm;
