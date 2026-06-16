//modules\auth\components\AuthHeroIllustration.jsx

import {
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function AuthHeroIllustration() {

  return (

   <div
  className="
    pointer-events-none
    relative
    w-full
    h-[340px]
    xl:h-[380px]
    overflow-hidden
  
  "
>

      {/* FLOW LINE */}
      <div
        className="
          absolute
          left-0
          top-[28%]
          h-[2px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
          blur-sm
        "
      />

      {/* AMBIENT RINGS */}
      <div className="absolute left-[-10%] bottom-[80px] h-[300px] w-[140%] rounded-full border border-cyan-500/[0.04]" />
      <div className="absolute left-[0%] bottom-[50px] h-[240px] w-[110%] rounded-full border border-cyan-400/[0.05]" />
      <div className="absolute left-[12%] bottom-[30px] h-[180px] w-[80%] rounded-full border border-cyan-300/[0.05]" />

      {/* SHIELD */}
      {/*left-[22%] es mas a la derecha*/}
      <div className="absolute bottom-[-200px] left-[-5%] z-10">

        {/* GLOW */}
        <div className="
          absolute
          left-1/2
          top-1/2
          h-[260px]
          w-[260px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/[0.12]
          blur-[90px]
        " />

        {/* PLATFORM */}
        <div className="absolute bottom-[-10px] left-1/2 h-[150px] w-[280px] -translate-x-1/2 rounded-full border border-cyan-400/10" />
        <div className="absolute bottom-[12px] left-1/2 h-[120px] w-[220px] -translate-x-1/2 rounded-full border border-cyan-400/10" />
        <div className="absolute bottom-[30px] left-1/2 h-[90px] w-[170px] -translate-x-1/2 rounded-full border border-cyan-400/10" />

        {/* ICON */}
        <div className="
          relative
          flex
          h-[120px]
          w-[120px]
          items-center
          justify-center
          rounded-[36px]
          border border-cyan-400/20
          bg-cyan-500/[0.08]
          text-cyan-300
          shadow-[0_0_80px_rgba(34,211,238,0.25)]
          backdrop-blur-xl
        ">
          <ShieldCheck size={56} />
        </div>

      </div>

      {/* BARS */}
       {/* right-[70%] (a la izquierda) transition-all duration-700(para bajar)*/}
      <div className="
        absolute
        bottom-[-200px]
        right-[80%]
        flex
        items-end
        gap-4
        z-20
        
      ">

        {[80, 120, 160, 200, 240].map((h, i) => (
          <div
            key={i}
            className="
              relative
              w-[22px]
              rounded-t-[14px]
              border border-cyan-400/10
              bg-cyan-400/[0.05] 
              transition-all duration-700 /* animacion*/
            "
            style={{ height: `${h}px` }}
          >
            <div className="absolute top-0 left-0 h-[1px] w-full bg-cyan-300/30" />
          </div>
        ))}

      </div>

      {/* FLOAT ICON */}
      <div className="
        absolute
        right[15%]
        top-[40px]
        flex
        h-[56px]
        w-[56px]
        items-center
        justify-center
        rounded-full
        border border-cyan-400/10
        bg-cyan-500/[0.04]
        text-cyan-300/70
        backdrop-blur-xl
      ">
        <BarChart3 size={24} />
      </div>

      {/* NODE */}
      <div className="
        absolute
        left-[16%]
        top-[90px]
        h-[14px]
        w-[14px]
        rounded-full
        bg-cyan-400
        shadow-[0_0_20px_rgba(34,211,238,0.8)]
      " />

    </div>
  );

}