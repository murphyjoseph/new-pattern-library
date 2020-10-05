import React, { FC } from 'react';
import { TextForm } from '../../components-aphrodite/text/text-form';
import { ITextForm } from '../../components-aphrodite/text/text.interface';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const ButtonSubmit: FC<IPropsTextTitle> = ({
  text: _text
}: IPropsTextTitle) => {

  const settings: ITextForm = {
    variant: 'primary',
    text: _text,
    size: "medium"
  };

  return <TextForm traits={settings} />;
};
