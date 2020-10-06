/* @jsx jsx */  import { jsx } from '@emotion/core'
// import { css } from 'aphrodite/no-important';

import React, { FC, useState } from 'react';
import './App.css';
import { TextTitleSecondary } from './branded-emotion/typography/TextTitleSecondary';
import { ButtonPrimary } from './branded-aphrodite/buttons/ButtonPrimary';
import { ButtonDynamic } from './branded-emotion/buttons/ButtonDynamic';
import { ContainerPrimary } from './branded-emotion/containers/ContainerPrimary';
import { themeCss } from './themeCss';
import { TextTitlePrimary } from './branded-emotion/typography/TextTitlePrimary';

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
    </div>
  );
}