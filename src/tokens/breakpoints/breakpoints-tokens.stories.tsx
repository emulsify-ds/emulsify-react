import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import BreakpointTokens from './breakpoints-tokens';

const meta = {
  title: 'Tokens/Breakpoint',
  component: BreakpointTokens,
} satisfies Meta<typeof BreakpointTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Breakpoint: Story = {
  args: {
    breakpoint: Object.keys(tokens.breakpoint).map((name) => {
      return {
        name,
        value: tokens.breakpoint[name as keyof typeof tokens.breakpoint].value,
      };
    }),
  },
};
