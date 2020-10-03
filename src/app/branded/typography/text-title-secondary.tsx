import React, { FC } from 'react';
import { IText } from '../../../base/text/text.interface';
import { Text } from '../../../base/text/text';

interface IPropsTextTitleSecondary {
  text: string
}

export const TextTitleSecondary: FC<IPropsTextTitleSecondary> = ({ text: _text }) => {

  const settings: IText = {
    text: _text,
    variant: "titleTwo",
    tag: "h5"
  }

  return (
    <Text traits={settings} />
  )

}