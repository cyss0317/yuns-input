import React from "react";
import "./Input.css";

interface InputProps {
  name: string;
  displayName: string;
  fontSize?: FontSize;
  color?: string;
  type?: InputType;
  value?: string;
  onChange: (e: any) => void;
  errorMessage?: string;
  resetErrorMessage: () => void;
  args?: any;
}

enum InputType {
  TEXT = "text",
  PASSWORD = "password",
}

enum FontSize {
  "small" = "12px",
  "medium" = "16px",
  "large" = "20px"
}

export function Input(props: InputProps) {
  const {
    name,
    displayName,
    type = InputType.TEXT,
    value,
    onChange,
    color = "#222222",
    errorMessage = "",
    resetErrorMessage,
    fontSize = FontSize["medium"],
    args
  } = props;
  const [focus, setFocus] = React.useState<boolean>(false);

  const inputStyle = {
    color,
    border: `1px solid ${color}40`,
    boxShadow: focus && `0 0 0 2px ${color}`,
    transform: focus && 'scale(1.05)',
    fontSize: fontSize
  }

  return (
    <div className="input-wrapper">
      <label className="input-label" style={{ color, fontSize: fontSize }} htmlFor={name}>
        {displayName}
      </label>
      <input
        className={`input ${errorMessage.length ? "invalid" : "valid"}`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(prev => ({...prev, [name]: e.target}));
          resetErrorMessage();
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={inputStyle}
        {...args}
      />
      <div className={errorMessage && "error-message"} >{errorMessage}</div>
    </div>
  );
}
