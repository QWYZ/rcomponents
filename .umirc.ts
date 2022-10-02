import { defineConfig } from 'dumi';
const path = require("path");  //node环境当前路径
export default defineConfig({
  base: '/',
  publicPath: './',
  history: {
    type: 'hash', // 设置路由模式为 hash 模式，防止部署至 GitHub Pages 后刷新网页后出现 404 的情况发生.
  },
  // dynamicImport:{},
  title: 'rcomponents',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  headScripts:[
    // public 目录下所有文件会被 copy 到输出路径。
    {type:'text/javascript', src: '/ueditor/ueditor.config.js',charset:"utf-8"},
    {type:'text/javascript', src: '/ueditor/ueditor.all.js',charset:"utf-8"},
    {type:'text/javascript', src: '/ueditor/lang/zh-cn/zh-cn.js'},
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ]
  ]
});
