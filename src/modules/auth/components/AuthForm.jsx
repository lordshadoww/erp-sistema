// src/modules/auth/components/AuthForm.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, LockKeyhole } from "lucide-react";

import useAuth from "../hooks/useAuth";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";
import AuthSocialButton from "./AuthSocialButton";

console.log("AuthForm renderizado");
export default function AuthForm() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("🔥 SUBMIT FUNCIONA");

  if (usuario !== "admin" || password !== "123456") {
    alert("Usuario o contraseña incorrectos");
    return;
  }

  console.log("✅ LOGIN OK");

  login({
    username: usuario,
    role: "ADMIN",
  });

  console.log("➡️ NAVEGANDO");

  navigate("/dashboard");
};

  return (
    <div>
      {/* TOP MINI BRAND */}
      <div className="flex items-center gap-4">
        <div className="relative flex h-[54px] w-[54px] items-center justify-center rounded-[18px] border border-cyan-400/15 bg-cyan-500/[0.08] text-cyan-300 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-cyan-400/[0.06] to-transparent" />
          <Building2 size={22} className="relative z-10" />
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] text-cyan-300/80">
              ERP PLATFORM
            </p>
            <h3 className="mt-1 text-[18px] font-semibold tracking-[-0.03em] text-white">
              Sistema Empresarial
            </h3>
          </div>

          <div className="relative h-[56px] w-[56px] shrink-0">
            <div className="absolute inset-0 rounded-full bg-cyan-400/[0.03] blur-xl" />
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/20" />
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "8s" }}>
              <div className="absolute right-[-3px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
            </div>
          </div>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {/* BADGE */}
      <div className="mt-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/15 bg-cyan-500/[0.08] px-5 py-[11px] backdrop-blur-xl">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
            <LockKeyhole size={14} />
          </div>

          <span className="text-[11px] font-bold tracking-[0.22em] text-cyan-200">
            SECURE LOGIN
          </span>
        </div>
      </div>

      {/* TITLE */}
      <div className="mt-8">
        <h2 className="text-[56px] xl:text-[60px] font-black leading-[0.9] tracking-[-0.05em] text-white">
          Iniciar
          <br />
          sesión
        </h2>

        <p className="mt-6 max-w-[420px] text-[15px] leading-[1.9] text-slate-400">
          Accede a la plataforma empresarial para administrar usuarios, procesos y operaciones de forma segura.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <AuthInput
          label="Usuario"
          placeholder="Ingresa tu usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <AuthInput
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* OPTIONS */}
        <div className="mt-5 flex items-center justify-between">
          <label className="flex items-center gap-3 text-[14px] text-slate-400">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent" />
            Recordarme
          </label>

          <button type="button" className="text-[14px] font-medium text-cyan-400 hover:text-cyan-300">
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* BUTTON */}
        <div className="mt-8">
          <AuthButton type="submit">
            Ingresar al sistema
          </AuthButton>
        </div>

        {/* SOCIAL */}
        <div className="mt-6">
          <AuthSocialButton />
        </div>
      </form>

      {/* FOOTER */}
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="mt-6 text-center">
        <p className="text-[12px] tracking-[0.12em] text-slate-500">
          © 2026 Sistema Empresarial
        </p>

        <p className="mt-2 text-[11px] text-slate-600">
          Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}