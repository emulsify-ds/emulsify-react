import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type TypeFacesTokensProps = {
  typeFaces: {
    name: string;
    value: number;
  }[];
};

export default function TypeFacesTokens({
  typeFaces,
}: TypeFacesTokensProps) {
  return (
    <div>
      <h1 className={clBase['sb-title']}>Type Faces</h1>
      <ul className={clBase['sb-list']}>
        {typeFaces.map((item) => (
          <li className={clBase['sb-list__item']} key={item.name}>
            <span className={clBase['sb-list__value']}>{item.value}</span>
            <span className={clBase['sb-list__custom-property']}>
              <code className={clBase['sb-custom-property-name']}>
                var(--font-family-{item.name})
              </code>
            </span>
            <h2 className={clBase['sb-list__label']} style={{ fontFamily: `var(--font-family-${item.name})`}}>{item.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
