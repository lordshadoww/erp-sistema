//modules\auth\components\AuthFeature.jsx

import { motion } from "framer-motion";

export default function AuthFeature({
  icon,
  title,
  description,
  color = "cyan",
}) {

  return (

    <motion.div

      whileHover={{
        y: -2,
      }}

      transition={{
        duration: 0.2,
      }}

      className="
        group
        relative

        flex
        items-start
        gap-5

        overflow-hidden
        rounded-[28px]

        border
        border-white/[0.08]

        bg-white/[0.035]

        p-6
        xl:p-7

        transition-all
        duration-300

        hover:border-cyan-400/15
        hover:bg-white/[0.045]

        backdrop-blur-xl
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
          via-cyan-400/25
          to-transparent

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      {/* ICON */}
      {/* ICON */}
<div
  className={`
    relative

    flex
    h-[58px]
    w-[58px]

    shrink-0

    items-center
    justify-center

    rounded-[20px]

    border

    transition-all
    duration-300
    backdrop-blur-xl

    ${
      color === "blue"
        ? `
          border-blue-400/15
          bg-blue-500/[0.10]
          text-blue-300
          group-hover:border-blue-400/30
          group-hover:bg-blue-500/[0.14]
        `
        : color === "indigo"
        ? `
          border-indigo-400/15
          bg-indigo-500/[0.10]
          text-indigo-300
          group-hover:border-indigo-400/30
          group-hover:bg-indigo-500/[0.14]
        `
        : color === "green"
        ? `
          border-emerald-400/15
          bg-emerald-500/[0.10]
          text-emerald-300
          group-hover:border-emerald-400/30
          group-hover:bg-emerald-500/[0.14]
        `
        : `
          border-cyan-400/15
          bg-cyan-500/[0.10]
          text-cyan-300
          group-hover:border-cyan-400/30
          group-hover:bg-cyan-500/[0.14]
        `
    }
  `}
>
  {/* GLOW */}
  <div
    className="
      absolute
      inset-0

      rounded-[20px]

      bg-white/[0.03]

      blur-xl
    "
  />

  <div className="relative z-10">
    {icon}
  </div>
</div>

      {/* CONTENT */}
      <div className="min-w-0">

        <h3
          className="
            flex
            items-center
            gap-2

            text-[17px]
            font-semibold

            tracking-[-0.02em]

            text-white
          "
        >
          <span
            className={`
              h-[8px]
              w-[8px]
              rounded-full
              shrink-0

              ${
                color === "blue"
                  ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                  : color === "green"
                  ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  : color === "indigo"
                  ? "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"
                  : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              }
            `}
          />

          {title}
        </h3>

        <p
          className="
            mt-2

            max-w-[360px]

            text-[14px]
            leading-[0.92]

            text-slate-400
          "
        >
          {description}
        </p>

      </div>

    </motion.div>

  );

}