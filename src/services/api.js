// services/api.js
const API_BASE = "http://localhost:3001";

export const fetchProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
};

export const fetchLeaderboard = async () => {
  const res = await fetch(`${API_BASE}/leaderboard`);
  if (!res.ok) throw new Error("Failed to fetch leaderboard");
  const data = await res.json();
  // sort by score descending
  return data.sort((a, b) => b.score - a.score);
};

export const fetchUser = async () => {
  const res = await fetch(`${API_BASE}/user`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

export const submitNote = async (noteData) => {
  const res = await fetch(`${API_BASE}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(noteData),
  });
  if (!res.ok) throw new Error("Failed to submit note");
  return res.json();
};
