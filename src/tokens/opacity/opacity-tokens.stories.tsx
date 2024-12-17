import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import OpacityTokens from './opacity-tokens';

const meta = {
  title: 'Tokens/Opacity',
  component: OpacityTokens,
} satisfies Meta<typeof OpacityTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Opacity: Story = {
  args: {
    opacity: Object.keys(tokens.opacity).map((name) => {
      return {
        name,
        value: tokens.opacity[name as keyof typeof tokens.opacity].value,
      };
    }),
  },
};
