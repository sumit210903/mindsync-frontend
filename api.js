// frontend/api.js
const BASE_URL = "https://mindsync-backend.onrender.com"; // update if local: http://localhost:5000

// Get dashboard data
export async function fetchDashboardData(token) {
  const res = await fetch(`${BASE_URL}/api/dashboard`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}
