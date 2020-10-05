/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React from 'react';
import './App.css';
import { Text } from './app/base-aphrodite/text/text';
import { TextTitleSecondary } from './app/branded-aphrodite/typography/text-title-secondary';
import { FieldText } from './app/branded-aphrodite/fields/field-text';
import { ButtonPrimary } from './app/branded-aphrodite/buttons/button-primary';
import { cssTextAlignment } from './app/styles-aphrodite/alignment';
import { cssDisplay } from './app/styles-aphrodite/display';
import { ContainerPrimary } from './app/branded-aphrodite/containers/container-primary';

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
