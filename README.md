# Task Management Frontend

React-based frontend application for the Task Management System with admin and member dashboards.

## Features

- **Admin Dashboard**: Create, assign, and manage tasks
- **Member Dashboard**: View and update personal tasks
- **Task Form**: Reusable component for task creation
- **Authentication**: AWS Cognito integration
- **Responsive UI**: Tailwind CSS styling

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS
- AWS Cognito (authentication)
- React Router (navigation)

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── TaskForm.jsx           # Reusable task creation form
├── pages/
│   ├── Homepage.jsx           # Landing page
│   ├── AdminDashboard.jsx     # Admin interface
│   └── MemberDashboard.jsx    # Member interface
├── router/
│   └── AppRouter.jsx          # Application routing
├── App.jsx                    # Main app component
└── main.jsx                   # Entry point
```

## Routes

- `/` - Homepage
- `/admin` - Admin Dashboard
- `/member` - Member Dashboard
- `/tasks` - Task List

## Components

### TaskForm
Reusable form component for creating tasks with:
- Task title
- Status (Pending, In Progress, Completed)
- Priority (Low, Medium, High)
- Due date
- Assigned to field

### AdminDashboard
- Task creation form
- Task list with full CRUD operations
- Task statistics
- User management

### MemberDashboard
- Personal task view
- Status update functionality
- Task filtering
- Activity timeline

## Development

```bash
# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Environment Variables

Create `.env` file:
```
VITE_COGNITO_DOMAIN=your-cognito-domain
VITE_COGNITO_CLIENT_ID=your-client-id
VITE_COGNITO_REDIRECT_URI=http://localhost:5173
```

## Deployment

```bash
npm run build
# Deploy dist/ folder to your hosting service
```