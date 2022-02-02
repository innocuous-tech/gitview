import { styled, theme } from '~/stitches.config';

export const StyledButton = styled('button', {
  m: 0,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  px: '$16',
  py: '$12',
  outline: '2px solid',
  outlineColor: theme.colors.transparent,
  border: '2px solid',
  borderColor: theme.colors.plum1,
  br: '$smol',
  backgroundColor: theme.colors.plum11,
  color: theme.colors.plum1,
  transition: '$basic',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: theme.colors.plum10,
    transition: theme.transitions.basic,
  },

  '&:focus': {
    outlineColor: theme.colors.plum11,
    transition: theme.transitions.basic,
  },

  '&:active': {
    backgroundColor: theme.colors.plum9,
    outlineColor: theme.colors.plum9,
  },
});
