import { NeonButton } from "@/components/NeonButton";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation } from "wouter";

export function AccountShortcut() {
  const { user } = useAuth();
  const [location, setLocation] = useLocation();
  const target = user ? "/account" : "/auth";
  const label = user ? "Account" : "Sign in";

  return (
    <NeonButton
      variant="ghost"
      size="sm"
      onClick={() => {
        if (location !== target) setLocation(target);
      }}
      className="fixed right-4 top-[calc(env(safe-area-inset-top)+0.75rem)] md:top-[calc(env(safe-area-inset-top)+1.5rem)] z-30"
    >
      {label}
    </NeonButton>
  );
}
