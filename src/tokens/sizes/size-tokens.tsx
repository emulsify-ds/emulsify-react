import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type SizeTokensProps = {
  sizes: {
    name: string;
    value: number;
  }[];
};

export default function SizeTokens({
  sizes,
}: SizeTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Size Tokens</h1>
      <ul className={clBase['sb-list']}>
        {sizes.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--size-{item.name})
              </code>
            </span>
            <span
              className={clBase['sb-list__visualization']}
              style={{
                width: `var(--size-${item.name})`,
                height: `var(--size-${item.name})`,
                background: 'var(--colors-sb-visualization)',
              }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
