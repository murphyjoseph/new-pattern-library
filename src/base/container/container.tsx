import React, { FC } from "react";

import { IContainer } from './container.interface';
// import { stylePadding, stylerAttributeAndClassSetup } from "../../shared/services/styler";
import { stylePadding } from '../../shared/styles-js/config/utilities/padding';
import { StyleSheet, css } from 'aphrodite/no-important';
import { styleMargin } from "../../shared/styles-js/config/utilities/margin";

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  const styles = StyleSheet.create({
    classes: {
      ...!!traits.padding && stylePadding(traits.padding),
      ...!!traits.margin && styleMargin(traits.margin),
      display: "block"
    }
  })

  return (
    <div className={css(styles.classes)}>
      {children}
    </div>
  )
}