import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { HeadingOne } from './branded/HeadingOne';
import { theme } from './theme';
import { HeadingOneStyled } from './branded/HeadingOneStyled';
import { HeadingOneEmotion } from './branded/HeadingOneEmotion';
import { PrimaryButton } from './branded/PrimaryButton';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <section>
          <TextTitle text="Oh Heyyyyy" />
          <HeadingOne tag="h1" text="My Heading" />
          <HeadingOneEmotion tag="h1" text="Emotion" />
          <HeadingOneEmotion tag="h1" text="Emotion Using an Obj" jssObj />
          <HeadingOneStyled tag="h1" text="My Styled Heading" />
          <HeadingOneStyled isMaterial tag="h1" text="My Styled Material Heading" />
        </section>
        <section style={{ margin: 'auto' }}>
          <PrimaryButton label="click me" size="small"/>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Main;