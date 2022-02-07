- npm init
- npm install --save-dev typescript [cài đặt typescript xem thêm tài liệu <a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html">tại đây</a> !]
- touch tsconfig.json [tham khảo <a href="https://github.com/dangtinh97/nodejs-example/blob/master/tsconfig.json">tại đây</a>]
- npm install --save-dev webpack webpack-cli ts-loader webpack-node-externals
- touch webpack.config.js [tham khảo <a href="https://github.com/dangtinh97/nodejs-example/blob/master/webpack.config.js">tại đây</a>]
- npm install npm-run-all nodemon --save-dev
- mkdir dist
- mkdir src
- cd src
- touch index.ts
- cd ..
### update file package.json 
- main = dist/server.js
<code>
- "scripts": {
  "start": "node dist/server.js",
  "test": "echo \"Error: no test specified\" && exit 1",
  "build" : "rm -rf dist/ && webpack",
  "dev": "npm-run-all --parallel watch:server watch:build",
  "watch:build": "webpack --watch",
  "watch:server": "nodemon \"./dist/server.js\" --watch \"./dist\""
  },
</code>
- --
npm i dotenv express compression helmet net http body-parser
npm i --dev @types/express @types/compression

- --
RUN PROJECT
- npm install
- SERVER: npm start
- DEVELOPMENT: npm run dev
