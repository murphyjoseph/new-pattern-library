import React, { FC } from 'react';
import { IText } from '../../components/text/Text.interface';
import { Text } from '../../components/text/Text';

interface IPropsTextTitleSecondary {
  text: string
}

export const TextTitleSecondary: FC<IPropsTextTitleSecondary> = ({
  text: _text
}) => {

  const settings: IText = {
    text: _text,
    variant: "titleTwo",
    tag: "h5",
    textAlignment: "left"
  }

  return (
    <Text traits={settings} />
  )

}