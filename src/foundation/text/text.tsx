import React, { FC } from "react";

import { IText } from './text.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import stylesText from './text.scss';

interface ITraits {
  traits: IText;
}

export const Text: FC<ITraits> = ({ traits }) => {

  const StylesText = stylesText as { [key: string]: string }
  const { tag: _tag, text, title, ...remainder } = traits
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span"

  if (!!traits.css) traits.css.internal = StylesText[`text-${traits.variant}`]
  if (!traits.css)
    traits.css = {}
    traits.css.internal = StylesText[`text-${traits.variant}`]

  return (
    <Tag {...stylerAttributeAndClassSetup(remainder)}>
      {
        text
      }
    </Tag>
  )
}


