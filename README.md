# Task Management System

A modern web application for managing tasks efficiently with different user roles and interfaces.

## Features

- **User Authentication**: Secure login for different user roles
- **Admin Dashboard**: Create, manage, and assign tasks
- **Member Dashboard**: View and update assigned tasks
- **Task Management**: Create, update, and track tasks with priorities and deadlines
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Build Tool**: Vite
- **Authentication**: AWS Cognito (configured)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Task\ Management
```

2. Install dependencies
```bash
cd frontend
npm install
```

3. Start the development server
```bash
npm run dev
```

## Routes

- **Home Page**: `/` - Landing page with application overview
- **Admin Dashboard**: `/admin` - Dashboard for administrators to manage tasks
- **Member Dashboard**: `/member` - Dashboard for team members to view and update their tasks
- **Tasks Page**: `/tasks` - Detailed task list view

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── TaskForm.jsx       # Reusable task creation form
│   ├── pages/
│   │   ├── Homepage.jsx       # Landing page
│   │   ├── AdminDashboard.jsx # Admin interface
│   │   └── MemberDashboard.jsx # Member interface
│   ├── router/
│   │   └── AppRouter.jsx      # Application routing
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
└── public/
    └── ...                    # Static assets
```

## Usage

### Admin Dashboard

Administrators can:
- Create new tasks with title, status, priority, due date, and assignee
- View all tasks in the system
- Edit or delete existing tasks
- Monitor task statistics (total, pending, completed)

Access at: `/admin`

### Member Dashboard

Team members can:
- View tasks assigned to them
- Update task status (Pending, In Progress, Completed)
- Filter tasks by status and priority
- View task statistics and upcoming deadlines

Access at: `/member`

## Development

This project uses Vite for fast development with HMR (Hot Module Replacement).

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

The UI is built with Tailwind CSS, making it easy to customize:

- Edit `tailwind.config.js` to modify theme colors and other design tokens
- Component styles use Tailwind utility classes for easy modification

## License

[MIT](LICENSE)