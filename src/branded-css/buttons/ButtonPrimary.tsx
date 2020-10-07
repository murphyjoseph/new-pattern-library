import React, { FC } from 'react';
import { TextAction } from '../../components-css/text/TextAction';
import { ITextAction } from '../../components-css/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const ButtonPrimary: FC<IPropsTextTitle> = ({
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
