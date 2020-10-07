import React, { FC } from "react";

import { IContainer } from './Container.interface';
// import { stylePadding, stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { stylePadding } from '../../styles-jss/padding';
import { styleMargin } from "../../styles-jss/margin";
import { cssDisplay } from '../../styles-jss/display';
import { cssColorBackground } from "../../styles-jss/color";
import clsx from 'clsx';
import { createUseStyles } from "react-jss";

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const { padding, margin, styles, colorBackground } = traits;

  // let spacing = createUseStyles{(
  //   padding: {},
  //   margin: {}
  // )}

  // const testPadding = !!padding ? stylePadding(padding) : {paddingTop: "0"}
  // const testMargin = !!margin ? styleMargin(margin) : {paddingTop: "0"}

    const spacing = createUseStyles({
      padding: {
        paddingTop: "15px"
      },
      margin: {
        marginTop: "15px"
      }
    })



  const classes = clsx(
    spacing().padding,
    spacing().margin,
    cssDisplay().block,
    !!colorBackground && cssColorBackground()[colorBackground],
    ...!!styles && styles()
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}