/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React from 'react';
import './App.css';
import { Text } from './components-emotion/text/Text';
import { TextTitleSecondary } from './branded-emotion/typography/TextTitleSecondary';
import { FieldText } from './branded-emotion/fields/FieldText';
import { ButtonPrimary } from './branded-emotion/buttons/ButtonPrimary';
import { ContainerPrimary } from './branded-emotion/containers/ContainerPrimary';
import { themeCss } from './themeCss';
import { ThemeProvider } from './ThemeProvider';

function App() {

  const clickme = () => {
    console.log("click me now")
  }

  return (
    <ThemeProvider theme={themeCss}>
      <div className="App">
        <header>

      </header>
      <main>
        <ContainerPrimary>
        <div css={{background: themeCss.color.secondary}}> hey </div>
        <ButtonPrimary text="Click Me" onClick={clickme} />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        <TextTitleSecondary text="secondary title bruh" />
        </ContainerPrimary>
        {/* <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} />
        <Text traits={({variant: "headingOne", text: "yo", tag: "h1"})} />
        <Text traits={({variant: "headingTwo", text: "yo", tag: "h2"})} />
        <Text traits={({variant: "headingThree", text: "yo", tag: "h3"})} />
        <Text traits={({variant: "titleOne", text: "yo"})} /> */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
