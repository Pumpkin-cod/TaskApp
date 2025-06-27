import React, { useState } from 'react';

const initialState = {
  title: '',
  description: '',
  assignedTo: '',
  deadline: '',
  status: 'Pending'
};

const TaskForm = ({ onCreateTask }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.title || !form.assignedTo || !form.deadline) {
      alert('Title, Assigned To, and Deadline are required.');
      return;
    }
    // Optionally validate email
    if (!/\S+@\S+\.\S+/.test(form.assignedTo)) {
      alert('Assigned To must be a valid email address.');
      return;
    }
    onCreateTask(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Create New Task</h2>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Assigned To (email)</label>
        <input
          type="email"
          name="assignedTo"
          value={form.assignedTo}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Deadline</label>
        <input
          type="datetime-local"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;