import React, { FC } from 'react';
import { IText } from '../../../base/text/text.interface';
import { Text } from '../../../base/text/text';

interface IPropsTextTitlePrimary {
  text: string
}

export const TextTitlePrimary: FC<IPropsTextTitlePrimary> = ({ text: _text }) => {

  const settings: IText = {
    text: _text,
    variant: "titleOne",
    tag: "h4"
  }

  return (
    <Text traits={settings} />
  )

}