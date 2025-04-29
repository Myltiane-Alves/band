"use client";
import React from "react";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "small" | "medium" | "large" | "full-icon";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  return (
    <button
      className={`button ${variant} ${size} ${fullWidth ? "full-width" : ""} ${
        loading ? "loading" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? <div className="loading-spinner" /> : children}
    </button>
  );
}
