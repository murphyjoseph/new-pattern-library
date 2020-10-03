import React, { FC } from 'react';
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
    variant: 'primary',
    text: _text,
    onClick: _onClick,
    size: "large"
  };

  return <TextAction traits={settings} />;
};
