// 获取url二级目录
const pathname = window.location.pathname;

// console.log(window.location);
//更多配置请参考:public\ueditor\ueditor.config.js
// 默认配置
export const ueditorConfig = {
  // 编辑器层级的基数,默认是900
  zIndex: '10',
  // 编辑器自动被内容撑高，该功能设置为false会影响图片大小编辑
  autoHeightEnabled: true,
  // 初始容器高度
  initialFrameHeight: 450,
  // 初始容器宽度
  initialFrameWidth: '100%',
  // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！部署在国外的服务器，如果无法访问，请自备梯子）
  serverUrl: `/travel/system/oss/upload`, //'http://35.201.165.105:8000/controller.php',
  // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
  //   UEDITOR_HOME_URL: `${pathname}/upload/uploadImage.do`,
  //   // 给编辑区域的iframe引入一个css文件
  //   iframeCssUrl: `${pathname}static/UEditor/themes/iframe.css`,
  //启用图片拉伸缩放
  imageScaleEnabled: true,
  // 图片操作的浮层开关
  imagePopup: false,
  // 打开右键菜单功能
  enableContextMenu: false,
  // 是否保持toolbar的位置不动,默认true
  autoFloatEnabled: false,
  // 工具栏上的所有的功能按钮和下拉框
  toolbars: [
    [
      // 'fullscreen', //全屏
      'source', //源代码
      // '|',
      'undo', //撤销
      'redo', //重做
      '|',
      'bold', //加粗
      'italic', //斜体
      'underline', //下划线
      'fontborder', //字符边框
      'strikethrough', //删除线
      'superscript', //上标
      'subscript', //下标
      'removeformat', //清除格式
      'formatmatch', //格式刷
      // 'autotypeset', //自动排版
      'blockquote', //引用
      'pasteplain', //纯文本粘贴模式
      '|',
      'forecolor', //文字颜色
      'backcolor', //文字背景色
      'insertorderedlist', //有序列表
      'insertunorderedlist', //无序列表
      'selectall', //全选
      // 'cleardoc', //清空文档
      '|',
      'rowspacingtop', //段前距
      'rowspacingbottom', //段后距
      'lineheight', //行间距
      '|',
      'customstyle', //自定义标题
      'paragraph', //段落格式
      //"fontfamily",//字体
      'fontsize', //字号
      '|',
      'directionalityltr', //从左向右输入
      'directionalityrtl', //从右向左输入
      'indent', //首行缩进
      '|',
      //对齐方式
      'justifyleft',
      'justifycenter',
      'justifyright',
      'justifyjustify',
      '|',
      'touppercase', //字母大小
      'tolowercase', //字母小写
      '|',
      'link', //添加链接
      'unlink', //取消链接
      // 'anchor', //锚点
      '|',
      'imagenone', //默认
      'imageleft', //图片左对齐
      'imageright', //图片右对齐
      'imagecenter', //图片居中
      '|',
      'simpleupload', //单图上传
      // 'insertimage', //多图上传
      // 'emotion', //表情
      // "scrawl",//涂鸦
      // "insertvideo",//视频
      // "music",//音乐
      // "attachment",//附件
      // "map",//百度地图
      // "gmap",//谷歌地图
      // 'insertframe', //插入网页
      // 'insertcode', //插入代码语言
      //"webapp",//百度应用
      'pagebreak', //分页
      'template', //模板
      'background', //背景
      '|',
      'horizontal', //横线
      // "date",//日期
      // "time",//时间
      'spechars', //特殊字符
      //"snapscreen",//截图（需要插件）
      //"wordimage",//图片转存
      // '|',
      //表格操作方法
      // 'inserttable',
      // 'deletetable',
      // 'insertparagraphbeforetable',
      // 'insertrow',
      // 'deleterow',
      // 'insertcol',
      // 'deletecol',
      // 'mergecells',
      // 'mergeright',
      // 'mergedown',
      // 'splittocells',
      // 'splittorows',
      // 'splittocols',
      // 'charts',
      '|',
      // "print",//打印
      // "preview",//预览 （有问题）
      // 'searchreplace', //查询替换
      // "drafts",//从草稿箱加载
      'help', //帮助
    ],
  ],
  /* 上传图片配置项 */
  // imageActionName: "uploadimage", /* 执行上传图片的action名称 */
  // imageFieldName: "imgFile", /* 提交的图片表单名称 */
  // imageMaxSize: 1024*1024*2, /* 上传大小限制，单位B */
  // imageAllowFiles: [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 上传图片格式显示 */
  // imageCompressEnable: true, /* 是否压缩图片,默认是true */
  //    imageCompressBorder: 1600, /* 图片压缩最长边限制 */
  //    imageInsertAlign: "none", /* 插入的图片浮动方式 */
  //    imageUrlPrefix: "/cms/static/userfiles/", /* 图片访问路径前缀 */
  //    imagePathFormat: "/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
  // 当鼠标放在工具栏上时显示的tooltip提示
  // labelMap: {
  //   simpleupload: '插入图片'
  // }
};
