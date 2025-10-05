import { useEffect, useState } from "react";
import api from "../utils/api";

function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me").then((res) => setUser(res.data)).catch(() => setUser(null));
  }, []);

  return <div className="p-5">{user ? `Welcome ${user.name}` : "Loading user info..."}</div>;
}

export default UserDashboard;
