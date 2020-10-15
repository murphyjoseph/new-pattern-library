import React, { FC } from 'react';
import { TextAction } from '../../components/text/TextAction';
import { ITextAction } from '../../components/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const ButtonPrimary: FC<IPropsTextTitle> = ({
  text: _text,
  onClick: _onClick,
}) => {

  const settings: ITextAction = {
    variant: 'primary',
    text: _text,
    onClick: _onClick,
    kind: "solid",
    size: "large"
  };

  return <TextAction traits={settings} />;
};
