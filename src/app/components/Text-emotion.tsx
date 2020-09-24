/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { IText } from '../../foundation/text/text.interface';
// import { getPaddingStyled, stylePadding } from '../helpers/padding-helper';

interface ITraits {
  traits: IText;
}

const rootStyle = css`
  color: firebrick;
  font-size: 2.5rem;
`;

const altStyle = (jssObj: any) => (css({
  color: 'goldenrod',
  textTransform: jssObj ? 'uppercase' : 'lowercase'
}))
export const TextEmotion = ({ traits }: any) => {
  const { tag: _tag, text, jssObj } = traits;
  const Tag = !!_tag ? _tag : "span";
  const style = jssObj ? altStyle(jssObj) : rootStyle;
  return (<Tag css={style} {...traits}>{text}</Tag>)
}