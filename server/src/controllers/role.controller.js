import {
  getAllRoles,
  getRole,
  getActiveRoles
} from "../services/role.service.js";

export async function getRolesController(req, res) {
  try {
    const roles = await getAllRoles();
    res.json({ success: true, data: roles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getRoleByIdController(req, res) {
  try {
    const role = await getRole(req.params.id);

    if (!role) {
      return res.status(404).json({
        success: false,
        message: "Rol no encontrado"
      });
    }

    res.json({ success: true, data: role });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function getActiveRolesController(req, res) {
  try {
    const roles = await getActiveRoles();
    res.json({ success: true, data: roles });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}