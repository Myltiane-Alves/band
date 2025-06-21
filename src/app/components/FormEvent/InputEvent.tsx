"use client"
import React from 'react';
import styles from './styles.module.scss'

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'date' | 'datetime-local';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function InputEvent({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        className={`input-field ${error ? 'error' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
      
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
