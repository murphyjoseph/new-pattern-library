import React, { FC } from 'react';
import { IText } from '../../components-emotion/text/Text.interface';
import { Text } from '../../components-emotion/text/Text';

interface IPropsTextTitleSecondary {
  text: string
}

export const TextTitleSecondary: FC<IPropsTextTitleSecondary> = ({ text: _text }) => {

  const settings: IText = {
    text: _text,
    variant: "titleTwo",
    tag: "h5",
    textAlignment: "left",
    isItalic: true
  }

  return (
    <Text traits={settings} />
  )

}