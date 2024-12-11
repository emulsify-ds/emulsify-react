import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type BorderRadiusTokensProps = {
  borderRadius: {
    name: string;
    value: number;
  }[];
};

export default function BorderRadiusTokens({
  borderRadius,
}: BorderRadiusTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Border Radius Tokens</h1>
      <ul className={clBase['sb-list']}>
        {borderRadius.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--radius-{item.name})
              </code>
            </span>
            <span
              className={clBase['sb-list__visualization']}
              style={{
                borderRadius: `var(--radius-${item.name})`,
                width: '75px',
                height: '75px',
                background: 'var(--colors-sb-visualization)',
              }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
