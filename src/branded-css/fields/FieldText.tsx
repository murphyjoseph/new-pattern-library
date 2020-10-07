import React, { FC } from 'react';
import { IFieldInput } from '../../components-css/field-input/FieldInput.interface';
import { FieldInput } from '../../components-css/field-input/FieldInput';

interface IPropsFieldText {
  textMain: string
  for: string,
  onChange: React.FormEventHandler<HTMLInputElement>,
  styles?: any
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for, styles: _styles, onChange: _onChange}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
    onChange: _onChange,
    styles: _styles,
    traitLabel: {
      for: _for,
      main: {
        text: textMain
      },
      styles: 'css_padding_right_size4'
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}