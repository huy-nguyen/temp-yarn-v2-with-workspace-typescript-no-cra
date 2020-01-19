To recreate the error:
- `yarn install`.
- `yarn workspace front-end develop`

Error:
```
ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client/overlay.js
Module not found: Error: Can't resolve 'ansi-html' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-
34b49b6a2b-1.zip/node_modules/webpack-dev-server/client'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/overlay.js 4:15-35
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts

ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client/overlay.js
Module not found: Error: Can't resolve 'html-entities' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.1
0.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/client'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/overlay.js 6:15-39
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts

ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client/utils/log.js
Module not found: Error: Can't resolve 'loglevel' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-3
4b49b6a2b-1.zip/node_modules/webpack-dev-server/client/utils'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/utils/log.js 3:10-29
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000
ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client/clients/SockJSClient.js
Module not found: Error: Can't resolve 'sockjs-client/dist/sockjs' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-se
rver-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/client/clients'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/clients/SockJSClient.js 24:13-49
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/socket.js
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts

ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000
Module not found: Error: Can't resolve 'strip-ansi' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1
-34b49b6a2b-1.zip/node_modules/webpack-dev-server/client'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000 6:16-37
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts

ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000
Module not found: Error: Can't resolve 'webpack/hot' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.
1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/client'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000 76:17-67
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts

ERROR in /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client/utils/reloadApp.js
Module not found: Error: Can't resolve 'webpack/hot/emitter' in '/Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-n
pm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/client/utils'
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent/utils/reloadApp.js 21:21-51
 @ /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-server/cli
ent?http://localhost:9000
 @ multi /Users/huy/Sites/temp-yarn-v2-with-workspace-typescript-no-cra/.yarn/$$virtual/webpack-dev-server-virtual-99710fb957/0/cache/webpack-dev-server-npm-3.10.1-34b49b6a2b-1.zip/node_modules/webpack-dev-serv
er/client?http://localhost:9000 ./src/index.ts
```
