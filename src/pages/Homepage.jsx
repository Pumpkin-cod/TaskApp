import { useAuth } from "react-oidc-context";

import AdminDashboard from "./AdminDashboard";
import MemberDashboard from "./MemberDashboard";


export default function HomePage() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Error: {auth.error.message}</div>;
  }

  const isAuthenticated = auth.isAuthenticated;
  const user = auth.user;
  const groups = Array.isArray(user?.profile["cognito:groups"]) ? user.profile["cognito:groups"] : [];
  const role = groups.includes("admin") ? "admin" : "member";

  // Sign-out redirect URL for Cognito logout
  const clientId = "272vrt8mvdjk22usqrrk78t1gl";
  const logoutUri = "http://localhost:5174"; // Match redirect_uri configured in Cognito
  const cognitoDomain = "https://task.auth.eu-west-1.amazoncognito.com";

  const signOutRedirect = () => {
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (!isAuthenticated) {
    // Not signed in — show login page
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => auth.signinRedirect()}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign in with AWS
        </button>
      </div>
    );
  }

  // Authenticated: render routes based on role or navigation UI here
  return (
    <div>
      <div className="p-4">
        <p>Welcome, {user?.profile.email}</p>
        <button onClick={() => auth.removeUser()}>Sign out (Local)</button>
        <button onClick={signOutRedirect}>Sign out (Cognito)</button>
      </div>

      {/* You can render routes here with conditional rendering or react-router <Routes> */}
      {/* Example: */}
      {role === "admin" ? <AdminDashboard /> : <MemberDashboard />}

      {/* For additional routes, you can use React Router <Routes> as in your old app */}
    </div>
  );
}
