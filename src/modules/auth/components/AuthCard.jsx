// src/modules/auth/components/AuthCard.jsx

export default function AuthCard({
  children,
}) {

  return (

    <div
      className="
        relative

        w-full

        max-w-full
        sm:max-w-[560px]
        xl:max-w-[600px]

        overflow-hidden

        rounded-[28px]
        md:rounded-[34px]
        xl:rounded-[40px]

        border
        border-white/10

        bg-white/[0.04]

        p-6
        sm:p-8
        lg:p-9
        xl:p-10

        shadow-[0_20px_80px_rgba(0,0,0,0.35)]

        backdrop-blur-[28px]
      "
    >

      {/* TOP LIGHT */}
      <div
        className="
          absolute

          left-0
          top-0

          h-[1px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
        "
      />

      {/* SOFT AMBIENT GLOW */}
      <div
        className="
          pointer-events-none

          absolute
          right-[-80px]
          top-[-80px]

          h-[220px]
          w-[220px]

          rounded-full

          bg-cyan-400/[0.04]

          blur-[90px]
        "
      />

      {/* SIDE GLOW */}
      <div
        className="
          pointer-events-none

          absolute

          right-[-120px]
          top-[120px]

          h-[260px]
          w-[260px]

          rounded-full

          bg-cyan-400/[0.03]

          blur-[120px]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>

  );

}