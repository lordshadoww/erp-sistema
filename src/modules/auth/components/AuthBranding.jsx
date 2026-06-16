// src/modules/auth/components/AuthBranding.jsx

import {
  ShieldCheck,
  BarChart3,
  Cloud,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

import AuthFeature from "./AuthFeature";
import AuthHeroIllustration from "./AuthHeroIllustration";

export default function AuthBranding() {

  return (

    <div
      className="
        relative

        flex
    
        flex-col

        
        overflow-visible
        

        px-6
        py-8

        md:px-10
        lg:px-14
        xl:px-16
        xl:py-14

        text-white
      "
    >

      {/* AMBIENT CIRCLES */}
      <div
        className="
          pointer-events-none

          absolute
          z-0

          hidden
          xl:block

          left-[12%]
          top-[18%]

          h-[680px]
          w-[680px]

          rounded-full

          border
          border-cyan-400/10
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          z-0

          hidden
          xl:block

          left-[20%]
          top-[22%]

          h-[520px]
          w-[520px]

          rounded-full

          border
          border-cyan-400/5
        "
      />

      {/* DOT PATTERN */}
      <div
        className="
          pointer-events-none

          absolute
          z-0

          hidden
          xl:block

          top-[110px]
          right-[140px]

          h-[90px]
          w-[90px]

          opacity-30

          bg-[radial-gradient(circle,#22d3ee_1px,transparent_1px)]
          [background-size:14px_14px]
        "
      />

      {/* TITLE GLOW */}
      <div
        className="
          pointer-events-none

          absolute

          left-[120px]
          top-[180px]

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-500/[0.04]

          blur-[120px]
        "
      />

      {/* TOP BRAND */}
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative
          z-10

          flex
          items-center
          gap-4
          md:gap-5
        "
      >

        {/* LOGO */}
        <div
          className="
            relative

            flex
            h-[58px]
            w-[58px]

            md:h-[68px]
            md:w-[68px]

            xl:h-[74px]
            xl:w-[74px]

            items-center
            justify-center

            rounded-[20px]
            xl:rounded-[24px]

            border
            border-cyan-400/20

            bg-gradient-to-br
            from-cyan-500/20
            via-blue-500/10
            to-blue-900/20

            shadow-[0_0_40px_rgba(6,182,212,0.18)]

            backdrop-blur-xl
          "
        >

          <div
            className="
              absolute
              inset-0

              rounded-[inherit]

              bg-cyan-400/5
            "
          />

          <ShieldCheck
            size={28}
            className="
              text-cyan-300
              md:size-8
            "
          />

        </div>

        {/* BRAND */}
        <div>

          <h1
            className="
              text-[28px]
              md:text-[36px]
              xl:text-[42px]

              font-black

              leading-none
              tracking-[-0.05em]
            "
          >
            SISTEMA
          </h1>

          <p
            className="
              mt-1

              text-[10px]
              md:text-[12px]
              xl:text-[13px]

              font-semibold

              tracking-[0.28em]
              xl:tracking-[0.35em]

              text-cyan-300/90
            "
          >
            EMPRESARIAL
          </p>

        </div>

      </motion.div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className="
          relative
          z-10

          mt-10
          lg:mt-14
          xl:mt-16

          max-w-[760px]
        "
      >

        {/* MINI LINE */}
        <div
          className="
            mb-7
            lg:mb-8
            xl:mb-10

            h-[4px]
            w-[80px]
            xl:w-[110px]

            rounded-full

            bg-cyan-400
          "
        />

        {/* BADGE */}
        <div
          className="
            inline-flex

            items-center
            gap-3

            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            px-4
            py-2

            xl:px-5
            xl:py-3

            backdrop-blur-xl
          "
        >

          <div
            className="
              h-[8px]
              w-[8px]

              xl:h-[10px]
              xl:w-[10px]

              rounded-full

              bg-cyan-400

              shadow-[0_0_16px_rgba(34,211,238,0.8)]
            "
          />

          <span
            className="
              text-[10px]
              xl:text-[12px]

              font-bold

              tracking-[0.16em]

              text-cyan-100
            "
          >
            ENTERPRISE ERP PLATFORM
          </span>

        </div>

        {/* HERO TITLE */}
        <h2
          className="
            mt-8

            text-[52px]
            sm:text-[60px]
            lg:text-[72px]
            xl:text-[88px]

            font-black

            leading-[0.82]
            tracking-[-0.06em]
          "
        >

          Gestión
          <br />

          <span className="text-cyan-400">
            inteligente
          </span>

          <br />

          para empresas

        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            xl:mt-8

            max-w-[560px]

            text-[15px]
            lg:text-[17px]
            xl:text-[18px]

            leading-[1.9]

            text-slate-300
          "
        >
          Controla usuarios, ventas,
          inventario, almacén y reportes
          desde una sola plataforma moderna,
          segura e inteligente.
        </p>

      </motion.div>

      {/* FEATURES + HERO */}
      <div
        className="
          relative
          z-10
          
          overflow-hidden
          

          mt-10
          xl:mt-14

          flex
          flex-col
          xl:flex-row
          gap-10
        "
      >

        {/* IZQUIERDA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            grid
            gap-4
            xl:gap-5

            max-w-[540px]
            flex-shrink-0
          "
        >
          {/* features */}
          <AuthFeature
            icon={<Users size={20} />}
            title="Administración avanzada"
            description="Gestiona roles, permisos y accesos."
            color="blue"
          />

          <AuthFeature
            icon={<BarChart3 size={20} />}
            title="Métricas en tiempo real"
            description="Toma decisiones basadas en datos."
            color="green"
          />

          <AuthFeature
            icon={<ShieldCheck size={20} />}
            title="Seguridad empresarial"
            description="Protección inteligente de información."
            color="cyan"
          />

          <AuthFeature
            icon={<Cloud size={20} />}
            title="Acceso desde cualquier lugar"
            description="Tu empresa conectada siempre."
            color="indigo"
          />

        </motion.div>
        {/* DERECHA */}
        <div
            className="
              relative
              z-0
              w-full
              xl:w-[620px]
              flex-shrink-0
              pointer-events-none
            "
          >
          <AuthHeroIllustration />
        </div>

      </div>

    </div>

  );

}