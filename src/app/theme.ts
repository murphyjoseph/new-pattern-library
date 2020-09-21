import { up, down } from './helpers/breakpoints';

export interface ITheme {
  palette: any;
  typography: any;
  breakpoints: Record<string, any>;
}

export const theme: ITheme = {
  palette: {
    secondary: {
      main: '#F58974',
    },
  },
  typography: {
    htmlFontSize: 16,
    h1: {
      fontFamily: 'sans-serif',
      fontWeight: 600,
      fontSize: '5rem',
    }
  },
  breakpoints: {
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    values: {
      breakpoint1: '350px',
      breakpoint2: '560px',
      breakpoint3: '850px',
      breakpoint4: '1000px',
      breakpoint5: '1100px',
      breakpoint6: '1250px',
      breakpoint7: '1400px',
      breakpoint8: '1750px',
      breakpoint9: '2000px',
      breakpoint10: '2200px',
      main: '1000px'
    },
    up,
    down,
  }
};