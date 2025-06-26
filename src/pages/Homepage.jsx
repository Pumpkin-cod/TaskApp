import { useEffect, useState } from "react";
// Import specific functions for Amplify v6
import { getCurrentUser, fetchAuthSession, signOut as amplifySignOut, signInWithRedirect } from '@aws-amplify/auth';
import { Hub } from '@aws-amplify/core';
import AdminDashboard from "./AdminDashboard";
import MemberDashboard from "./MemberDashboard";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);

        // Get user groups from auth session
        const session = await fetchAuthSession();
        const groups = session.tokens?.accessToken?.payload["cognito:groups"] || [];
        setRole(groups.includes("admin") ? "admin" : "member");
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();

    // Listen for auth state changes
    const unsubscribe = Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          loadUser();
          break;
        case 'signedOut':
          setUser(null);
          setRole("");
          break;
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithRedirect();
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await amplifySignOut();
      setUser(null);
      setRole("");
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={handleSignIn}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign in with AWS
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4">
        <p>Welcome, {user.signInDetails?.loginId || user.username}</p>
        <button
          onClick={handleSignOut}
          className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign out
        </button>
      </div>

      {role === "admin" ? <AdminDashboard /> : <MemberDashboard />}
    </div>
  );
}