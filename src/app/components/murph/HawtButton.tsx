import React, { FC } from 'react';
import { Text } from '../../../foundation/text/text';
import { IText } from '../../../foundation/text/text.interface';
import { StyleSheet, css } from 'aphrodite';
import { TextAction } from '../../../base/text/text-action';
import { ITextAction } from '../../../base/text/text.interface';
import { StylesText } from '../../../base/text/text-styles';

export interface IPropsTextTitle {
  text: string,
  onClick: (e?: React.SyntheticEvent) => void
}

export const HawtButton: FC<IPropsTextTitle> = ({
  text: _text,
  onClick: _onClick,
}: IPropsTextTitle) => {

  // StylesText = StyleSheet.create({
  //   btn: {
  //     background: "red",
  //     color: "white",
  //     ':hover': {
  //       background: "yellow"
  //     }
  //   }

  // })


  // const updatedBtn = StyleSheet.create({
  //   btn: {
  //     background: "red",
  //     ':hover': {
  //       background: "pink"
  //     }
  //   }
  // })

  // css(StylesText.btn, updatedBtn.btn)
  const styles = StyleSheet.create({
    btn: {
      color: "white",
      background: "red",
      ':hover': {
        background: "pink"
      }
    }
  })

  const settings: ITextAction = {
    variant: 'primary',
    text: _text,
    onClick: _onClick,
    size: "medium",
    styles: styles.btn
  };

  return <TextAction traits={settings} />;
};
