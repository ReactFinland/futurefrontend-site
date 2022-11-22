import * as twindColors from "https://cdn.skypack.dev/twind@0.16.16/colors?min";
import twindTypography from "https://cdn.skypack.dev/@twind/typography@0.0.2?min";

// https://twind.dev/handbook/configuration.html#custom-fonts-and-imports
export default {
  theme: {
    extend: {
      colors: twindColors,
      fontFamily: {
        "primary": '"Eau"',
      },
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Eau",
        fontWeight: "400",
        src: 'url(/assets/fonts/eau_sans_book.ttf) format("ttf")',
      },
    ],
  },
  plugins: {
    ...twindTypography(),
  },
};
