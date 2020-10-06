import React, { FC } from 'react';
import { IText } from '../../components-emotion/text/Text.interface';
import { Text } from '../../components-emotion/text/Text';

interface IPropsTextBodyPrimary {
  text: string
}

export const TextBodyPrimary: FC<IPropsTextBodyPrimary> = ({ text: _text }) => {

  const settings: IText = {
    text: _text,
    variant: "bodyOne",
    tag: "p",
    textAlignment: "left"
  }

  return (
    <Text traits={settings} />
  )

}