import React, { ReactNode } from "react";

export enum roundedEnum {
  sm = "2px",
  md = "4px",
  lg = "6px",
  full = "2000px",
}
export enum colorSet {
  deep = "#3b1907",
  sub = "#554707",
  main = "#7f9ae5",
  main2 = "#f8cced",
  light = "#f8efed",
}
interface Props {
  children: ReactNode;
  paddingX?: string;
  paddingY?: string;
  bgColor?: string;
  bgOpacity?: string;
  rounded?: roundedEnum;
}

const Button: React.FC<Props> = ({
  children,
  paddingX,
  paddingY,
  bgColor,
  bgOpacity,
  rounded,
}) => {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundColor: bgColor,
        opacity: bgOpacity,
        paddingInline: paddingX,
        paddingBlock: paddingY,
        borderRadius: rounded,
      }}
    >
      {children}
    </div>
  );
};

export default Button;
