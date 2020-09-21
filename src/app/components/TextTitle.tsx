import React, { FC } from 'react';
import { Text } from '../../foundation/text/text';
import { IText } from '../../foundation/text/text.interface';

export interface IPropsTextTitle {
  text: string;
}

export const TextTitle: FC<IPropsTextTitle> = ({
  text: _text,
}: IPropsTextTitle) => {
  const settings: IText = {
    colorText: 'white',
    variant: 'primary',
    text: _text,
    tag: 'h1',
  };
  return <Text traits={settings} />;
};
