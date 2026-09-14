import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { useRegister } from "@/lib/register-store";

export function RegisterDialog() {
  const { open, unit, close } = useRegister();

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (!v ? close() : null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/50" />
        <Dialog.Content className="register-sheet shadow-border focus:outline-none">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="kicker">Đăng ký nhận thông tin</p>
              <Dialog.Title className="mt-2 font-display text-2xl text-ink">
                The Camellia Sơn Trà
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-muted">
                Bảng giá, mặt bằng và chính sách mới nhất.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="grid size-10 place-items-center rounded-md text-ink hover:bg-ink/5"
                aria-label="Đóng"
              >
                <X className="size-4" />
              </button>
            </Dialog.Close>
          </div>
          <LeadForm defaultUnit={unit} compact />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
