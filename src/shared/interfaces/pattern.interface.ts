export interface IPattern {
  id?: any,
  title?: string,
  tabindex?: string,
  hidden?: boolean
  css?: {
    classes?: string,
    internal?: string,
    styles?: React.CSSProperties
  }
}