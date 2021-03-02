const white = "#ffffff";
const black = "#000000";
const brandBlue = "#0082ff";

const gray = {
  50: "#f6f7f9",
  100: "#e1e6ec",
  200: "#cbd4de",
  300: "#afbdcc",
  400: "#94a7ba",
  500: "#7890a8",
  600: "#5c7995",
  700: "#3b5261",
  800: "#2f3f4b",
  900: "#26323c",
};

const blue = {
  50: "#f6fbfd",
  100: "#e6f7fd",
  200: "#bfe9fb",
  300: "#95d3fa",
  400: "#5caafa",
  500: "#2970eb",
  600: "#1c58f2",
  700: "#1d46da",
  800: "#1734a6",
  900: "#132b7f",
};

const navy = {
  50: "#f4fafc",
  100: "#e4f7fb",
  200: "#bfebf6",
  300: "#92d9f4",
  400: "#51b7f0",
  500: "#3a90ea",
  600: "#286cda",
  700: "#1d55b6",
  800: "#194185",
  900: "#0c2c5b",
};

const green = {
  50: "#ecf8f7",
  100: "#d2f7ef",
  200: "#a3f3d9",
  300: "#69e9bf",
  400: "#63dc96",
  500: "#59c76a",
  600: "#4dae4f",
  700: "#398647",
  800: "#2e6f3e",
  900: "#255b34",
};

const yellow = {
  50: "#f9f5e5",
  100: "#faefbe",
  200: "#f5e77c",
  300: "#f0d439",
  400: "#f6be14",
  500: "#e0970d",
  600: "#cf7406",
  700: "#ae5706",
  800: "#8e430f",
  900: "#74370f",
};

const red = {
  50: "#fdf9f8",
  100: "#fcedf3",
  200: "#f7cee6",
  300: "#f2a3d0",
  400: "#ee67ad",
  500: "#ed4d86",
  600: "#ed4b60",
  700: "#e14538",
  800: "#b5373c",
  900: "#912a30",
};

const social = {
  yelp: "#c41200",
  github: "#cccccc",
  behance: "#1769ff",
  twitter: "#00aced",
  dribbble: "#ea4c89",
  facebook: "#3b5998",
  linkedin: "#007bb6",
};

const colors = {
  white,
  black,
  brandBlue,
  primary: {
    ...blue,
    DEFAULT: blue["500"],
  },
  secondary: {
    ...navy,
    DEFAULT: navy["900"],
  },
  gray: {
    ...gray,
    light: gray["50"],
    medium: gray["200"],
    dark: gray["600"],
  },
  red: {
    ...red,
    DEFAULT: red["700"],
  },
  green: {
    ...green,
    DEFAULT: green["700"],
  },
  yellow: {
    ...yellow,
    DEFAULT: yellow["400"],
  },
  social,
};

export default colors;
