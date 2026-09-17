import { useEffect, useState, type ComponentType } from "react";
import { useRegister } from "@/lib/register-store";

/**
 * Defer Radix Dialog + LeadForm until the visitor opens đăng ký —
 * keeps marketing shell free of the dialog chunk on first paint.
 */
export function LazyRegisterDialog() {
  const open = useRegister((s) => s.open);
  const [Comp, setComp] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (!open || Comp) return;
    let cancelled = false;
    void import("@/components/register-dialog").then((m) => {
      if (!cancelled) setComp(() => m.RegisterDialog);
    });
    return () => {
      cancelled = true;
    };
  }, [open, Comp]);

  if (!Comp) return null;
  return <Comp />;
}
