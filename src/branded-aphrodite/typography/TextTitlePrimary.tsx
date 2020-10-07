import React, { FC } from 'react';
import { IText } from '../../components-aphrodite/text/Text.interface';
import { Text } from '../../components-aphrodite/text/Text';
import { TColors } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  text: string,
  color: TColors
}

export const TextTitlePrimary: FC<IPropsTextTitlePrimary> = ({ text: _text, color: _color }) => {

  const settings: IText = {
    text: _text,
    colorText: _color,
    variant: "titleOne",
    tag: "h4",
    textAlignment: "right"
  }

  return (
    <Text traits={settings} />
  )

}