import { Button as TamaguiButtonFrame, ButtonProps as TamaguiButtonFrameProps } from "@tamagui/button";
import React from "react";

export function Button({ ...props }: React.ComponentPropsWithoutRef<typeof TamaguiButtonFrame>) {
  return <TamaguiButtonFrame {...props} />;
}

export type ButtonProps = TamaguiButtonFrameProps;