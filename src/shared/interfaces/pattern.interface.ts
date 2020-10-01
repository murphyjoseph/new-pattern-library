export interface IPattern {
  id?: any,
  title?: string,
  tabindex?: string,
  hidden?: boolean
  css?: {
    classes?: any, // MAYBE NOT NEEDED ANYMORE?
    internal?: any, // FOR USES INSIDE BRANDING
    container?: any, // FOR USES OUTSIDE OF BRANDING
    styles?: React.CSSProperties // INLINE STYLES
  }
}