// src/modules/auth/components/AuthButton.jsx


import { ShieldCheck } from "lucide-react";

export default function AuthButton({
  children,
  onClick,
}) {
  return (
    <button
          type="submit"
  onClick={onClick}
  style={{
    position: "relative",
    zIndex: 9999,
  }}
      className="
        group
        relative

        flex
        h-[68px]
        w-full

        items-center
        justify-center
        gap-3

        overflow-hidden
        rounded-[24px]

        border
        border-cyan-300/10

        bg-gradient-to-r
        from-[#06263d]
        via-[#0b5ea8]
        to-[#1ea7ff]

        text-[16px]
        font-semibold
        tracking-[-0.02em]

        text-white

        shadow-[0_20px_60px_rgba(6,182,212,0.22)]

        transition-all
        duration-300

        hover:scale-[1.01]
        hover:shadow-[0_30px_80px_rgba(6,182,212,0.32)]

        active:scale-[0.995]
        cursor-pointer
      "
    >
      {/* TOP LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[1px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[1px]
          rounded-[23px]
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-3
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/10
            shadow-[0_0_12px_rgba(255,255,255,0.12)]
            backdrop-blur-xl
          "
        >
          <ShieldCheck size={15} />
        </div>

        <span>{children}</span>
      </div>
    </button>
  );
}