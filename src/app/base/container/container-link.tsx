import React, { FC } from "react";
import { IContainerLink } from './container.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

interface ITraits {
  traits: IContainerLink
}

export const ContainerLink: FC<ITraits> = ({
  traits,
  children
}) => {

  const { href: _href, target: _target, css, ...remainder } = traits;

  const optionalAttributes: React.HTMLProps<HTMLAnchorElement> = {
    ...(!!_target && { target: _target })
  };

  return (
    <a {...stylerAttributeAndClassSetup(remainder)} {...optionalAttributes}>
      {children}
    </a>
  )
}