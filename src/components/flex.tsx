import type { ElementType, CSSProperties } from "react";
import { Box } from ".";
import type { Box_Props } from ".";


type Flex_Own_Props = {
  inline?: boolean;
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  basis?: CSSProperties["flexBasis"];
  grow?: CSSProperties["flexGrow"];
  shrink?: CSSProperties["flexShrink"];
};

export type Flex_Props<T extends ElementType> =
  Box_Props<T, Flex_Own_Props>;


export function Flex<T extends ElementType = "div">({
  children,
  inline = false,
  direction = "row",
  wrap = "nowrap",
  basis,
  grow,
  shrink,
  style,
  ...rest
}: Flex_Props<T>) {

  const computed_style: CSSProperties = {
    display: inline ? "inline-flex" : "flex",
    flexDirection: direction,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
    ...style
  }

  return (
    <Box<T>
      style={computed_style}
      {...(rest as Box_Props<T>)}
    >
      {children}
    </Box>
  );
}
