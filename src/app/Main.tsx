import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { Grid } from './components/Grid';
import { HeadingOne } from './HeadingOne';
import { theme } from './theme';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <TextTitle text="Oh Heyyyyy" />
        <HeadingOne tag="h1" text="My Heading" />
        <Grid container>
          <Grid item>
            asdjlkfajklsf
        </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Main;