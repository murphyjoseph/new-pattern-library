import React, { FC } from "react";
import { Text } from '../text/text';
import { IText } from '../text/text.interface';
import { ILabel } from './label.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

export interface ITraits {
  traits: ILabel
}

export const Label: FC<ITraits> = ({ traits }) => {

  const { isRequired, main, secondary, ...remainder } = traits

  // if (!isRequired) traits.isRequired = false;
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


  return (
    <label {...stylerAttributeAndClassSetup(remainder)} htmlFor={traits.for}>
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