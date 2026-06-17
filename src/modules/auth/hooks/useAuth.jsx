//src\modules\auth\hooks\useAuth.jsx
import { useAuth as useAuthProvider }
  from "@/app/providers/AuthProvider";

export default function useAuth() {
  return useAuthProvider();
}