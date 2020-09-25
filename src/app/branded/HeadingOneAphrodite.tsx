import React, { FC } from 'react';
import { TextAphrodite } from '../components/Text-aphrodite';

export interface IPropsHeadingOne {
  text: string;
  tag: "h1" | "h2";
}

export const HeadingOneAphrodite: FC<IPropsHeadingOne> = ({
  text: _text,
  tag: _tag,
}) => {

  const settings: any = {
    variant: "headingOne",
    text: _text,
    tag: _tag,
    padding: {
      size: "size4",
      direction: "right"
    }
  }
  return <TextAphrodite traits={settings}/>
};