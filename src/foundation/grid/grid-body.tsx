import React, { FC } from 'react';
import { IGridBody } from './grid.interface';

interface ITraits {
  traits: IGridBody
}

export const GridBody: FC<ITraits> = ({ traits, children }) => {

  return (
    <div>
      {children}
    </div>
  )
}