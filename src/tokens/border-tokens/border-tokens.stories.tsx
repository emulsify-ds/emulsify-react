import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import BorderTokens from "./border-tokens";

const meta = {
  title: 'Tokens/Borders',
  component: BorderTokens
} satisfies Meta<typeof BorderTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Borders: Story = {
  args: {
    borders: Object.keys(tokens.border).map((name) => {
      return {
        name,
        value: tokens.border[name as keyof typeof tokens.border].value,
      };
    }),
  },
};
