import React, { FC } from 'react';
import { IText } from '../../components-emotion/text/Text.interface';
import { Text } from '../../components-emotion/text/Text';

interface IPropsTextTitleSecondary {
  text: string;
  variant?: any;
}

export const TextTitleSecondary: FC<IPropsTextTitleSecondary> = ({ text: _text, variant }) => {

  const settings: IText = {
    text: _text,
    variant: variant || 'titleTwo',
    tag: "h5",
    textAlignment: "left",
    isItalic: true
  }

  return (
    <Text traits={settings} />
  )

}