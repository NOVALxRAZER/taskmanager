import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
