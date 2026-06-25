//server\src\middlewares\role.middleware.js
export function requireRole(...allowedRoles) {
  return (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "No autenticado",
      });
    }

    const userRole = user.role;

    if (!userRole) {
      return res.status(403).json({
        success: false,
        message: "Usuario sin rol asignado",
      });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: "Acceso denegado",
      });
    }

    next();
  };
}