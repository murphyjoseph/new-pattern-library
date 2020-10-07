import React, { FC } from 'react';
import { TextForm } from '../../components-jss/text/TextForm';
import { ITextForm } from '../../components-jss/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  form: string,
  styles?: any
}

export const ButtonSubmit: FC<IPropsTextTitle> = ({
  text: _text,
  form: _form,
  styles: _styles,
}: IPropsTextTitle) => {

  const settings: ITextForm = {
    variant: 'primary',
    styles: _styles,
    text: _text,
    form: _form,
    size: "medium"
  };

  return <TextForm traits={settings} />;
};
