import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import TypeScaleTokens from './type-scale-tokens';

const meta = {
  title: 'Tokens/Type Scale',
  component: TypeScaleTokens,
} satisfies Meta<typeof TypeScaleTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeScale: Story = {
  args: {
    typeScale: Object.keys(tokens['font-size']).map((name) => {
      return {
        name,
        value: tokens['font-size'][name as keyof typeof tokens['font-size']].value,
      };
    }),
  },
};
