import React, { FC } from "react";

import { IContainer } from './container.interface';
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";

interface ITraits {
  traits: IContainer;
}

export const Container: FC<ITraits> = ({
  traits,
  children
}) => {

  return (
    <div {...stylerAttributeAndClassSetup(traits)}>
      {children}
    </div>
  )
}