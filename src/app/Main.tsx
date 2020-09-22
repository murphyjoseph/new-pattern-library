import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { Grid } from './components/Grid';
import { HeadingOne } from './HeadingOne';
import { theme } from './theme';
import { HeadingOneStyled } from './HeadingOneStyled';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <TextTitle text="Oh Heyyyyy" />
        <HeadingOne tag="h1" text="My Heading" />
        <HeadingOneStyled tag="h1" text="My Styled Heading" />
        <HeadingOneStyled isMaterial tag="h1" text="My Styled Material Heading" />
      </div>
    </ThemeProvider>
  );
};

export default Main;