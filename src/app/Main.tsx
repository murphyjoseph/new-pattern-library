import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { PaneOne } from './branded/PaneOne';
import { HeadingOne } from './HeadingOne';
import { theme } from './theme';
import { HeadingOneStyled } from './HeadingOneStyled';
import { HeadingOneEmotion } from './branded/HeadingOneEmotion';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <section>
          <TextTitle text="Oh Heyyyyy" />
          <HeadingOne tag="h1" text="My Heading" />
          <HeadingOneEmotion tag="h1" text="Emotion" />
          <HeadingOneEmotion tag="h1" text="Emotion Using an Obj" jssObj/>
          <HeadingOneStyled tag="h1" text="My Styled Heading" />
          <HeadingOneStyled isMaterial tag="h1" text="My Styled Material Heading" />
        </section>
        <section style={{ margin: 'auto' }}>
          <PaneOne
            bar="hi"
            content={(
              <div>
                <p>this is my lazy attempt at content</p>
                <p>as long as it looks okay <span role="img" aria-label="ayyy">👍</span></p>
              </div>)}
          />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Main;