import React, { FC, ReactNode } from 'react';
import { Pane } from '../components/Pane/Pane';

export interface IPropsPaneOne {
  bar: string;
  content: ReactNode;
}

export const PaneOne: FC<IPropsPaneOne> = ({
  bar: _bar,
  content: _content,
}) => {

  const settings: any = {
    shadow: {
      size: '3px',
      direction: 'left'
    },
    traitBar: {
      colorBackground: 'white',
      slot: <div>{_bar}</div>
    },
    traitContent: {
      slot: _content
    },

  }
  return <Pane traits={settings} />
};
