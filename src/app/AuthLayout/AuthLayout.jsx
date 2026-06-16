//src\app\AuthLayout\AuthLayout.jsx

console.log("AuthLayout renderizado");

// src/modules/auth/components/AuthLayout.jsx

import AuthBackground from "../../modules/auth/components/AuthBackground";

export default function AuthLayout({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#030712]
      "
    >

      {/* BACKGROUND */}
      <AuthBackground />

      {/* MAIN SHELL */}
      <div
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-screen
          w-full

          items-center
          justify-center

          px-4
          py-4

          md:px-6
          lg:px-8
          xl:px-10
        "
      >

        <div
          className="
            relative

            grid
            w-full

            overflow-hidden

            rounded-[28px]
            md:rounded-[34px]
            xl:rounded-[42px]

            border
            border-white/[0.08]

            bg-white/[0.03]

            shadow-[0_30px_100px_rgba(0,0,0,0.45)]

            backdrop-blur-[24px]

            min-h-[calc(100vh-32px)]

            lg:min-h-[85vh]

            xl:min-h-[85vh]

            xl:max-w-[1250px]

            grid-cols-1
            xl:grid-cols-[1.2fr_0.8fr]
          "
        >

          {/* PREMIUM INNER LIGHT */}
          <div
            className="
              pointer-events-none

              absolute
              inset-0

              rounded-[inherit]

              bg-gradient-to-b
              from-white/[0.04]
              via-transparent
              to-transparent
            "
          />

          {children}

        </div>

      </div>

    </div>
    
  );
}