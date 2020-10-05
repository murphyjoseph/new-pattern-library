import React, { FC } from 'react';
import { TextAction } from '../../components-emotion/text/text-action';
import { ITextAction } from '../../components-emotion/text/text.interface';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const ButtonGlobal: FC<IPropsTextTitle> = ({
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
