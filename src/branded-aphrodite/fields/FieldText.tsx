import React, { FC } from 'react';
import { IFieldInput } from '../../components-aphrodite/field-input/FieldInput.interface';
import { FieldInput } from '../../components-aphrodite/field-input/FieldInput';
import { themeCss } from '../../themeCss';
import { StyleSheet } from 'aphrodite';

interface IPropsFieldText {
  textMain: string
  for: string,
  onChange: React.FormEventHandler<HTMLInputElement>,
  styles?: any
}

export const FieldText: FC<IPropsFieldText> = ({textMain, for: _for, styles: _styles, onChange: _onChange}) => {

  const cssPadding = StyleSheet.create({
    padding: {
      paddingRight: themeCss.size.spacing.size3
    }
  })

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
      styles: cssPadding.padding
    }
  }

  return (
    <FieldInput traits={settings} />
  )
}