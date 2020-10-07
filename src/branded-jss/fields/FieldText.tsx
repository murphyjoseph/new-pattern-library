import React, { FC } from 'react';
import { IFieldInput } from '../../components-jss/field-input/FieldInput.interface';
import { FieldInput } from '../../components-jss/field-input/FieldInput';
import { themeCss } from '../../themeCss';

interface IPropsFieldText {
  textMain: string
  for: string,
  onChange: React.FormEventHandler<HTMLInputElement>
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for, onChange: _onChange}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
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