import React from "react";
import { Input } from "./Input";

export const Test = () => {
  const [name, setName] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  return (
    <div>
      <Input
        name="test"
        displayName="Test"
        color="#161ad3"
        errorMessage={error}
        resetErrorMessage={() => setError("")}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
