import { InputHTMLAttributes, ReactNode } from 'react';
import { Box } from '~/components/Box';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
}

export function Input({ label, id, type = 'text', ...rest }: InputProps) {
  return (
    <Box as="label">
      <Box css={{ mb: '$4', color: '$mauve11' }}>{label}</Box>

      <Box
        as="input"
        css={{
          appearance: 'none',
          fontSize: '$20',
          br: '$smol',
          borderStyle: 'solid',
          borderColor: '$mauve7',
          caretColor: '$mauve9',
          outline: 'none',
          p: '$4',

          '&:hover': {
            borderColor: '$mauve8',
            outline: 'none',
          },

          '&:focus': {
            borderColor: '$mauve9',
            outline: 'none',
          },
        }}
        id={id}
        name={id}
        type={type}
        {...rest}
      />
    </Box>
  );
}
