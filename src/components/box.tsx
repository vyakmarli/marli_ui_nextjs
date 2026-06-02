import {
  type ElementType,
  type ComponentPropsWithRef,
} from "react";

export type Box_Props<
  T extends ElementType,
  OwnProps = {}
> = OwnProps & {
  as?: T;
} & Omit<ComponentPropsWithRef<T>, keyof OwnProps | "as">;

export function Box<T extends ElementType = "div">(
  props: Box_Props<T>
) {
  const { as, ...rest } = props;

  const Component = (as ?? "div") as ElementType;

  return <Component {...rest} />;
}
