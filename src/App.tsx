/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React from 'react';
import './App.css';
import { Text } from './components-emotion/text/text';
import { TextTitleSecondary } from './branded-emotion/typography/text-title-secondary';
import { FieldText } from './branded-emotion/fields/field-text';
import { ButtonPrimary } from './branded-emotion/buttons/button-primary';
import { ContainerPrimary } from './branded-emotion/containers/container-primary';

function App() {

  const clickme = () => {
    console.log("click me now")
  }

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <ContainerPrimary>

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
  );
}

export default App;
