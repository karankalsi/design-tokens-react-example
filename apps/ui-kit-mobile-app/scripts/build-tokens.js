const StyleDictionary = require('style-dictionary');
const changeCase = require('change-case');

StyleDictionary.registerTransform({
  name: 'size/pt',
  type: 'value',
  transitive: true,
  matcher: token => ['fontSizes', 'dimension', 'borderRadius', 'spacing'].includes(token.type),
  transformer: token => Number(String(token.value).replace(/[A-Z]+/ig, '')),
});

StyleDictionary.registerTransform({
  name: 'name/camel',
  type: 'name',
  transitive: true,
  transformer: (token) => changeCase.camelCase(token.path.join('.')).replace(/[\-\_]*/g, ''),
});

StyleDictionary.registerTransformGroup({
  name: 'ui-kit-mobile',
  transforms: [ 'size/pt', 'name/camel']
})

const sd = StyleDictionary.extend({
    "source": ["tokens/**/*.json"],
    "platforms": {
      "rn": {
        "transformGroup": ["ui-kit-mobile"],
        "buildPath": "apps/ui-kit-mobile-app/src/tokens/",
        "files": [
          {
            "destination": "index.ts",
            "format": "javascript/es6"
          }
        ]
      }
    }
});



sd.cleanAllPlatforms();
sd.buildAllPlatforms();
