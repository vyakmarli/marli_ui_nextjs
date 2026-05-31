import type { Size } from ".";


type Family = "body" | "heading";
type Weight = 700 | 600 | 500 | 400;
type Typography = {
  fontFamily: string;
  fontWeight: Weight;
  fontSize: string;
};
type Record_Typography = Record<Size, Typography>;


const family = {
  body:    "--font_body",
  heading: "--font_heading"
} satisfies Record<Family, string>;



const heading = {
  default: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 500,
    fontSize:   "2.5rem"
  },
  xs: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 500,
    fontSize:   "2.75rem"
  },
  sm: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 600,
    fontSize:   "3rem"
  },
  md: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 600,
    fontSize:   "3.5rem"
  },
  lg: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 700,
    fontSize:   "3.75rem"
  },
  xl: {
    fontFamily: `var(${family.heading})`,
    fontWeight: 700,
    fontSize:   "4rem"
  }
} satisfies Record_Typography;

const body = {
  default: {
    fontFamily: `var(${family.body})`,
    fontWeight: 400,
    fontSize:   "0.75rem"
  },
  xs: {
    fontFamily: `var(${family.body})`,
    fontWeight: 400,
    fontSize:   "1rem"
  },
  sm: {
    fontFamily: `var(${family.body})`,
    fontWeight: 600,
    fontSize:   "1.25rem"
  },
  md: {
    fontFamily: `var(${family.body})`,
    fontWeight: 600,
    fontSize:   "1.75rem"
  },
  lg: {
    fontFamily: `var(${family.body})`,
    fontWeight: 700,
    fontSize:   "2rem"
  },
  xl: {
    fontFamily: `var(${family.body})`,
    fontWeight: 700,
    fontSize:   "2.25rem"
  }
} satisfies Record_Typography;


const typography = {
  heading: {...heading},
  body:    {...body}
} satisfies Record<Family, Record_Typography>;


export { typography };
