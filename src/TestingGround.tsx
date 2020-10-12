/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, { FC, useState } from 'react';
import './App.css';

// TYPESTYLE
import { TextTitleSecondary } from './branded/typography/TextTitleSecondary';
import { ButtonPrimary } from './branded/buttons/ButtonPrimary';
import { ButtonDynamic } from './branded/buttons/ButtonDynamic';
import { TextTitlePrimary } from './branded/typography/TextTitlePrimary';
import { ContainerPrimary } from './branded/containers/ContainerPrimary';

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