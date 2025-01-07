import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type BreakpointTokensProps = {
  breakpoint: {
    name: string;
    value: number;
  }[];
};

export default function BreakpointTokens({
  breakpoint,
}: BreakpointTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Breakpoint Tokens</h1>
      <ul className={clBase['sb-list']} style={{overflow: 'scroll'}}>
        {breakpoint.map((item) => (
          <li className={clBase['sb-list__item']} style={{minWidth: 'max-content'}} key={item.name}>
            <span className={clBase['sb-list__label']}>{item.name}</span>
            <span className={clBase['sb-list__value']}>{item.value}px</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>var(--breakpoint-{item.name})</code>
            </span>
            <span className={clBase['sb-list__visualization']}
              style={{
                width: `${item.value}px`,
                height: '25px',
                background: 'var(--colors-sb-visualization)',
                display: 'block', 
              }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
