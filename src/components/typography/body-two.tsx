import React, { FC } from 'react';
import { IText } from '../../foundation/text/text.interface';
import { Text } from '../../foundation/text/text';

export interface IPropsBodyTwo {
  text: string
}

export const BodyTwo: FC<IPropsBodyTwo>  = ({
  text: _text
}) => {

    const settings: IText = {
      variant: "bodyTwo",
      text: _text,
      tag: "p"
    }

    return <Text traits={settings} />

}