import { NavLink } from 'react-router-dom';
import { Home, MessageSquare, Calendar, Bell } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-2xl flex flex-col p-6 fixed">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-10">SmartPlanner</h1>
      <NavLink to="/" className="sidebar-link"><Home className="icon" /> Dashboard</NavLink>
      <NavLink to="/chat" className="sidebar-link"><MessageSquare className="icon" /> Chat</NavLink>
      <NavLink to="/meetings" className="sidebar-link"><Calendar className="icon" /> Meetings</NavLink>
      <NavLink to="/notifications" className="sidebar-link"><Bell className="icon" /> Notifications</NavLink>
    </div>
  );
}
