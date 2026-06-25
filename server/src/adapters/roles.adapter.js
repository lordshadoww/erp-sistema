//server\src\adapters\roles.adapter.js

import { getSheetsClient } from "./googleSheetsAdapter.js";

const SH_CORE_ID = process.env.SH_CORE_ID;
const SH_ROLES_TAB = process.env.SH_ROLES_TAB;

export async function getAllRolesRows() {
  const sheets = await getSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SH_CORE_ID,
    range: `${SH_ROLES_TAB}!A:Z`,
  });

  const rows = response.data.values || [];
  const headers = rows[0];
  const data = rows.slice(1);

  return data.map((row) => {
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i] || null;
    });
    return obj;
  });
}

export async function getRoleById(id) {
  const roles = await getAllRolesRows();
  return roles.find(r => r.ID_ROL === id);
}