"use client";
import React from "react";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 px-6 py-3 text-sm cursor-pointer";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-pink-dark active:scale-95",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
  ghost: "text-primary hover:underline",
};

export function Button({
  variant = "primary",
  children,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
