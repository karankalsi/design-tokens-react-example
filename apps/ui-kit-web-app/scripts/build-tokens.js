const StyleDictionary = require('style-dictionary');
const changeCase = require('change-case');

StyleDictionary.registerTransform({
  name: 'name/camel',
  type: 'name',
  transitive: true,
  transformer: (token) =>
    changeCase.camelCase(token.path.join('.')).replace(/[\-\_]*/g, ''),
});

StyleDictionary.registerTransformGroup({
  name: 'ui-kit',
  transforms: ['name/camel'],
});

const sd = StyleDictionary.extend({
  source: [
    'tokens/colors.json',
    'tokens/colors-component.json',
    'tokens/dimensions.json',
    'tokens/layout.json',
    'tokens/layout-component.json',
  ],
  platforms: {
    rn: {
      transformGroup: ['ui-kit'],
      buildPath: 'apps/ui-kit-web-app/src/tokens/',
      files: [
        {
          destination: 'index.ts',
          format: 'javascript/es6',
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
