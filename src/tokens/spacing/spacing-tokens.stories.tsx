import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import SpacingTokens from './spacing-tokens';

const meta = {
  title: 'Tokens/Spacing',
  component: SpacingTokens,
} satisfies Meta<typeof SpacingTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  args: {
    spacing: Object.keys(tokens['spacing']).map((name) => {
      return {
        name,
        value: tokens['spacing'][name as keyof typeof tokens['spacing']].value,
      };
    }),
  },
};
