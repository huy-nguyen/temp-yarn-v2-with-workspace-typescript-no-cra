To recreate the error:
- `yarn install`.
- `yarn workspace front-end develop`

Error:
```
The CLI moved into a separate package: webpack-cli
Please install 'webpack-cli' in addition to webpack itself to use the CLI
-> When using npm: npm i -D webpack-cli
-> When using yarn: yarn add -D webpack-cli
/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16147
    throw firstError;
    ^

Error: A package is trying to access another package without the second one being listed as a dependency of the first one

Required package: webpack-cli (via "webpack-cli/bin/config-yargs")
Required by: webpack-dev-server@virtual:0468a98b9e4350804dc0f750b9e37e2923fe0d666bac43d5662b7f5bf3ed94032d27d53e06b9d874fd3348340c6986732b2fb3fe6557551857764e895eb96c1f#npm:3.10.1 (via /Users/huy/Sites/temp-yar
n-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/bin/)

Require stack:
- /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/bin/
webpack-dev-server.js
    at Object.makeError (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:12425:24)
    at resolveToUnqualified (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16753:35)
    at resolveRequest (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16830:27)
    at Object.resolveRequest (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16898:26)
    at Function.module_1.Module._resolveFilename (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16130:34)
    at Function.module_1.Module._load (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.pnp.js:16015:40)

at Object.<anonymous> (/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/bin/webpack-dev-server.js:65:1)
    at Module._compile (internal/modules/cjs/loader.js:1144:30) {
  code: 'MODULE_NOT_FOUND',
  pnpCode: 'UNDECLARED_DEPENDENCY',
  data: {
    request: 'webpack-cli/bin/config-yargs',
    issuer: '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/bin/',
    issuerLocator: {
      name: 'webpack-dev-server',
      reference: 'virtual:0468a98b9e4350804dc0f750b9e37e2923fe0d666bac43d5662b7f5bf3ed94032d27d53e06b9d874fd3348340c6986732b2fb3fe6557551857764e895eb96c1f#npm:3.10.1'
    },
    dependencyName: 'webpack-cli',
    candidates: [
      'webpack-dev-server',
      'ansi-html',
      'bonjour',
      'chokidar',
      'compression',
      'connect-history-api-fallback',
      'debug',
      'del',
      'express',
      'html-entities',
      'http-proxy-middleware',
      'import-local',
      'internal-ip',
      'ip',
      'is-absolute-url',
      'killable',
      'loglevel',
      'opn',
      'p-retry',
      'portfinder',
      'schema-utils',
      'selfsigned',
      'semver',
      'serve-index',
      'sockjs',
      'sockjs-client',
      'spdy',
      'strip-ansi',
      'supports-color',
      'url',
      'webpack',
      'webpack-dev-middleware',
      'webpack-log',
      'ws',
      'yargs'
    ]
  },
  requireStack: [
    '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/bin/webpack-dev-server.js'
  ]
```
