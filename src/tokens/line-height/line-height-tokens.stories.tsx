import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import LineHeightTokens from './line-height-tokens';

const meta = {
  title: 'Tokens/Line Height',
  component: LineHeightTokens,
} satisfies Meta<typeof LineHeightTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineHeight: Story = {
  args: {
    lineHeight: Object.keys(tokens['line-height']).map((name) => {
      return {
        name,
        value: tokens['line-height'][name as keyof typeof tokens['line-height']].value,
      };
    }),
  },
};
