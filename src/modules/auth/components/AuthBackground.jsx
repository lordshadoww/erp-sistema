// modules/auth/components/AuthBackground.jsx

export default function AuthBackground() {

  return (

    <div
      className="
        absolute
        inset-0

        overflow-hidden
      "
    >

      {/* BASE GRADIENT */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,#12356a_0%,#08101f_40%,#030712_100%)]
        "
      />

      {/* RIGHT MAIN GLOW */}
      <div
        className="
          absolute

          right-[-220px]
          top-1/2

          h-[700px]
          w-[700px]

          -translate-y-1/2

          rounded-full

          bg-cyan-500/10

          blur-[140px]
        "
      />

      {/* RIGHT RING 1 */}
      <div
        className="
          absolute

          right-[-250px]
          top-1/2

          h-[900px]
          w-[900px]

          -translate-y-1/2

          rounded-full

          border
          border-cyan-400/10
        "
      />

      {/* RIGHT RING 2 */}
      <div
        className="
          absolute

          right-[-170px]
          top-1/2

          h-[720px]
          w-[720px]

          -translate-y-1/2

          rounded-full

          border
          border-cyan-400/5
        "
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute

          left-[-180px]
          bottom-[-180px]

          h-[540px]
          w-[540px]

          rounded-full

          bg-blue-700/20

          blur-[140px]
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
          absolute

          left-1/2
          top-[-250px]

          h-[500px]
          w-[900px]

          -translate-x-1/2

          rounded-full

          bg-cyan-500/[0.04]

          blur-[160px]
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.03]

          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]
        "
      />

    </div>

  );

}