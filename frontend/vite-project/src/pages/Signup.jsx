import { useState } from "react";
import api from "../utils/api.js";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", userType: "user" });

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/signup", form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="p-5">
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, userType: e.target.value })}>
        <option value="user">User</option>
        <option value="host">Host</option>
      </select>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
