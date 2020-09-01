import React, { FC } from "react";

import { IIcon } from './icon.interface';

import { stylerAttributeAndClassSetup } from '../../shared/services/styler';
import { getIconMarkup } from './getIconMarkup';

interface Traits {
  traits: IIcon;
}

export const Icon: FC<Traits> = ({ traits }) => {

  const { name, ...remainder } = traits

  let IconMarkup: React.ReactNode;
  IconMarkup = getIconMarkup(traits.name)

  return (
    <div {...stylerAttributeAndClassSetup(remainder)}>
      {IconMarkup}
    </div>
  )

}
