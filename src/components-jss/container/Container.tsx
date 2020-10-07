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

  let cssPadding: any = {padding: undefined};
  let cssMargin: any = {margin: undefined};

  if (!!padding)
  cssPadding = createUseStyles({
    padding: {
      ...stylePadding(padding)
    }
  })

  if (!!margin)
  cssMargin = createUseStyles({
    margin: {
      ...styleMargin(margin)
    }
  })

  const classes = clsx(
    !!cssMargin.margin && cssMargin().margin,
    !!cssPadding.padding && cssPadding().padding,
    cssDisplay().block,
    !!colorBackground && cssColorBackground()[colorBackground],
    !!styles && styles
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}