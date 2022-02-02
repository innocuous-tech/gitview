import type * as Stitches from '@stitches/react';
import { createStitches, CSS as StitchesCSS } from '@stitches/react';
import { plum, mauve, grass, red } from '@radix-ui/colors';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    fontSizes: {
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
    },
    colors: {
      ...plum,
      ...mauve,
      ...red,
      ...grass,
      transparent: 'hsla(0,0%,0%,0.001)',
    },
    space: {
      // used for margins + paddings + flex/grid gaps
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      96: '96px',
      128: '128px',
    },
    fontWeights: {
      regular: 400,
      semiBold: 600,
      bold: 900,
    },
    fonts: {
      montserrat: 'Arial, sans-serif',
    },
    radii: {
      circle: '50%',
      pill: '999px',
      smol: '6px',
    },
    transitions: {
      basic: 'all 200ms linear',
    },
  },
  utils: {
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({ marginLeft: value, marginRight: value }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({ marginTop: value, marginBottom: value }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: Stitches.PropertyValue<'padding'>) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: Stitches.PropertyValue<'padding'>) => ({ paddingTop: value, paddingBottom: value }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({ minWidth: value }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({ maxWidth: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({ minHeight: value }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({ maxHeight: value }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({ borderRadius: value }),
    ellipsis: (value: 'default' | 'truncate') => ({
      whiteSpace: value === 'truncate' ? 'nowrap' : 'normal',
      overflow: value === 'truncate' ? 'hidden' : 'visible',
      textOverflow: value === 'truncate' ? 'ellipsis' : 'clip',
    }),
  },
  media: {
    desktop: '(max-width: 1199px)',
    tablet: '(max-width: 767px)',
    mobile: '(max-width: 575px)',
  },
});

export type ThemeSafeCSS = StitchesCSS<typeof config>;

export const globalCSSReset = globalCss({
  html: {
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
  },
  body: {
    m: 0,
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },
  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  a: {
    backgroundColor: 'transparent',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  'b, strong': {
    fontWeight: 600,
  },
  'code, kbd, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: 0,
    },
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },
  fieldset: {
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: -2,
  },
  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none',
  },
});

export const globalStyles = globalCss({
  '#__next': {
    height: '100%',
  },
  html: {
    height: '100%',
  },
  body: {
    backgroundColor: '$background',
    height: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
});
