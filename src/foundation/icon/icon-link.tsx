import React, { FC } from "react";

import { IIcon } from './icon.interface';

import styles from './icon.module.scss';
import { styler, stylerAttributeAndClassSetup } from '../../shared/services/styler';
import { getIconMarkup } from './getIconMarkup';

interface ITraits {
  traits: IIcon;
}

export const IconLink: FC<ITraits> = ({ traits }) => {

  const { name, href: _href, target: _target, ...remainder } = traits

  const optionalAttributes: any = {
    ...(!!_target && { target: _target })
  };

  let IconMarkup: React.ReactNode;
  IconMarkup = getIconMarkup(traits.name)

  return (
    <a href={_href} {...optionalAttributes} {...stylerAttributeAndClassSetup(remainder)}>
      {IconMarkup}
    </a>
  )

}
