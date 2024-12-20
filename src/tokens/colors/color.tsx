import React from 'react';
// Utility classes for token display components.
import clBase from '../../foundation/utility/cl-base.module.scss';

type ColorToken = {
  name?: string; 
  value: string;
  type: string;
  description?: string;
};

type ColorTokensProps = {
  colors: {
    name: string;
    variants: ColorToken[];
  }[];
};
export default function ColorTokens({
  colors,
}: ColorTokensProps) {
  return (
    <div>
      <h2 className={clBase['sb-title']}>Colors</h2>
      {colors.map((colorGroup) => (
        <div key={colorGroup.name}>
          <h2 className={clBase['sb-subtitle']}>{colorGroup.name}</h2>
          <ul className={clBase['sb-list']}>
            {colorGroup.variants.map((variant) => (
              <li
                className={`${clBase['sb-list__item']} token-card`}
                key={`${colorGroup.name}-${variant.name}`}
              >
                <span className={clBase['sb-list__label']}>{variant.name ?? colorGroup.name }</span>
                <span className={clBase['sb-list__value']}>{variant.value}</span>
                <span className={clBase['sb-list__custom-property']}>
                  <code className={clBase['sb-custom-property-name']}>
                    var(--color-{colorGroup.name
                      .toLowerCase()
                      .replace("emulsifyblue", "emulsify-blue")}{
                      variant.name ? `-${variant.name}` : ""
                    })
                  </code>
                </span>
                <span
                  className={clBase['sb-list__visualization']}
                  style={{
                    backgroundColor: `var(--color-${colorGroup.name
                      .toLowerCase()
                      .replace("emulsifyblue", "emulsify-blue")}${
                      variant.name ? `-${variant.name}` : ""
                    })`,
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
