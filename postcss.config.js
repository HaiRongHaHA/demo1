const pxtorem = require('postcss-pxtorem')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    }),
    pxtorem({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [
        /^html$/,
        /^.van-/,
      ]
    })
  ]
}