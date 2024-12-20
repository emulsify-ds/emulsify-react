import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type TypeScaleTokensProps = {
  typeScale: {
    name: string;
    value: number;
  }[];
};

export default function TypeScaleTokens({
  typeScale,
}: TypeScaleTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Type Scale</h1>
      <ul className={clBase['sb-list']}>
        {typeScale.reverse().map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--font-size-{item.name})
              </code>
            </span>
            <p
              style={{
                fontSize: `var(--font-size-${item.name})`,
                margin: 0,
                textTransform: 'capitalize'
              }}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
