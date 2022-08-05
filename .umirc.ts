import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/rcomponents/docs-dist/',
  publicPath: './',
  history: {
    type: 'hash', // 设置路由模式为 hash 模式，防止部署至 GitHub Pages 后刷新网页后出现 404 的情况发生.
  },
  title: 'rcomponents',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // more config: https://d.umijs.org/config
});
