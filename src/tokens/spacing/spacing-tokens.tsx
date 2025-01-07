import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type SpacingTokensProps = {
  spacing: {
    name: string;
    value: number;
  }[];
};

export default function SpacingTokens({
  spacing,
}: SpacingTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Spacing Tokens</h1>
      <ul className={clBase['sb-list']}>
        {spacing.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span
              className={clBase['sb-list__label']}
              style={{ width: '100px' }}>
              {item.name}
            </span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code
                className={clBase['sb-custom-property-name']}
                style={{ width: '272px' }}>
                var(--spacing-{item.name})
              </code>
            </span>
            <ul
              className={clBase['sb-spacing-wrapper']}
              style={{ 
                gap: `${item.value}px`,
              }}
            >
              {Array(4).fill(1).map((_, index) => (
                <li
                  key={index}
                  className={clBase['sb-list__visualization']}
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: 'var(--colors-sb-visualization)',
                  }}
                ></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
