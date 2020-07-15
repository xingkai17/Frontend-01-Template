# 每周总结可以写在这里

## 组件化
- 初始配置
  - 项目初始化
    - npm init 
  - 安装webpack 以及 热更新
    - npm i webpack --D
    - npm i webpack-dev-server --D
    - npm i webpack-cli --D
  - 安装bable
    - npm i babel-loader --D
    - npm i @bable/preset-env --D
    - npm i @babel/plugin-transform-react-jsx --D
    - npm i @babel/core --D
  - 配置webpack

```Javascript
    module.exports = {
        entry: './main.js'
    }
```

- jsx
  - 传入小写则是认为传递进来的是个字符串
  - 大写则认为是class function之类的
  - 在jsx里 父子树的构建是先子后父

- requestAnimationFrame
  - 需要调用requestAnimationFrame方法两次
  - requestAnimationFrame只运行一次传入的函数，需要再次更新就需要再次调用requestAnimationFrame
