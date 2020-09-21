import React from 'react';
import cn from 'classnames';
import { IText } from '../../foundation/text/text.interface';
import { useStyles } from './Text.styles';

interface ITraits {
  traits: IText;
}

export const Text = ({ traits }: any) => {
  const styles = {
    traits,
    bodyPadding: '10px',
  }
  const classes: any = useStyles(styles);
  const { tag: _tag, text, variant } = traits;
  const Tag: keyof JSX.IntrinsicElements = !!_tag ? _tag : "span";
  return (
    <div className={classes.body}>
      <Tag className={cn(classes.root,classes.container, classes[variant])}>{text}</Tag>
    </div>)
}
