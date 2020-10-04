import React, { FC } from "react";
import { Text } from '../text/text';
import { IText } from '../text/text.interface';
import { ILabel } from './label.interface';
import { css } from "aphrodite/no-important";

export interface ITraits {
  traits: ILabel
}

export const Label: FC<ITraits> = ({ traits }) => {

  const { isRequired, main, secondary, ...remainder } = traits

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

  const classes = [
    !!remainder.styles && remainder.styles
  ]

  return (
    <label className={css(classes)}
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