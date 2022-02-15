import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import { createVuetify } from "vuetify";

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#41b883",
          background: "#ffffff",
          error: "#d63031",
          danger: "#d63031",
          info: "#0984e3",
          secondary: "#fdcb6e",
          success: "#00cec9",
          surface: "#ffffff",
          warning: "#2d3436",
          jedlikRed: "#e42028",
          jedlikBlue: "#2e57a1",
        },
        dark: false,
        variables: {},
      },
      dark: {
        colors: {
          primary: "#BB87F7",
          background: "#121212",
          error: "#CE6779",
          danger: "#121212",
          info: "#2596EF",
          secondary: "#19D9C5",
          success: "#4EAF58",
          surface: "#212121",
          warning: "#FA8D28",
          jedlikRed: "#e42028",
          jedlikBlue: "#2e57a1",
        },
        dark: true,
        variables: {},
      },
    },
  },
  display: {
    mobileBreakpoint: "md",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1264,
      xl: 1400,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// export default vuetify;
