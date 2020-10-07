import React, { FC } from "react";
import { Text } from '../text/Text';
import { IText } from '../text/Text.interface';
import { ILabel } from './Label.interface';
import clsx from 'clsx';

export interface ITraits {
  traits: ILabel
}

export const Label: FC<ITraits> = ({ traits }) => {

  const { isRequired, main, secondary, styles } = traits

  if (!main && !secondary) return <></>

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

  const classes = clsx(
    !!styles && styles
  )

  return (
    <label className={classes}
           htmlFor={traits.for}>
      {
        !!traitsForMain &&
        <>
          <Text traits={traitsForMain} />
          {
            !!isRequired &&
            <abbr title="required" aria-label="required">*</abbr>
          }
        </>
      }
      {
        !!traitsForSecondary &&
        <>
          <Text traits={traitsForSecondary} />
          {
            !!isRequired && !traitsForMain &&
            <abbr title="required" aria-label="required">*</abbr>
          }
        </>
      }
    </label>
  )
}