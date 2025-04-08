import React, { useState } from "react";
import { Helmet } from "react-helmet"; // 👈 Import Helmet
import "./Meetings.css";

export default function Meetings() {
  const [meetingType, setMeetingType] = useState("private");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Meeting Scheduled ✅");
  };

  return (
    <div className="meetings-container">
      <Helmet>
        <title>LetsPlanIt | Meetings</title>
      </Helmet>

      <h2>📅 Schedule a Meeting</h2>

      <form className="meeting-form" onSubmit={handleSubmit}>
        <label>Meeting Title</label>
        <input type="text" placeholder="Team Sync-Up / 1:1" required />

        <label>Date & Time</label>
        <input type="datetime-local" required />

        <label>Meeting Type</label>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              value="private"
              checked={meetingType === "private"}
              onChange={() => setMeetingType("private")}
            />
            Private
          </label>
          <label>
            <input
              type="radio"
              value="group"
              checked={meetingType === "group"}
              onChange={() => setMeetingType("group")}
            />
            Group
          </label>
        </div>

        <label>Room Selection</label>
        <select required>
          <option value="">Choose a Room</option>
          <option>Room 101</option>
          <option>Room 204</option>
          <option>Conference Hall A</option>
        </select>

        <label>Tag Users (for notification)</label>
        <input
          type="text"
          placeholder="@john @sarah @team"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button type="submit">📌 Schedule Meeting</button>
      </form>
    </div>
  );
}
