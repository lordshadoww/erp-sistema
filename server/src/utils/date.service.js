const TIMEZONE = "America/Lima";

/**
 * Fecha actual en UTC (para guardar en DB / Sheets / JWT)
 */
export function nowUTC() {
  return new Date().toISOString();
}

/**
 * Fecha actual en hora Perú (solo visual/logs)
 */
export function nowPeru() {
  return new Date().toLocaleString("es-PE", {
    timeZone: TIMEZONE,
  });
}

/**
 * Convierte cualquier fecha (UTC o ISO) a formato Perú legible
 */
export function formatPeru(date) {
 return new Date(date).toLocaleString("es-PE", {
   timeZone: "America/Lima", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }); }

/**
 * Devuelve Date object (útil para comparaciones)
 */
export function toDate(date) {
  return new Date(date);
}

/**
 * Verifica si una fecha ya venció (bloqueo, expiración, etc.)
 */
export function isExpired(date) {
  if (!date) return false;

  return new Date(date) <= new Date();
}