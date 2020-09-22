import React, { FC } from 'react';
import { IText } from '../foundation/text/text.interface';
import { Text } from './components/Text-styled';

export interface IPropsHeadingOne {
  text: string;
  tag: "h1" | "h2";
  isMaterial?: boolean;
}

export const HeadingOneStyled: FC<IPropsHeadingOne> = ({
  text: _text,
  tag: _tag,
  isMaterial
}) => {

  const settings: any = {
    variant: "headingOne",
    isMaterial,
    text: _text,
    tag: _tag,
    padding: {
      size: "size4",
      direction: "left"
    }
  }
  return <Text traits={settings}/>
};
