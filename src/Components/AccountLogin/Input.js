import React from "react";

const Input = ({
    name,
    type,
    label,
    onChange,
    value,
    className,
    placeholder,
    autoFocus
}) => (
    <div className="form-group">
        <label htmlFor={name} className="lbl">
            <b>{label}</b>
        </label>
        <input
            autoFocus={autoFocus}
            className={className}
            name={name}
            id={name}
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    </div>
);

export default Input;
