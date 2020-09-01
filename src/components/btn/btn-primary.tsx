import React, { FC } from 'react';
import { TBtnSizes } from '../../shared/types/util-types';
import { ITextAction } from '../../foundation/text/text.interface';
import { TextAction } from '../../foundation/text/text-action';

export interface IPropsBtnPrimary {
  text: string
  size: TBtnSizes
  onClick: (e?: React.SyntheticEvent) => void
}

export const BtnPrimary: FC<IPropsBtnPrimary>  = ({
  text: _text,
  size: _size,
  onClick: _onClick
}) => {

    const settings: ITextAction = {
      variant: "primary",
      text: _text,
      size: _size,
      onClick: _onClick
    }

    return <TextAction traits={settings} />

}