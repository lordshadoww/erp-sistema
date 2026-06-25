//server\src\adapters\googleSheetsAdapter.js
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";
import { nowUTC } from "../utils/date.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(
    __dirname,
    "../../credentials/google-service-account.json"
  ),
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

let sheetsClient = null;

export async function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const client = await auth.getClient();
  console.log("2. client OK");
  sheetsClient = google.sheets({
    version: "v4",
    auth: client,
  });

  console.log("Sheets client cached");
  return sheetsClient;
}


let usersCache = null;
let lastFetch = 0;

const CACHE_TTL = 30 * 1000; // 30 segundos (ajustable)

export async function getUsers() {
  try {
    const now = Date.now();

    // 🧠 CACHE HIT
    if (usersCache && (now - lastFetch) < CACHE_TTL) {
      console.log("USERS CACHE HIT");
      return usersCache;
    }

    console.log("1. creando client...");

    const sheets = await getSheetsClient();

    console.log("3. sheets init OK");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SH_CORE_ID,
      range: `${process.env.SH_USERS_TAB}!A:Z`,
    });

    const rows = response.data.values || [];

    console.log("ROWS TOTAL:", rows.length);

    if (rows.length === 0) {
      usersCache = [];
      return [];
    }

    const [headers, ...data] = rows;

    const users = data.map((row) => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = row[i] || "";
      });
      return obj;
    });

    usersCache = users;
    lastFetch = now;

    console.log("USUARIOS PARSEADOS:", users.length);

    return users;
  } catch (err) {
    console.error("❌ ERROR DETALLADO:");
    console.error(err);
    throw err;
  }
}


let userIndexCache = null;

function buildUserIndex(users) {
  const map = new Map();

  for (const user of users) {
    if (user.USERNAME) {
      map.set(user.USERNAME.trim().toLowerCase(), user);
    }
  }

  return map;
}

export async function findUserByUsername(username) {
  console.log("Buscando usuario:", username);

  const users = await getUsers();

  // 🧠 construir index solo si no existe o cambió cache
  if (!userIndexCache) {
    userIndexCache = buildUserIndex(users);
  }

  const key = username.trim().toLowerCase();

  const user = userIndexCache.get(key);

  console.log("Usuario encontrado:", !!user);

  return user || null;
}

export async function updateUserByUsername(username, updates) {
  const sheets = await getSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SH_CORE_ID,
    range: `${process.env.SH_USERS_TAB}!A:Z`,
  });

  const rows = response.data.values || [];
const headers = rows[0];

const usernameColumn = headers.findIndex(
  (header) => header === "USERNAME"
);

if (usernameColumn === -1) {
  throw new Error(
    "Columna USERNAME no encontrada"
  );
}

const rowIndex = rows.findIndex(
  (row, i) =>
    i > 0 &&
    row[usernameColumn]
      ?.trim()
      .toLowerCase() ===
    username.trim().toLowerCase()
);

  if (rowIndex === -1) return false;

  const row = rows[rowIndex];

  const updatedRow = headers.map((header, i) => {
    return updates[header] ?? row[i] ?? "";
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SH_CORE_ID,
    range: `${process.env.SH_USERS_TAB}!A${rowIndex + 1}:Z${rowIndex + 1}`,
    valueInputOption: "RAW",
    requestBody: {
      values: [updatedRow],
    },
  });

  // 🔥 INVALIDAR CACHE
usersCache = null;
userIndexCache = null;
lastFetch = 0;

  return true;
}

export async function incrementLoginAttempts(username, currentAttempts) {
  return updateUserByUsername(username, {
    INTENTOS_LOGIN: Number(currentAttempts || 0) + 1,
  });
}

export async function resetLoginAttempts(username) {
  return updateUserByUsername(username, {
    INTENTOS_LOGIN: 0,
  });
}

export async function blockUser(username, minutes = 15) {
  const date = new Date();
  date.setMinutes(date.getMinutes() + minutes);

  return updateUserByUsername(username, {
    BLOQUEADO_HASTA: date.toISOString(),
  });
}

export async function updateLastLogin(username) {
  return updateUserByUsername(username, {
    ULTIMO_LOGIN: nowUTC(),
    
  });
}





export async function getEmailByPersona(idPersona) {
  const sheets = await getSheetsClient();
 

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SH_PERSONAL_ID,
    range: `${process.env.SH_PERSONAL_TAB}!A:Z`,
  });

  console.log("PERSONAL SHEET LOADED");

  const rows = response.data.values || [];
  const headers = rows[0];
  const data = rows.slice(1);

  const personas = data.map((row) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] || "";
    });
    return obj;
  });

  const persona = personas.find((p) =>
    String(p.ID_PERSONA).trim().toLowerCase() ===
    String(idPersona).trim().toLowerCase()
  );

  console.log("PERSONAS:", personas);
console.log("BUSCANDO ID:", idPersona);
  return persona?.EMAIL?.trim() || null;
}