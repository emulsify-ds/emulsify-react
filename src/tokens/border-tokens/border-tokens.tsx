import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type BorderTokensProps = {
  borders: {
    name: string;
    value: number;
  }[];
};

export default function BorderTokens({
  borders,
}: BorderTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Border Tokens</h1>
      <ul className={clBase['sb-list']}>
        {borders.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--border-{item.name})
              </code>
            </span>
            <span
              className={clBase['sb-list__visualization']}
              style={{
                height: `var(--border-${item.name})`,
                width: '300px',
                background: 'var(--colors-sb-visualization)',
              }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}