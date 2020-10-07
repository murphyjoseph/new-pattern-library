/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, { useMemo, useState } from 'react';
import './App.css';
import { Text } from './components-emotion/text/Text';
import { TextTitleSecondary } from './branded-emotion/typography/TextTitleSecondary';
import { FieldText } from './branded-emotion/fields/FieldText';
import { ButtonPrimary } from './branded-emotion/buttons/ButtonPrimary';
import { ContainerPrimary } from './branded-emotion/containers/ContainerPrimary';
import { themeCss } from './themeCss';
import { themeObj } from './themeObj';
import { ThemeProvider } from './ThemeProvider';
import { makeCssTheme } from './makeCssTheme';
import { themeObj2 } from './themeObj2';

function App() {
  const [variant, setVariant] = useState('titleTwo');
  const [paddingSize, setPaddingSize] = useState('size5');
  const [theme, setTheme] = useState(themeObj);
  const cssTheme = useMemo(() => makeCssTheme(theme, 'xx'), [theme]);
  // const cssTheme = {};
  const clickme = () => {
    setVariant('headingOne');
    setPaddingSize('size4');
    // setTheme((currentTheme: any) =>
    //   currentTheme.name === 'one' ? themeObj2 : themeObj
    // );
  }

  return (
    // <ThemeProvider theme={themeObj}>
    <div className="App" style={cssTheme}>
      <header>

      </header>
      <main>
        <ContainerPrimary paddingSize={paddingSize}>
          <div css={{ background: themeCss.color.secondary }}> hey </div>
          <ButtonPrimary text="Click Me" onClick={clickme} />
          <TextTitleSecondary text="secondary title bruh" variant={variant} />
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
    // </ThemeProvider>
  );
}

export default App;
