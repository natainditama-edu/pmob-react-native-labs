import { themed, type IconProps } from "@tamagui/helpers-icon";
import { memo, type JSX } from "react";
import { Path, Svg, type SvgProps } from "react-native-svg";

export const ChevronDown: (props: IconProps) => JSX.Element = themed(
  memo(function ChevronDown(props: IconProps) {
    const {
      color = "black",
      size = 24,
      ...otherProps
    } = props as SvgProps & {
      color?: string;
      size?: number;
    };

    return (
      <Svg
        width={size}
        height={size}
        stroke={color}
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...otherProps}
      >
        <Path d="m6 9 6 6 6-6" stroke={color} />
      </Svg>
    );
  })
);
