const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export async function login(username, password) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "login",
      username,
      password,
    }),
  });

  return response.json();
}