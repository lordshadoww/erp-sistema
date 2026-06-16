// src/modules/auth/components/AuthInput.jsx


import {
  User,
  Lock,
} from "lucide-react";

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {

  const Icon =
    type === "password"
      ? Lock
      : User;

  return (

    <div>

      {/* LABEL */}
      <label
        className="
          mb-3
          block

          text-[13px]
          font-medium

          tracking-[-0.01em]

          text-slate-300
        "
      >
        {label}
      </label>

      {/* INPUT WRAPPER */}
      <div
        className="
          group
          relative
        "
      >

        {/* ICON */}
        <div
          className="
            pointer-events-none

            absolute
            left-4
            top-1/2

            z-10

            -translate-y-1/2

            text-slate-400
            group-focus-within:text-cyan-500

            transition-colors
            duration-300

            group-focus-within:text-cyan-300
          "
        >
          <Icon size={16} />
        </div>

        {/* INPUT */}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="
  h-[60px]
  w-full

  rounded-[18px]

  border
  border-slate-200/90

  bg-white

  pl-12
  pr-4

  text-[14px]
  font-medium

  text-slate-800

  placeholder:text-slate-400

  outline-none

  transition-all
  duration-300

  shadow-[0_10px_30px_rgba(255,255,255,0.08)]

  hover:border-cyan-300

  focus:border-cyan-400
  focus:ring-4
  focus:ring-cyan-400/10
  focus:shadow-[0_0_30px_rgba(34,211,238,0.15)]
"
        />

        {/* TOP LIGHT */}
        <div
          className="
            pointer-events-none

            absolute
            left-0
            top-0

            h-[1px]
            w-full

            rounded-full

            bg-gradient-to-r
            from-transparent
            via-white/[0.12]
            to-transparent

            opacity-50
          "
        />

      </div>

    </div>

  );

}