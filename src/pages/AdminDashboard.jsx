import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskTable from '../components/TaskTable';
import DashboardStats from '../components/DashboardStats';

const API_URL = "https://xya1ilgk82.execute-api.eu-west-1.amazonaws.com/Prod/tasks";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleCreateTask = async (newTask) => {
    try {
      const res = await axios.post(API_URL, newTask);
      setTasks(prev => [...prev, res.data]);
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  const priorityColors = {
    'High': 'text-red-600',
    'Medium': 'text-orange-500',
    'Low': 'text-blue-500'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            {/* ...svg... */}
            Admin Dashboard
          </h1>
          <div className="flex items-center">
            <span className="mr-4 text-gray-600">Admin User</span>
            <button className="bg-gray-200 p-2 rounded-full">
              {/* ...svg... */}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar with TaskForm */}
          <div className="lg:col-span-1">
            <TaskForm onCreateTask={handleCreateTask} />
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2">
            <TaskTable tasks={tasks} statusColors={statusColors} priorityColors={priorityColors} />
            <DashboardStats tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;