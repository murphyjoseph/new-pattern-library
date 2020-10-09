/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, { FC, useState } from 'react';
import './App.css';

// VANILLA CSS
// import './styles-css/display.css';
// import './styles-css/alignment.css';
// import './styles-css/color.css';
// import './styles-css/margin.css';
// import './styles-css/padding.css';
// import { TextTitleSecondary } from './branded-css/typography/TextTitleSecondary';
// import { ButtonPrimary } from './branded-css/buttons/ButtonPrimary';
// import { ButtonDynamic } from './branded-css/buttons/ButtonDynamic';
// import { TextTitlePrimary } from './branded-css/typography/TextTitlePrimary';
// import { ContainerPrimary } from './branded-css/containers/ContainerPrimary';

// JSS
// import { TextTitleSecondary } from './branded-jss/typography/TextTitleSecondary';
// import { ButtonPrimary } from './branded-jss/buttons/ButtonPrimary';
// import { ButtonDynamic } from './branded-jss/buttons/ButtonDynamic';
// import { TextTitlePrimary } from './branded-jss/typography/TextTitlePrimary';
// import { ContainerPrimary } from './branded-jss/containers/ContainerPrimary';

// APHRODITE
import { TextTitleSecondary } from './branded-aphrodite/typography/TextTitleSecondary';
import { ButtonPrimary } from './branded-aphrodite/buttons/ButtonPrimary';
import { ButtonDynamic } from './branded-aphrodite/buttons/ButtonDynamic';
import { TextTitlePrimary } from './branded-aphrodite/typography/TextTitlePrimary';
import { ContainerPrimary } from './branded-aphrodite/containers/ContainerPrimary';

// EMOTION
// import { TextTitleSecondary } from './branded-emotion/typography/TextTitleSecondary';
// import { ButtonPrimary } from './branded-emotion/buttons/ButtonPrimary';
// import { ButtonDynamic } from './branded-emotion/buttons/ButtonDynamic';
// import { TextTitlePrimary } from './branded-emotion/typography/TextTitlePrimary';
// import { ContainerPrimary } from './branded-emotion/containers/ContainerPrimary';

// TYPESTYLE
// import { TextTitleSecondary } from './branded-typestyle/typography/TextTitleSecondary';
// import { ButtonPrimary } from './branded-typestyle/buttons/ButtonPrimary';
// import { ButtonDynamic } from './branded-typestyle/buttons/ButtonDynamic';
// import { TextTitlePrimary } from './branded-typestyle/typography/TextTitlePrimary';
// import { ContainerPrimary } from './branded-typestyle/containers/ContainerPrimary';

import { themeCss } from './themeCss';

export const TestingGround: FC = () => {

  const [textColor, setTextColor] = useState(themeCss.color.primary)
  const [bgColor, setBgColor] = useState(themeCss.color.primary)

  const clickme = () => {
    console.log("click me now")
    setTextColor("secondary")
  }

  const changeContainer = () => {
    setBgColor("secondary")
  }

  return (
    <div>
        <ContainerPrimary background={bgColor}>
          <div css={{background: themeCss.color.secondary}}> hey </div>
          <ButtonPrimary text="Click Me" onClick={clickme} />
          {/* <Text traits={({ text: "JSS Text", variant: "headingOne", colorBackground: "primary", tag: "h3" })} /> */}
          <ButtonDynamic text="container" onClick={changeContainer} variant="primary" />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
          <TextTitlePrimary text="I am some primary text" color={textColor} />
        </ContainerPrimary>
    </div>
  );
}