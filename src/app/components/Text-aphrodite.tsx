import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { IText } from '../../foundation/text/text.interface';
// import { getPaddingStyled, stylePadding } from '../helpers/padding-helper';

interface ITraits {
  traits: IText;
}

const styles = StyleSheet.create({
  root: {
    color: 'lightblue',
    fontSize: '2.5rem',
  },
  testClass: {
    paddingLeft: '3rem',
  }
});

export const TextAphrodite = ({ traits }: any) => {
  const { tag: _tag, text } = traits;
  const Tag = !!_tag ? _tag : "span";
  return (<Tag className={css(styles.root, styles.testClass)} {...traits}>{text}</Tag>)
}