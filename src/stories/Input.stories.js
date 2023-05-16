import React from "react";
import { Input } from "../components/Requirements";

export default {
  title: "Test",
  component: Input,
  tags: ["autodocs"],
  // argTypes: {
  //   color: { color: "" },
  // },
};

export const Primary = {
  args: {
    name: "name",
    displayName: "Name",
    value: "Test",
    type: "text",
    // changeValue: ,
    color: "#222222",
    errorMessage: ["Something went wrong", "hello", "Password doesn't match and this is long"],
  },
};

export const Large = {
  args: {
    password: "name",
    displayName: "Password",
    type: "password",
    value: "1234",
    fontSize: "2rem",
  },
};

export const Vertical = {
  args: {
    password: "name",
    displayName: "Password",
    type: "password",
    value: "1234",
    fontSize: "2rem",
    vertical: true,
    errorMessage: "tester"
  },
};
