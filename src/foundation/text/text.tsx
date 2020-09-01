import React, { FC } from "react";

import { IText } from './text.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import stylesText from './text.module.scss';
import { convertToKabob } from "../../shared/utilities/convertToKabob";

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const StylesText = stylesText as { [key: string]: string }
  const { tag: _tag, text, title, ...remainder } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  if (!!remainder.css) remainder.css.internal = StylesText[`text-${convertToKabob(traits.variant)}`]
  if (!remainder.css)
    remainder.css = {}
    remainder.css.internal = StylesText[`text-${convertToKabob(traits.variant)}`]

  return (
    <Tag {...stylerAttributeAndClassSetup(remainder)}>
      {
        text
      }
    </Tag>
  )
}


