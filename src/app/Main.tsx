import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { css } from 'aphrodite';
import './Main.css';
import { TextTitle } from './components/TextTitle';
import { HeadingOne } from './branded/HeadingOne';
import { theme } from './theme';
import { HeadingOneStyled } from './branded/HeadingOneStyled';
import { HeadingOneEmotion } from './branded/HeadingOneEmotion';
import { PrimaryButton } from './branded/PrimaryButton';
import { HeadingOneAphrodite } from './branded/HeadingOneAphrodite';
import { PrimaryOutlineButton } from './branded/PrimaryOutlineButton';
import * as ut from './helpers';
import { TextAction } from '../base/text/text-action';
import { HawtButton } from './components/murph/HawtButton';
import { Container } from '../base/container/container';

const Main = () => {

  const clickme = () => {
    console.log("you have clicked me.")
  }

  return (
    <ThemeProvider theme={theme}>
      <Container traits={({padding: {direction: "all", size: "size12"}})}>
      <div className="main">
        <section>
          <TextTitle text="Oh Heyyyyy" />
          <HeadingOne tag="h1" text="Styled with React-JSS" />
          <HeadingOneEmotion tag="h1" text="Styled with Emotion" />
          <HeadingOneEmotion tag="h1" text="Styled Emotion Using an Obj" jssObj />
          <HeadingOneStyled tag="h1" text="My Styled Heading" />
          <HeadingOneStyled isMaterial tag="h1" text="My Styled Material Heading" />
          <HeadingOneAphrodite tag="h1" text="Styled with Aphrodite" />
          <TextAction traits={({text: "click me", onClick: clickme, variant: "pr", size: "small" })} />
          <HawtButton text="Hawt Button" onClick={clickme} />
        </section>
        <section style={{ margin: 'auto' }}>
          <PrimaryButton label="click me" size="small"/>
          <PrimaryOutlineButton label="or click me" size="medium"/>
          <div className={css(ut.utAlign.alignTextA.alignTextRight)}>
            <p>Just testing out nesting</p>
          </div>
        </section>
      </div>
      </Container>
    </ThemeProvider>
  );
};

export default Main;