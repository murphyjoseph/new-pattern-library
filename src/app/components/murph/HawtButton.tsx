import React, { FC } from 'react';
import { Text } from '../../../foundation/text/text';
import { IText } from '../../../foundation/text/text.interface';
import { StyleSheet, css } from 'aphrodite';
import { TextAction } from '../../../base/text/text-action';
import { ITextAction } from '../../../base/text/text.interface';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const HawtButton: FC<IPropsTextTitle> = ({
  text: _text,
  onClick: _onClick,
}: IPropsTextTitle) => {



  const settings: ITextAction = {
    variant: 'global',
    text: _text,
    onClick: _onClick,
    size: "medium"
  };

  return <TextAction traits={settings} />;
};
