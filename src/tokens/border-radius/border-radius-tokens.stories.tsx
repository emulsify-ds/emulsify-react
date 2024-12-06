import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import BorderRadiusTokens from './border-radius-tokens';

const meta = {
  title: 'Tokens/Border Radius',
  component: BorderRadiusTokens,
} satisfies Meta<typeof BorderRadiusTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadius: Story = {
  args: {
    borderRadius: Object.keys(tokens.radius).map((name) => {
      return {
        name,
        value: tokens.radius[name as keyof typeof tokens.radius].value,
      };
    }),
  },
};
