import React, { FC } from "react";
import { IContainerAction } from './container.interface';
import _isFunction from 'lodash/isFunction';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

interface ITraits {
  traits: IContainerAction
}

export const ContainerAction: FC<ITraits> = ({
  traits,
  children
}) => {

  const { onClick: _onClick, css, ...remainder } = traits;

  const handleClick = (event?: React.SyntheticEvent): void => {
    if (!_onClick) return
    if (_isFunction(_onClick)) _onClick(event);
  };

  return (
    <div {...stylerAttributeAndClassSetup(remainder)} onClick={handleClick}>
      {children}
    </div>
  )
};