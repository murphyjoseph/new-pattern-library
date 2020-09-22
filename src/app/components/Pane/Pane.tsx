import React, { FC } from 'react';
import styled from 'styled-components'
import { IPane } from './Pane.interface';
import { Content } from '../Content/Content';
import { Bar } from '../Bar/Bar';
import { styleShadow } from '../../helpers/shadow-helper';

interface ITraits {
  traits: IPane
}


const getStyles = (styles: string) => (styled.div`
  .test-class {
    font-size: 14px
  }
  ${styles}
`);

export const Pane: FC<ITraits> = ({ traits }) => {

  const { traitBar, traitContent, shadow } = traits;

  let additionalStyles = ''
  if (shadow) {
    const shadows = styleShadow(shadow);
    additionalStyles = additionalStyles.concat(shadows);
  }
  // NOTE: not sure how to add additonal classes to the top level besides just creating 
  // an concatinated string like before
  // if (!!traits.css && !!traits.css.classes) cssFinalClasses.push(traits.css.classes)

  // const optionalAttributes: any = {
  //   ...(!!cssFinalClasses && cssFinalClasses.length > 0 && { classNames: cssFinalClasses })
  // };
  const PaneComp: any = getStyles(additionalStyles);
  return (
    <PaneComp>
      {/* can nest classes within the component */}
      <span className="test-class">TESTTTT</span>
      <Bar traits={traitBar} />
      <Content traits={traitContent} />
    </PaneComp>
  )
}