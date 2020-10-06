import React, { FC } from 'react';
import { IFieldInput } from '../../components-emotion/field-input/FieldInput.interface';
import { FieldInput } from '../../components-emotion/field-input/FieldInput';
import { themeCss } from '../../themeCss';

interface IPropsFieldText {
  textMain: string,
  onChange: React.FormEventHandler<HTMLInputElement>,
  for: string,
  styles?: any
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for, styles: _styles, onChange: _onChange}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
    styles: _styles,
    onChange: _onChange,
    traitLabel: {
      for: _for,
      main: {
        text: textMain
      },
      styles: {
        paddingRight: themeCss.size.spacing.size3
      }
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}