import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import SizeTokens from './size-tokens';

const meta = {
  title: 'Tokens/Sizes',
  component: SizeTokens,
} satisfies Meta<typeof SizeTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sizes: Story = {
  args: {
    sizes: Object.keys(tokens.size).map((name) => {
      return {
        name,
        value: tokens.size[name as keyof typeof tokens.size].value,
      };
    }),
  },
};
