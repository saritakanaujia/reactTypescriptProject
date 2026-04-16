import React from "react";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import CopyToClipboard from "./CopyToClipboard";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const loadUser = async () => {
    dispatch(fetchUserStart());
    try {
      // mock API
      const data = {
        id: "1",
        name: "Sarita",
        email: "sarita@example.com",
      };

      dispatch(fetchUserSuccess(data));
    } catch {
      dispatch(fetchUserFailure("failed to load user"));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to the protected area!</p>
      {isLoading && <div>Loading....</div>}
      {user && <p>{user.name}</p>}
      <button onClick={loadUser}>Load User</button>
      <button onClick={handleLogout}>Logout</button>
      <CopyToClipboard />
    </div>
  );
};

export default Dashboard;
