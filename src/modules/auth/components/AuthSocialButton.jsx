// src/modules/auth/components/AuthSocialButton.jsx

import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";

export default function AuthSocialButton() {
  const items = [
  {
    label: "Google",
    icon: <FcGoogle size={18} />,
    key: "google",
    onClick: () => {
      console.log("GOOGLE CLICK");
      alert("Botón Google funcionando");
      //loginWithGoogle();
    },
  },
  {
    label: "Microsoft",
    icon: <BsMicrosoft size={16} />,
    key: "microsoft",
    onClick: () => {
      console.log("MICROSOFT CLICK");
      alert("Botón Microsoft funcionando");
      //loginWithMicrosoft();
    },
  },
];

  return (
    <div className="flex flex-col gap-4">

      {/* SEPARADOR SUPERIOR */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-white/[0.08]" />
        <p className="text-xs text-white/40 whitespace-nowrap">
          Continuar con
        </p>
        <div className="h-px flex-1 bg-white/[0.08]" />
      </div>

      {/* BOTONES */}
      <div className="flex gap-3">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={item.onClick}
            className="
              flex-1
              flex items-center justify-center gap-2
              h-11
              rounded-xl
              border border-white/[0.08]
              bg-white/[0.03]
              backdrop-blur-xl
              text-sm text-white/80
              transition-all duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              active:scale-[0.98]
            "
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}