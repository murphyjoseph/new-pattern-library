import React, { FC } from 'react';
import { TextForm } from '../../components-typestyle/text/TextForm';
import { ITextForm } from '../../components-typestyle/text/Text.interface';

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
    variant: 'tertiary',
    stylesExternal: _styles,
    form: _form,
    text: _text,
    size: "medium"
  };

  return <TextForm traits={settings} />;
};
