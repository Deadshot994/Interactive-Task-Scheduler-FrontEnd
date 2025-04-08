import { NavLink } from "react-router-dom";
import { Home, MessageSquare, Calendar, Bell } from "lucide-react";
import "./Sidebar.css"; // Optional if you want to separate styles

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">SmartPlanner</h1>
      <NavLink to="/" className={({ isActive }) => `sidebar-link ${isActive ? "active-link" : ""}`}>
        <Home className="icon" /> Dashboard
      </NavLink>
      <NavLink to="/chat" className={({ isActive }) => `sidebar-link ${isActive ? "active-link" : ""}`}>
        <MessageSquare className="icon" /> Chat
      </NavLink>
      <NavLink to="/meetings" className={({ isActive }) => `sidebar-link ${isActive ? "active-link" : ""}`}>
        <Calendar className="icon" /> Meetings
      </NavLink>
      <NavLink to="/notifications" className={({ isActive }) => `sidebar-link ${isActive ? "active-link" : ""}`}>
        <Bell className="icon" /> Notifications
      </NavLink>
    </div>
  );
}
