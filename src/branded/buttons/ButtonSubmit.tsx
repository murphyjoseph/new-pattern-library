import React, { FC } from 'react';
import { TextForm } from '../../components/text/TextForm';
import { ITextForm } from '../../components/text/Text.interface';

export interface IPropsTextTitle {
  text: string,
  form: string,
  styles?: any
}

export const ButtonSubmit: FC<IPropsTextTitle> = ({
  text: _text,
  form: _form,
  styles: _styles
}) => {

  const settings: ITextForm = {
    variant: 'primary',
    stylesExternal: _styles,
    form: _form,
    text: _text,
    kind: "outline",
    size: "medium"
  };

  return <TextForm traits={settings} />;
};
