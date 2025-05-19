// theme.ts
import { createTheme } from '@mui/material/styles';
import { naviBlue, twilightPurple, sunsetOrange, moonlightGrey, celestialBlue, naviRed, naviGreen } from './colors';
import { typography } from './typography';
import '@fontsource/rubik'

const theme = createTheme({
  palette: {
    text: {
      primary: moonlightGrey[900],   // Main text
      secondary: moonlightGrey[700], // Subtext
      disabled: moonlightGrey[500],  // Disabled text
    },
    background: {
      default: 'white',              // App background
      paper: moonlightGrey[50],      // Paper or card background
      disabled: moonlightGrey[100]
    },
    divider: moonlightGrey[200],
    outline: moonlightGrey[300],
    primary: {
      ...naviBlue,
      main: naviBlue[400],
    },
    secondary: {
      ...twilightPurple,
      ...sunsetOrange,
      main: twilightPurple[400],
      secondary: sunsetOrange[400],
    },
    common: {
      'white': 'white',
    },
  },

  // -------------------------------
  // BREAKPOINTS (Responsive Layout)
  // -------------------------------
  breakpoints: {
    values: {
      xs: 0,      // Mobile
      sm: 768,    // Tablet
      md: 1281,   // Small desktop
      lg: 1441,   // Medium desktop
      xl: 1921,   // Large screens
    },
  },
  // -------------------------------
  // TYPOGRAPHY
  // -------------------------------
  typography: typography,


  // -------------------------------
  // CUSTOM COLOR PALETTES
  // For extended use in your app outside of MUI's palette
  // -------------------------------
  custom: {
    moonlightGrey,
    sunsetOrange,
    naviBlue,
    celestialBlue,
    twilightPurple,
    naviRed,
    naviGreen,
  },
});

export default theme;
