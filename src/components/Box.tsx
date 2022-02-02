import { ComponentProps } from 'react';
import { styled, theme } from '~/stitches.config';

export const Box = styled('div', {
  m: 0,
  boxSizing: 'border-box',
  fontFamily: theme.fonts.montserrat,
  fontWeight: theme.fontWeights.regular,
});

export interface BoxProps extends ComponentProps<typeof Box> {}
