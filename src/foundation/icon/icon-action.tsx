import React, { FC } from "react";

import { IIcon, IIconAction } from './icon.interface';
import { EIcon } from './icon.enum';

import styles from './icon.module.scss';
import { styler, stylerAttributeAndClassSetup } from '../../shared/services/styler';
import { getIconMarkup } from './getIconMarkup';
import _isFunction from 'lodash/isFunction';

interface ITraits {
  traits: IIconAction;
}

export const IconAction: FC<ITraits> = ({ traits }) => {

  const { name, onClick: _onClick, ...remainder } = traits

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  let IconMarkup: React.ReactNode;
  IconMarkup = getIconMarkup(traits.name)

  return (
    <div {...stylerAttributeAndClassSetup(remainder)} onClick={handleClick}>
      {IconMarkup}
    </div>
  )

}
