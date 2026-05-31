type Color_Name = "gray" | "accent" | "error" | "warning" | "success" | "info";
type Color_Light = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Record_Color = Record<Color_Light, string>;


const gray = {
  "1": "#FFFFFF",
  "2": "#DFDFDF",
  "3": "#BFBFBF",
  "4": "#9F9F9F",
  "5": "#808080",
  "6": "#606060",
  "7": "#404040",
  "8": "#202020",
  "9": "#000000",
} satisfies Record_Color;

const accent = {
  "1": "#E4D1FF",
  "2": "#CBA6FF",
  "3": "#AD73FF",
  "4": "#8B38FF",
  "5": "#6A00FF",
  "6": "#5500CC",
  "7": "#400099",
  "8": "#2B0066",
  "9": "#150033",
} satisfies Record_Color;

const error = {
  "1": "#FFD9D1",
  "2": "#FFB5A6",
  "3": "#FF8A73",
  "4": "#FF5938",
  "5": "#FF2B00",
  "6": "#CC2200",
  "7": "#991A00",
  "8": "#661100",
  "9": "#330900",
} satisfies Record_Color;

const warning = {
  "1": "#FFF7D1",
  "2": "#FFF0A6",
  "3": "#FFE873",
  "4": "#FFDE38",
  "5": "#FFD400",
  "6": "#CCAA00",
  "7": "#998000",
  "8": "#665500",
  "9": "#332B00",
} satisfies Record_Color;

const success = {
  "1": "#E0FFD1",
  "2": "#C4FFA6",
  "3": "#A2FF73",
  "4": "#7AFF38",
  "5": "#55FF00",
  "6": "#44CC00",
  "7": "#339900",
  "8": "#226600",
  "9": "#113300",
} satisfies Record_Color;

const info = {
  "1": "#D1E8FF",
  "2": "#A6D3FF",
  "3": "#73B9FF",
  "4": "#389BFF",
  "5": "#0080FF",
  "6": "#0066CC",
  "7": "#004D99",
  "8": "#003366",
  "9": "#001A33",
} satisfies Record_Color;


const color = {
  gray: {...gray},
  accent: { ...accent},
  error: { ...error},
  warning: { ...warning},
  success: { ...success},
  info: {...info}
} satisfies Record<Color_Name, Record_Color>;


export { color };
