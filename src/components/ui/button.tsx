import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,border-color,opacity,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default: "bg-terracotta text-paper hover:bg-terracotta-deep",
        invert: "bg-paper text-ink hover:bg-cream",
        outline:
          "border border-stone bg-transparent text-ink hover:border-ink/30 hover:bg-paper",
        ghost: "bg-transparent text-ink hover:bg-ink/5",
        light:
          "border border-paper/30 bg-transparent text-paper hover:bg-paper/10",
      },
      size: {
        default: "h-11 rounded-md px-5",
        sm: "h-9 rounded-sm px-3.5 text-xs",
        lg: "h-12 rounded-md px-7",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
