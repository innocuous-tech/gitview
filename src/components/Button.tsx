import { styled } from '~/stitches.config';

export const Button = styled('button', {
  m: 0,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  px: '$16',
  py: '$12',
  border: '2px solid',
  borderColor: '$plum9',
  br: '$smol',
  color: '$plum11',
  backgroundColor: '$plum6',
  transition: '$basic',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$plum7',
    transition: '$basic',
  },

  '&:focus': {
    backgroundColor: '$plum7',
    transition: '$basic',
  },

  '&:active': {
    backgroundColor: '$plum8',
    transition: '$basic',
  },
});
