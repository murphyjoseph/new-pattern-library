import React from 'react';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { Grid } from './components/Grid';

const Main = () => {
  return (
    <div className="main">
      <TextTitle text="Oh Heyyyyy" />
      <Grid container>
        <Grid item>
          asdjlkfajklsf
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;