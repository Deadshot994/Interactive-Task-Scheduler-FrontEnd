import React from "react";
import { Helmet } from "react-helmet"; // 👈 Import Helmet
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from "recharts";
import "./Notifications.css";

const data = [
  { name: "Meeting Reminders", value: 3 },
  { name: "Deadlines", value: 2 },
  { name: "Mentions", value: 4 },
  { name: "Project Updates", value: 1 }
];

const COLORS = ["#f87171", "#facc15", "#60a5fa", "#34d399"];

export default function Notifications() {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>LetsPlanIt | Notifications</title>
      </Helmet>

      <h2>🔔 Notifications Dashboard</h2>

      <div className="notifications-grid">
        {/* Donut Chart */}
        <div className="chart-box">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Notification List */}
        <div className="notifications-list">
          <ul>
            <li className="red">🔔 Meeting in 1 hour</li>
            <li className="yellow">📣 Project deadline approaching</li>
            <li className="blue">💬 You were mentioned by Raj</li>
            <li className="green">📢 New project update from team lead</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
