import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import BorderTokens from "./border-tokens";

const meta = {
  title: 'Tokens/Borders',
  component: BorderTokens,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BorderTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Borders: Story = {
  args: {
    borderRadius: Object.keys(tokens.radius).map((name) => {
      return {
        name,
        value: tokens.radius[name as keyof typeof tokens.radius].value,
      };
    }),
  },
};
