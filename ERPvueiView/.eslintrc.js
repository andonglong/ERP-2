// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
     // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // 禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 文件以单一的换行符结束
    'eol-last': 0,
    // 缩进风格
    'indent': 0,
    
    'no-tabs': 0,
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': 0,
    // nodejs 处理错误
    'handle-callback-err': 0,
    // 禁止不必要的嵌套
    'no-unneeded-ternary': 0,
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': 0,
    // 必须使用全等
    'eqeqeq': 0
  }
}
