import React from "react";
import { Helmet } from "react-helmet";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line,
  PieChart, Pie, Cell,
  RadialBarChart, RadialBar
} from "recharts";
import "./Dashboard1.css";

const pendingTasks = [
  { name: "High", value: 30 },
  { name: "Medium", value: 45 },
  { name: "Low", value: 25 }
];

const completedTasks = [
  { category: "Design", completed: 40 },
  { category: "Development", completed: 70 },
  { category: "Testing", completed: 50 }
];

const performance = [
  { month: "Jan", score: 60 },
  { month: "Feb", score: 70 },
  { month: "Mar", score: 85 },
  { month: "Apr", score: 78 }
];

const notifications = [
  { name: "Mentions", value: 15 },
  { name: "Reminders", value: 25 },
  { name: "Deadlines", value: 10 },
  { name: "Updates", value: 20 }
];

const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

export default function Dashboard1() {
  return (
    <div className="dashboard">
      <Helmet>
        <title>LetsPlanIt | Dashboard</title>
      </Helmet>

      <h1>📊 Dashboard Overview</h1>

      <div className="chart-grid">
        {/* Pending Work Pie */}
        <div className="chart-card">
          <h3>Pending Work Tracker</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={pendingTasks}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label
            >
              {pendingTasks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Performance Line */}
        <div className="chart-card">
          <h3>Performance Trends</h3>
          <LineChart width={300} height={250} data={performance}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Completed Work Bar */}
        <div className="chart-card">
          <h3>Completed Work Overview</h3>
          <BarChart width={300} height={250} data={completedTasks}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Notifications Donut */}
        <div className="chart-card">
          <h3>Notifications Summary</h3>
          <RadialBarChart
            width={300}
            height={250}
            cx="50%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            barSize={15}
            data={notifications}
          >
            <RadialBar background clockWise dataKey="value" />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
            <Tooltip />
          </RadialBarChart>
        </div>
      </div>
    </div>
  );
}
