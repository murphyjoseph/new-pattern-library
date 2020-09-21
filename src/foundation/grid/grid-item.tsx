import React, { FC } from 'react';
import { IGridItem } from './grid.interface';

interface ITraits {
  traits: IGridItem
}

export const GridItem: FC<ITraits> = ({ traits, children }) => {

  return (
    <div>
      {children}
    </div>
  )
}