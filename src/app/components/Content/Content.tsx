import React, {FC} from 'react';
import { IContent } from './Content.interface';
import { stylerAttributeAndClassSetup } from '../../../shared/services/styler';

interface ITraits {
  traits: IContent
}

export const Content: FC<ITraits> = ({ traits }) => {

  const { slot, ...remainder } = traits;

  return (
    <div {...stylerAttributeAndClassSetup(remainder)}>
      {slot}
    </div>
  )
}