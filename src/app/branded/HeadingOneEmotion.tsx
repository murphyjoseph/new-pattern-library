import React, { FC } from 'react';
import { TextEmotion } from '../components/Text-emotion';

export interface IPropsHeadingOne {
  text: string;
  tag: "h1" | "h2";
  jssObj?: boolean;
}

export const HeadingOneEmotion: FC<IPropsHeadingOne> = ({
  text: _text,
  tag: _tag,
  jssObj,
}) => {

  const settings: any = {
    jssObj,
    variant: "headingOne",
    text: _text,
    tag: _tag,
    padding: {
      size: "size4",
      direction: "right"
    }
  }
  return <TextEmotion traits={settings}/>
};

HeadingOneEmotion.defaultProps = {
  jssObj: false,
}