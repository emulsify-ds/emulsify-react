import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type OpacityTokensProps = {
  opacity: {
    name: string;
    value: number;
  }[];
};

export default function OpacityTokens({
  opacity,
}: OpacityTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Opacity</h1>
      <ul className={clBase['sb-list']}>
        {opacity.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--opacity-{item.name})
              </code>
            </span>
            <span
              className={clBase['sb-list__visualization']}
              style={{
                opacity: `var(--opacity-${item.name})`,
                borderRadius: 'var(--radius-sm)',
                display: 'block',
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--colors-sb-visualization)',
              }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
