module.exports = {
  native: { expo: true },
  replaceAttrValues: { currentColor: '{props.fill || "currentColor"}' },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });
    return typeScriptTpl.ast`
    import React from 'react';
    import { Svg } from 'react-sketchapp';
    const ${componentName} = (props: any) => ${jsx};
    export default ${componentName};
  `;
  }
};
