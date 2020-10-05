/* @jsx jsx */  import { jsx } from '@emotion/core'

import React, { FC, Fragment } from "react";
import { Text } from '../text/Text';
import { IText } from '../text/Text.interface';
import { ILabel } from './Label.interface';

export interface ITraits {
  traits: ILabel
}

export const Label: FC<ITraits> = ({ traits }) => {

  const { isRequired, main, secondary, styles } = traits

  if (!main && !secondary) return <Fragment></Fragment>

  let traitsForMain: IText | undefined;
  if (!!main) {
    traitsForMain = {
      text: main.text,
      variant: "labelOne"
    }
  }

  let traitsForSecondary: IText | undefined;
  if (!!secondary) {
    traitsForSecondary = {
      text: secondary.text,
      variant: "labelTwo"
    }
  }

  const classes = {
    ...!!styles && styles
  }

  return (
    <label css={classes}
           htmlFor={traits.for}>
      {
        !!traitsForMain &&
        <Fragment>
          <Text traits={traitsForMain} />
          {
            !!isRequired &&
            <abbr title="required" aria-label="required">*</abbr>
          }
        </Fragment>
      }
      {
        !!traitsForSecondary &&
        <Fragment>
          <Text traits={traitsForSecondary} />
          {
            !!isRequired && !traitsForMain &&
            <abbr title="required" aria-label="required">*</abbr>
          }
        </Fragment>
      }
    </label>
  )
}