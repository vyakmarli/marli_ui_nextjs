type Size = "default" | "xs" | "sm" | "md" | "lg" | "xl";
type Record_Size = Record<Size, number>;


const screen = {
  default: 360,
  xs:      576,
  sm:      768,
  md:      1024,
  lg:      1440,
  xl:      1920
} satisfies Record_Size;

const padding = {
  default: 8,
  xs:      16,
  sm:      32,
  md:      64,
  lg:      128,
  xl:      256
} satisfies Record_Size;

const main = {
  default: screen.default - padding.default*2,
  xs:      screen.xs - padding.xs*2,
  sm:      screen.sm - padding.sm*2,
  md:      screen.md - padding.md*2,
  lg:      screen.lg - padding.lg*2,
  xl:      screen.xl - padding.xl*2
} satisfies Record_Size;


const size = {
  screen: {...screen},
  padding: {...padding},
  main: {...main}
} satisfies Record<("screen" | "padding" | "main"), Record_Size>;


export type { Size };
export { size };
