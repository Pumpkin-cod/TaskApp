import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import AdminDashboard from "./AdminDashboard";
import MemberDashboard from "./MemberDashboard";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);

        const groups = currentUser.signInUserSession.accessToken.payload["cognito:groups"] || [];
        setRole(groups.includes("admin") ? "admin" : "member");
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const signIn = () => {
    Auth.federatedSignIn(); // redirect to Cognito Hosted UI
  };

  const signOut = () => {
    Auth.signOut();
  };

  if (loading) return <div className="text-center mt-8">Loading...</div>;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={signIn}
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
        <p>Welcome, {user.attributes.email}</p>
        <button
          onClick={signOut}
          className="mr-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign out
        </button>
      </div>

      {role === "admin" ? <AdminDashboard /> : <MemberDashboard />}
    </div>
  );
}
