import React, { FC } from 'react';
import { IText } from '../../base-emotion/text/text.interface';
import { Text } from '../../base-emotion/text/text';

interface IPropsTextTitlePrimary {
  text: string
}

export const TextTitlePrimary: FC<IPropsTextTitlePrimary> = ({ text: _text }) => {

  const settings: IText = {
    text: _text,
    variant: "titleOne",
    tag: "h4",
    textAlignment: "right"
  }

  return (
    <Text traits={settings} />
  )

}