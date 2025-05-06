"use client";
import React from "react";
import "./Input.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onFocus?: () => void;
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  onFocus,
}: InputProps) {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        className={`input-field ${error ? "error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        onFocus={onFocus}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
