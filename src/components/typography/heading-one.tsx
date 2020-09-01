import React, { FC } from 'react';
import { IText } from '../../foundation/text/text.interface';
import { Text } from '../../foundation/text/text';

export interface IPropsHeadingOne {
  text: string
  tag: "h1" | "h2"
}

export const HeadingOne: FC<IPropsHeadingOne>  = ({
  text: _text,
  tag: _tag
}) => {

    const settings: IText = {
      variant: "headingOne",
      text: _text,
      tag: _tag,
      padding: {
        size: "size4",
        direction: "bottom"
      }
    }

    return <Text traits={settings} />

}