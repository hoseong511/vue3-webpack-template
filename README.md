  <strong><h1 align="center">Vue3-WebPack-Template</h1></strong>
  <div align="center">
    <img src="https://kr.vuejs.org/images/logo.png" width= 20%; alt="Vue.js" />
    &nbsp;
    <img src="https://camo.githubusercontent.com/b0573f87b0786eda63c76f2a9a1358e7a653783c25c03c6c908a00b70c713d78/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" width= 20%; alt="webpack" />
    &nbsp;
    <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" width= 40%; alt="BABEL" />
  </div>
  <br>

## **CONTENTS**
  01. [Default](https://github.com/hoseong511/vue3-webpack-template/tree/main)
  02. [Eslint](https://github.com/hoseong511/vue3-webpack-template/tree/eslint)

## **Default Webpack template**
```cmd
npx degit hoseong511/vue3-webpack-template [Project name]
cd [Project name]
```
## Run
```npm run dev```: webpack-dev-server --mode development
## Build
```npm run build```: webpack --mode production## package.json
  ```json
  {
    "devDependencies": {
      "@babel/core": "^7.14.3",
      "@babel/plugin-transform-runtime": "^7.14.3",
      "@babel/preset-env": "^7.14.2",
      "@vue/compiler-sfc": "^3.1.1",
      "autoprefixer": "^10.2.5",
      "babel-eslint": "^10.1.0",
      "babel-loader": "^8.2.2",
      "copy-webpack-plugin": "^8.1.1",
      "css-loader": "^5.2.5",
      "file-loader": "^6.2.0",
      "html-webpack-plugin": "^5.3.1",
      "postcss": "^8.3.0",
      "postcss-loader": "^5.3.0",
      "sass": "^1.33.0",
      "sass-loader": "^11.1.1",
      "style-loader": "^2.0.0",
      "vue-loader": "^16.2.0",
      "vue-style-loader": "^4.1.3",
      "webpack": "^5.37.1",
      "webpack-cli": "^4.7.0",
      "webpack-dev-server": "^4.0.0-beta.3"
    },
    "browserslist": [
      "> 1%",
      "last 2 versions"
    ],
    "dependencies": {
      "vue": "^3.1.1"
    }
  }
  ```
## webpack.config.js
  ```js
  {
    const path = require('path');
    const HtmlPlugin = require('html-webpack-plugin');
    const CopyPlugin = require('copy-webpack-plugin');
    const { VueLoaderPlugin } = require('vue-loader');
    //export
    module.exports = {
      resolve: {
        extensions: ['.js', '.vue'], // ????????? ????????????
        alias: { // ?????? ??????
          '~': path.join(__dirname, 'src'),
          'assets': path.join(__dirname, 'src/assets')
        }
      },

      // ????????? ??????????????? ???????????? ?????????
      entry: './src/main.js',
      output: {
        // path: path.resolve(__dirname, 'dist'), // output??? path??? ??????????????? ??????!
        // filename: 'main.js', // default-> dist
        clean: true
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            use: 'vue-loader',
          },
          {
            test: /\.s?css$/,
            use: [
              'vue-style-loader', //vue style
              'style-loader',
              'css-loader', //3
              'postcss-loader', //2  // ????????? ????????????.
              'sass-loader' // 1
            ]
          },
          {
            test: /\.js$/,
            use: [
              'babel-loader'
            ]
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            use: 'file-loader'
          }
        ]
      },
      plugins: [
        new HtmlPlugin({
          template: './index.html'
        }),
        new CopyPlugin({
          patterns: [
            { from: 'static'}
          ]
        }),
        new VueLoaderPlugin()
      ],
      devServer: {
        host: 'localhost'
      }
    } 
  }
  ```
  ## .babelrc.js
  ```js
  module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
      ['@babel/plugin-transform-runtime'] // ?????????????????? ?????? ????????????
    ]
  }
  ```
  