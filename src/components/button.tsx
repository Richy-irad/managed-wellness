import { ReactNode, MouseEventHandler } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";

type ButtonProps = {
  children?: ReactNode;
  variant?: "solid" | "ghost";
  size?: "sm" | "md";
  onDark?: boolean;
  href?: string;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children = "learn more",
  variant = "ghost",
  size = "md",
  onDark = false,
  href,
  icon,
  disabled = false,
  onClick,
}: ButtonProps) {
  const chipSize = size === "sm" ? "w-[26px] h-[26px]" : "w-[34px] h-[34px]";
  const iconSize = size === "sm" ? 11 : 14;

  // Solid buttons on a dark (forest) surface need to invert so they don't
  // blend into the background — the chip then flips too, for contrast against the fill.
  const solidOnDark = variant === "solid" && onDark;
  const chipColors = solidOnDark
    ? "bg-primary text-surface"
    : "bg-sage-green text-primary";

  const chip = (
    <span
      className={`inline-flex items-center justify-center ${chipSize} rounded-full ${chipColors} shrink-0 transition-transform duration-250 group-hover:rotate-45`}
    >
      {icon ?? <ArrowUpRightIcon size={iconSize} />}
    </span>
  );

  const solidPadding = size === "sm" ? "py-2.5 pl-5 pr-2" : "py-4 pl-6 pr-2";
  const solidColors = solidOnDark
    ? "bg-sage-green text-primary hover:bg-sage-dark"
    : "bg-primary text-surface hover:bg-dark";

  const baseClasses =
    variant === "solid"
      ? `group inline-flex items-center gap-2.5 rounded-full ${solidColors} font-semibold ${
          size === "sm" ? "text-sm" : "text-base"
        } ${solidPadding} transition-colors duration-250`
      : `group inline-flex items-center gap-2.5 font-semibold ${
          size === "sm" ? "text-sm" : "text-base"
        } ${onDark ? "text-white" : "text-dark"} transition-[gap] duration-250 hover:gap-4`;

  const disabledClasses = disabled ? "opacity-45 pointer-events-none" : "";
  const classes = `${baseClasses} ${disabledClasses}`;

  const content = (
    <>
      <span>{children}</span>
      {chip}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
