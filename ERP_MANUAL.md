## 🚀 ROADMAP REAL DEL ERP

El desarrollo se divide en fases obligatorias.  
No se salta fases.

---

## 🟢 FASE 1 — INFRAESTRUCTURA ERP (BASE UI + CORE)

Objetivo: el sistema debe “vivir” y navegar.

### 🔐 Auth Core
- Login
- AuthProvider
- PrivateRoute
- UserContext (base)

---

### 🧭 Layout System
- Sidebar
- Topbar
- Breadcrumbs
- Layout Admin / Auth

---

### 📊 UI BASE
- Dashboard
- Cards base
- Tables base
- Forms base
- Empty states
- Loaders

---

### 🧠 RESULTADO FASE 1
El ERP ya:
- navega
- tiene login
- tiene layout
- tiene estructura visual funcional

❌ aún NO hay datos reales
❌ aún NO hay backend conectado

---

## 🔵 FASE 2 — SEGURIDAD Y MODELO DE USUARIO

Objetivo: controlar acceso y permisos.

### 👤 Módulos
- Usuarios
- Roles
- Permisos

---

### 🔐 Security Layer
- canView
- canEdit
- canCreate
- canDelete
- scopeData

---

### 🧠 RESULTADO FASE 2
El sistema ya:
- controla acceso real
- tiene roles funcionales
- protege rutas y módulos

---

## 🟣 CONEXIÓN BACKEND (DESPUÉS DE FASE 2)

Solo después de seguridad estable se conecta backend:

Flujo obligatorio:

React
↓
API Service (axios)
↓
Cloudflare Worker
↓
Google Sheets (Apps Script)

---

## ⚠️ REGLA CRÍTICA

Nunca conectar backend antes de:

- Auth funcionando
- Roles definidos
- PrivateRoute activo

---

## 🧠 PRINCIPIO DEL SISTEMA

Primero se construye el sistema visual + seguridad  
Después se conecta la data


## 🧠 FUENTE ÚNICA DE DISEÑO (UI SOURCE OF TRUTH)
El diseño del ERP NO es generado libremente.

Toda UI debe seguir estrictamente el diseño proporcionado por el usuario en forma de imagen, mockup o referencia visual.

Prohibido:
- reinterpretar el diseño
- crear layouts alternativos por “mejor práctica”
- rediseñar componentes sin referencia visual

Obligatorio:
- replicar exactamente la estructura visual del diseño dado
- adaptar solo lógica funcional, no estética base

## 🧠 DISEÑO BLOQUEADO POR REFERENCIA
Si existe una imagen de referencia UI:

→ esa imagen es la única fuente válida de diseño
→ todo componente debe ajustarse a ella
→ no se permite “mejorar diseño” sin solicitud explícita

## 🧠 FINAL
La arquitectura es flexible internamente, pero el diseño visual es fijo cuando se provee una referencia.