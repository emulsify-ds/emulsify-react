import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import TypeFacesTokens from './type-faces-tokens';

const meta = {
  title: 'Tokens/Type Faces',
  component: TypeFacesTokens,
} satisfies Meta<typeof TypeFacesTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeFaces: Story = {
  args: {
    typeFaces: Object.keys(tokens['font-family']).map((name) => {
      return {
        name,
        value: tokens['font-family'][name as keyof typeof tokens['font-family']].value,
      };
    }),
  },
};
