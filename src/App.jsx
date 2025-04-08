import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard1";
import Chat from "./pages/Chat";
import Meetings from "./pages/Meetings";
import Notifications from "./pages/Notifications";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header /> {/* Header appears above sidebar + main content */}
      <div className="app-container">
        <aside className="sidebar">
          <h2>Work Planner</h2>
          <nav>
            <Link to="/">🏠 Dashboard</Link>
            <Link to="/chat">💬 Chat</Link>
            <Link to="/schedule">📅 Meetings</Link>
            <Link to="/notifications">🔔 Notifications</Link>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/schedule" element={<Meetings />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
