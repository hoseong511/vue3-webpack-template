module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime'] // 비동기처리를 위한 플러그인
  ]
}