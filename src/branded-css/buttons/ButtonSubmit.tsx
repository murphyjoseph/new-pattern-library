import React, { FC } from 'react';
import { TextForm } from '../../components-css/text/TextForm';
import { ITextForm } from '../../components-css/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  form: string,
  styles?: any
}

export const ButtonSubmit: FC<IPropsTextTitle> = ({
  text: _text,
  form: _form,
  styles: _styles
}: IPropsTextTitle) => {

  const settings: ITextForm = {
    variant: 'primary',
    text: _text,
    form: _form,
    styles: _styles,
    size: "medium"
  };

  return <TextForm traits={settings} />;
};