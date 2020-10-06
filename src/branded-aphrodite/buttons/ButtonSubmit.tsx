import React, { FC } from 'react';
import { TextForm } from '../../components-aphrodite/text/TextForm';
import { ITextForm } from '../../components-aphrodite/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  form: string
}

export const ButtonSubmit: FC<IPropsTextTitle> = ({
  text: _text,
  form: _form
}: IPropsTextTitle) => {

  const settings: ITextForm = {
    variant: 'primary',
    text: _text,
    form: _form,
    size: "medium"
  };

  return <TextForm traits={settings} />;
};
