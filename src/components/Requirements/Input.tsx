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
  errorMessage?: string | [string];
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
  "large" = "20px",
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
    args,
  } = props;
  const [focus, setFocus] = React.useState<boolean>(false);
  const [errorWidth, setErrorWidth] = React.useState(0);

  const labelRef = React.useCallback(
    (node) => {
      if (node !== null) {
        setErrorWidth(node.getBoundingClientRect().width);
      }
    },
    [displayName]
  );

  const inputStyle = {
    color,
    border: `1px solid ${color}40`,
    boxShadow: focus && `0 0 0 2px ${color}`,
    transform: focus && "scale(1.05)",
    fontSize: fontSize,
  };

  const labelStyle = {
    color: color,
    fontSize: fontSize,
  };

  const renderErrors = () =>
    Array.isArray(errorMessage) ? (
      <div
        className="error-message-column"
        style={{ marginLeft: `${errorWidth + 16}px` }}
      >
        {errorMessage.map((error, idx) => (
          <div key={idx} className={`error-message`}>
            {error}
          </div>
        ))}
      </div>
    ) : (
      <div
        className={errorMessage && "error-message"}
        style={{ marginLeft: `${errorWidth + 16}px` }}
      >
        {errorMessage}
      </div>
    );

  return (
    <div className="input-wrapper">
      <label
        className="input-label"
        ref={labelRef}
        style={labelStyle}
        htmlFor={name}
      >
        {displayName}
      </label>
      <input
        className={`input ${errorMessage.length ? "invalid" : "valid"}`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => {
          onChange((prev) => ({ ...prev, [name]: e.target }));
          resetErrorMessage();
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={inputStyle}
        {...args}
      />
      {renderErrors()}
    </div>
  );
}
