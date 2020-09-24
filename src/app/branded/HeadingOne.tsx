import React, { FC } from 'react';
import { IText } from '../../foundation/text/text.interface';
import { Text } from '../components/Text';

export interface IPropsHeadingOne {
  text: string
  tag: "h1" | "h2"
}

export const HeadingOne: FC<IPropsHeadingOne> = ({
  text: _text,
  tag: _tag
}) => {

  const settings: IText = {
    variant: "headingOne",
    text: _text,
    tag: _tag,
    padding: {
      size: "size4",
      direction: "left"
    }
  }
  return <Text traits={settings}/>
};
