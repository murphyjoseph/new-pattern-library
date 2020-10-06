import React, { FC } from 'react';
import { IFieldInput } from '../../components-emotion/field-input/FieldInput.interface';
import { FieldInput } from '../../components-emotion/field-input/FieldInput';

interface IPropsFieldText {
  textMain: string,
  onChange: React.FormEventHandler<HTMLInputElement>,
  for: string,
  styles?: any
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for, styles: _styles}) => {

  const settings: IFieldInput = {
    for: _for,
    kind: "text",
    styles: _styles,
    traitLabel: {
      for: _for,
      main: {
        text: textMain
      }
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}