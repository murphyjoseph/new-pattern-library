import React, {FC} from 'react'
import { IFlag } from './flag.interface';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
import { stylerAttributeAndClassSetup } from '../../shared/services/styler';

interface ITraits {
  traits: IFlag
}

export const Flag: FC<ITraits> = ({ traits }) => {

  const { traitIcon, traitText, ...remainder } = traits;

  return (
    <div {...stylerAttributeAndClassSetup(remainder)}>
      <Icon traits={traitIcon} />
      <Text traits={traitText} />
    </div>
  )

}