import React from 'react';
import './App.css';
import { Text } from './app/base-aphrodite/text/text';
import { TextTitleSecondary } from './app/branded/typography/text-title-secondary';
import { FieldText } from './app/branded/fields/field-text';
import { ButtonPrimary } from './app/branded/buttons/button-primary';
import { css } from 'aphrodite/no-important';
import { cssTextAlignment } from './app/styles-aphrodite/alignment';
import { cssDisplay } from './app/styles-aphrodite/display';

function App() {

  const clickme = () => {
    console.log("click me now")
  }

  return (
    <div className="App">
      <header>

      </header>
      <main>
        <FieldText textMain="Label" for="2" />
        <ButtonPrimary text="Click Me" onClick={clickme} />
        {/* <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1><h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1><h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1><h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1>
        <h1> YO OY OYO YO</h1> */}
        <h1 className={css(cssTextAlignment.right)}> hey hey hey </h1>
        <h1 className={css(cssDisplay.inlineBlock)}>FUDGE</h1>
        <h1 className={css(cssDisplay.inlineBlock)}>CHOCO</h1>
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
