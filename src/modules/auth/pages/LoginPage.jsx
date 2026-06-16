
// src/modules/auth/pages/LoginPage.jsx

import AuthBranding from "../components/AuthBranding";
import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <div className="flex w-full">

      {/* LEFT - BRANDING */}
      <div className="hidden xl:flex flex-1 justify-center pt-20">
        <div className="w-full max-w-xl">
          <AuthBranding />
        </div>
      </div>

      {/* RIGHT - LOGIN */}
      <div className="flex flex-1 items-center justify-start border-l border-white/10 px-12">
        <div className="w-full max-w-lg">
          <AuthCard>
            <AuthForm />
          </AuthCard>
        </div>
      </div>

    </div>
  );
}