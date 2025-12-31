import { GlassCard } from "@/components/GlassCard";
import { NeonButton } from "@/components/NeonButton";
import { RequireAuth } from "@/components/RequireAuth";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function AccountPage() {
  const { user, signOut, updateDisplayName } = useAuth();
  const [, setLocation] = useLocation();
  const [displayName, setDisplayName] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const currentName =
      user?.user_metadata?.display_name ||
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      "";
    setDisplayName(currentName);
  }, [user]);

  const handleSignOut = async () => {
    await signOut();
    setLocation("/");
  };

  const handleSaveName = async () => {
    if (!displayName.trim()) {
      setStatus("Please enter a name to save.");
      return;
    }
    try {
      setSaving(true);
      setStatus(null);
      await updateDisplayName(displayName);
      setStatus("Name saved.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not update name.";
      setStatus(message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <RequireAuth>
      <div className="min-h-screen w-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden bg-background">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
          <div className="absolute top-[-18%] left-[-12%] w-[55%] h-[55%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-18%] right-[-16%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[120px]" />
          <div className="absolute top-[35%] right-[25%] w-[35%] h-[35%] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-lg mx-auto">
          <GlassCard className="space-y-6 p-6">
            <div className="space-y-2">
              <p className="text-[11px] font-lato uppercase tracking-[0.2em] text-foreground/50">
                Account
              </p>
              <h1 className="text-3xl font-playfair font-bold text-foreground">
                {user?.email ?? "Signed in"}
              </h1>
              <p className="text-sm text-foreground/70 font-lato">
                Manage your profile, friends, and saved categories here soon.
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-lato uppercase tracking-[0.2em] text-foreground/50">
                Display Name
              </label>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  placeholder="Add your name"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm font-lato outline-none transition-colors focus:border-foreground"
                />
                <NeonButton fullWidth onClick={handleSaveName} disabled={saving}>
                  {saving ? "Saving..." : "Save name"}
                </NeonButton>
                {status && (
                  <p className="text-xs text-foreground/70 font-lato text-center">{status}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <NeonButton fullWidth onClick={() => setLocation("/")}>
                Back to game
              </NeonButton>
              <NeonButton variant="ghost" fullWidth onClick={handleSignOut}>
                Sign out
              </NeonButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </RequireAuth>
  );
}
