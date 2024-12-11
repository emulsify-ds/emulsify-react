import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type LineHeightTokensProps = {
  lineHeight: {
    name: string;
    value: number;
  }[];
};

export default function LineHeightTokens({
  lineHeight,
}: LineHeightTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Line Heights</h1>
      <ul className={clBase['sb-list']}>
        {lineHeight.map((item) => (
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
                var(--line-height-{item.name})
              </code>
            </span>
            <span
              className={clBase['sb-list__visualization']}
              style={{
                lineHeight: `var(--line-height-${item.name})`,
                width: 'auto',
                height: 'auto',
                maxWidth: '600px',
                padding: 'var(--spacing-lg)',
              }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen 
                book. It has survived not only five centuries, but also the leap into electronic 
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
