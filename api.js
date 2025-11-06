// frontend/api.js

// ✅ Backend base URL (Render backend)
const BASE_URL = "https://mindsync-backend.onrender.com";

// ✅ Get user dashboard data
export async function fetchDashboardData(token) {
  try {
    const res = await fetch(`${BASE_URL}/api/dashboard`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("❌ Dashboard API error:", err);
    return { success: false, message: err.message };
  }
}
