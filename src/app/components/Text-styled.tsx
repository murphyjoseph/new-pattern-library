import React from 'react';
import styledComp from 'styled-components'
import { styled } from '@material-ui/styles';
import { IText } from '../../foundation/text/text.interface';
import { getPaddingStyled, stylePadding } from '../helpers/padding-helper';

interface ITraits {
  traits: IText;
}


// @ts-ignore
const getTagCmpStyled = (tag: any) => (styledComp[tag]`
  font-size: 4rem;
  color: yellow;
  ${(props: any) => getPaddingStyled(props.padding)}
`);

const getTagCompMaterial = (tag: any) => (
  styled(tag)(props => ({
    fontSize: '2rem',
    color: 'green',
    ...stylePadding(props.padding),
    textTransform: props.isMaterial && 'uppercase',
    // padding: props => props.isMaterial && '50px', // can do it but need to get rid of overall props
  }))
)
export const Text = ({ traits }: any) => {
  const { id, tag: _tag, text, variant, isMaterial } = traits;
  const tag = !!_tag ? _tag : "span";
  const Tag = isMaterial ? getTagCompMaterial(tag) : getTagCmpStyled(tag);
  console.log(id);
  return (<Tag id={id} {...traits}>{text}</Tag>)
}

Text.defaultProps = {
  isMaterial: false
}
