import { Input as TamaguiInput, InputProps as TamaguiInputProps } from "@tamagui/input";
import React from "react";

export function Input({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiInput>) {
  return <TamaguiInput {...props} />;
}

export type InputProps = TamaguiInputProps;
