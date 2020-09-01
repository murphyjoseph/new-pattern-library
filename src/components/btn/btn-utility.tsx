import React, { FC } from 'react';
import { TBranding, TBtnSizes } from '../../shared/types/util-types';
import { TextCTA } from '../../foundation/text/text-cta';
import { ITextCTA, ITextAction } from '../../foundation/text/text.interface';
import { TextAction } from '../../foundation/text/text-action';

export interface IPropsBtnUtility {
  text: string
  size: TBtnSizes
  variant: TBranding
  href?: string
  onClick?: (e?: React.SyntheticEvent) => void
}

// patterns like this should probably not be in long iterable lists for performance reasons?

export const BtnUtility: FC<IPropsBtnUtility>  = ({
  text: _text,
  size: _size,
  variant: _variant,
  href: _href,
  onClick: _onClick
}) => {

    const settingsGeneral: any = {
      variant: _variant,
      text: _text,
      size: _size,
    }

    if (!!_href) {
      const settings: ITextCTA = {
        ...settingsGeneral,
        target: "_blank"
      }
      return <TextCTA traits={settings} />
    }

    if (!!_onClick) {
      const settings: ITextAction = {
        ...settingsGeneral,
        onClick: _onClick
      }
      return <TextAction traits={settings} />
    }

    console.warn("neither onClick or an Href were supplied");
    return <></>

}