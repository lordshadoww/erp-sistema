import { getAllRolesRows, getRoleById } from "../adapters/roles.adapter.js";

let rolesCache = null;
let lastFetch = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 min

export async function getAllRoles() {
  const now = Date.now();

  if (rolesCache && (now - lastFetch) < CACHE_TTL) {
    return rolesCache;
  }

  const roles = await getAllRolesRows();

  rolesCache = roles;
  lastFetch = now;

  return roles;
}

export async function getRole(id) {
  return await getRoleById(id);
}

export async function getActiveRoles() {
  const roles = await getAllRoles();
  return roles.filter(r => r.ESTADO === "ACTIVO");
}