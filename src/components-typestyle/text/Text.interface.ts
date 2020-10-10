import { IStylesColor, IStylesSpacing, IStylesTextAlign } from '../../interfaces/styles.interface';
import { ITypography } from '../../interfaces/typography.interface';
import { IPattern } from '../../interfaces/pattern.interface';
import { ILink } from '../../interfaces/link.interface';
import { IEvent } from '../../interfaces/event.interface';
import { TVariantText, TBranding, TSizesButton, TWhiteSpace, TLabelPosition } from '../../types/util-types';

type ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "figcaption" | "legend";

// IStylesText was only being extended and not used anywhere else so i probably ever extended thigns...
export interface IText extends IPattern, IStylesColor, IStylesTextAlign {
  tag?: ElementType,
  margin?: IStylesSpacing | IStylesSpacing[],
  padding?: IStylesSpacing | IStylesSpacing[],
  title?: string,
  variant: TVariantText,
  text: string,
  characterWidth?: number,
  isTiny?: boolean,
  isBig?: boolean,
  isNowrap?: boolean,
  isBold?: boolean,
  isBolder?: boolean,
  isLighter?: boolean,
  isItalic?: boolean,
  isUnderlined?: boolean,
  isCrossedOut?: boolean,
  wordBreak?: "all" | "word",
  whiteSpace?: TWhiteSpace,
  textTransform?: "uppercase" | "capitalize"
}

export interface ITextAction extends IEvent, IPattern {
  variant: TBranding,
  text: string,
  size: TSizesButton
}

export interface ITextCTA extends ILink, IPattern {
  variant: TBranding,
  text: string,
  size: TSizesButton
}

export interface ITextLink extends ILink, IPattern {
  // this is for situations where the onclick is handled in
  // the core pattern e.g. the drawer or tab pattern so onclick or href should be empty (trigger)
  text: string,
  variant: TBranding,
  isFaux?: boolean
}

export interface ITextForm extends Omit<IText, "tag" | "variant"> {
  size: TSizesButton,
  variant: TBranding,
  form: string
}

export interface ITextActionLink extends Omit<IText, "tag">, IEvent, ILink {
  // this is for situations where the onclick is handled in
  // the core pattern e.g. the drawer or tab pattern so onclick or href should be empty (trigger)
  isFaux?: boolean
}