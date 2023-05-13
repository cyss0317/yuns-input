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
declare enum InputType {
    TEXT = "text",
    PASSWORD = "password"
}
declare enum FontSize {
    "small" = "12px",
    "medium" = "16px",
    "large" = "20px"
}
export declare function Input(props: InputProps): React.JSX.Element;
export {};
