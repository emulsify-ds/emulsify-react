import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../transformed.tokens.json';
import ColorTokens from './color';

const meta = {
  title: 'Tokens/Colors',
  component: ColorTokens,
} satisfies Meta<typeof ColorTokens>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Colors: Story = {
  args: {
    colors: Object.keys(tokens.color).map((name) => {
      const colorGroup = tokens.color[name];

      // If it's a direct color token (no further nesting)
      if (colorGroup.value) {
        return {
          name,
          variants: [
            {
              name: null,
              value: colorGroup.value,
              type: colorGroup.type,
              description: colorGroup.description,
            },
          ],
        };
      }

      // Handle nested structures (recursively flatten)
      const processVariants = (data: any, parentKey = ""): any[] => {
        return Object.entries(data).flatMap(([key, value]) => {
          const currentKey = parentKey ? `${parentKey}-${key}` : key;

          if ((value as any).value) {
            return {
              name: currentKey,
              value: (value as any).value,
              type: (value as any).type,
              description: (value as any).description,
            };
          } else {
            return processVariants(value, currentKey);
          }
        });
      };

      return {
        name,
        variants: processVariants(colorGroup),
      };
    }),
  },
};
