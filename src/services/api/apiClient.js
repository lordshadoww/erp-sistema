//src\services\api\apiClient.js
import { getToken } from "@/modules/auth/utils/authStorage";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8787";

export async function apiClient(
  endpoint,
  options = {}
) {
  const token = getToken();

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(
    `${API_URL}${endpoint}`,
    config
  );

  let data;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
      `Error ${response.status}`
    );
  }

  return data;
}