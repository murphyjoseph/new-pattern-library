import React, { FC } from 'react';
import { IText } from '../../components/text/Text.interface';
import { Text } from '../../components/text/Text';
import { TColor } from '../../types/util-types';

interface IPropsTextTitlePrimary {
  text: string
  color: TColor
}

export const TextTitlePrimary: FC<IPropsTextTitlePrimary> = ({
  text: _text,
  color: _color
}) => {

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