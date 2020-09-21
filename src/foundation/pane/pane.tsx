import React, {FC} from 'react';
import { IPane } from './pane.interface';
import { Content } from '../content/content';
import { Bar } from '../bar/bar';
import { styleShadow } from '../../shared/services/styler';

interface ITraits {
  traits: IPane
}

export const Pane: FC<ITraits> = ({ traits }) => {

  const { traitBar, traitContent, shadow } = traits;

  // need a more efficient process for adding in pattern classes for
  let cssFinalClasses: any = [];
  if (!!shadow) cssFinalClasses.push(styleShadow(shadow))
  if (!!traits.css && !!traits.css.classes) cssFinalClasses.push(traits.css.classes)

  const optionalAttributes: any = {
    ...(!!cssFinalClasses && cssFinalClasses.length > 0 && { classNames: cssFinalClasses })
  };

  return (
    <div {...optionalAttributes}>
      <Bar traits={traitBar} />
      <Content traits={traitContent} />
    </div>
  )
}