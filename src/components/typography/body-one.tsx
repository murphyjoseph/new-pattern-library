import React, { FC } from 'react';
import { IText } from '../../foundation/text/text.interface';
import { Text } from '../../foundation/text/text';

export interface IPropsBodyOne {
  text: string
}

export const BodyOne: FC<IPropsBodyOne>  = ({
  text: _text
}) => {

    const settings: IText = {
      variant: "bodyOne",
      text: _text,
      tag: "p",
      padding: {
        direction: "bottom",
        size: "size3"
      }
    }

    return <Text traits={settings} />

}