import styles from './styles.module.scss';
import React from 'react';

interface TextAreaEventProps {
    label?: string;
    required?: boolean;
    value: string;
    onChange: (value: string) => void;
}

export default function TextAreaEvent({
    label,
    required = false,
    value,
    onChange,
}: TextAreaEventProps) {
    return (
        <div className={styles.textAreaGroup}>
            {label && (
                <label className="input-label">
                {label}
                {required && <span className="required">*</span>}
                </label>
            )}
            <textarea
                className={styles.textArea}
                placeholder="Digite seu texto aqui..."
                rows={5}
                cols={50}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}