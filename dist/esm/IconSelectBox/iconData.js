function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 菜单图标库
 */
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import * as Icons from '@ant-design/icons'; //使用试例: <Icon type="icon-system" style={{ fontSize: '16px', color: '#08c' }} />

var Icon = createFromIconfontCN({
  scriptUrl: ['//at.alicdn.com/t/font_2546793_9mt1zfi2wcn.js']
});
/**方向性图标关键字 */

var directionIcons = ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'vertical-left', 'vertical-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold', 'border-bottom', 'border-horizontal', 'border-inner', 'border-left', 'border-right', 'border-top', 'border-verticle', 'pic-center', 'pic-left', 'pic-right', 'radius-bottomleft', 'radius-bottomright', 'radius-upleft', 'radius-upright', 'fullscreen', 'fullscreen-exit'];
/**指示性图标关键字 */

var suggestionIcons = ['question', 'question-circle', 'plus', 'plus-circle', 'pause', 'pause-circle', 'minus', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle', 'exclamation', 'exclamation-circle', 'close', 'close-circle', 'close-square', 'check', 'check-circle', 'check-square', 'clock-circle', 'warning', 'issues-close', 'stop'];
/**编辑类图标关键字 */

var editIcons = ['edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight', 'align-center', 'align-left', 'align-right', 'bg-colors', 'bold', 'italic', 'underline', 'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out', 'font-colors', 'font-size', 'line-height', 'colum-height', 'dash', 'small-dash', 'sort-ascending', 'sort-descending', 'drag', 'ordered-list', 'radius-setting'];
/**数据类图标 */

var dataIcons = ['area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart', 'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund', 'sliders'];
/**网站通用图标 */

var webIcons = ['group', 'bug', 'console-sql', 'control', 'ci', 'account-book', 'aim', 'lock', 'unlock', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-word', 'file-excel', 'file-jpg', 'file-ppt', 'file-markdown', 'file-add', 'folder', 'folder-open', 'folder-add', 'hdd', 'frown', 'meh', 'smile', 'inbox', 'laptop', 'appstore', 'link', 'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tags', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters', 'cloud-upload', 'star', 'heart', 'environment', 'eye', 'camera', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'dislike', 'message', 'pay-circle', 'calculator', 'pushpin', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api', 'fork', 'dashboard', 'table', 'profile', 'alert', 'audit', 'branches', 'build', 'border', 'crown', 'experiment', 'fire', 'money-collect', 'property-safety', 'read', 'reconciliation', 'rest', 'security-scan', 'insurance', 'interation', 'safety-certificate', 'project', 'thunderbolt', 'block', 'cluster', 'deployment-unit', 'dollar', 'euro', 'pound', 'file-done', 'file-exclamation', 'file-protect', 'file-search', 'file-sync', 'gateway', 'gold', 'robot', 'shopping'];
/**品牌和标识 */

var logoIcons = ['android', 'apple', 'windows', 'ie', 'chrome', 'github', 'aliwangwang', 'dingding', 'weibo-square', 'weibo-circle', 'taobao-circle', 'html5', 'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle', 'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium', 'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen', 'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design', 'aliyun', 'zhihu', 'slack', 'slack-square', 'behance', 'behance-square', 'dribbble', 'dribbble-square', 'instagram', 'yuque', 'alibaba', 'yahoo'];
/**网站通用图标 */

var webIconData = {
  group: /*#__PURE__*/React.createElement(Icons.GroupOutlined, null),
  compass: /*#__PURE__*/React.createElement(Icons.CompassOutlined, null),
  bug: /*#__PURE__*/React.createElement(Icons.BugOutlined, null),
  'console-sql': /*#__PURE__*/React.createElement(Icons.ConsoleSqlOutlined, null),
  control: /*#__PURE__*/React.createElement(Icons.ControlOutlined, null),
  ci: /*#__PURE__*/React.createElement(Icons.CiOutlined, null),
  bell: /*#__PURE__*/React.createElement(Icons.BellOutlined, null),
  read: /*#__PURE__*/React.createElement(Icons.ReadOutlined, null),
  mail: /*#__PURE__*/React.createElement(Icons.MailOutlined, null),
  'deployment-unit': /*#__PURE__*/React.createElement(Icons.DeploymentUnitOutlined, null),
  cluster: /*#__PURE__*/React.createElement(Icons.ClusterOutlined, null),
  star: /*#__PURE__*/React.createElement(Icons.StarOutlined, null),
  team: /*#__PURE__*/React.createElement(Icons.TeamOutlined, null),
  project: /*#__PURE__*/React.createElement(Icons.ProjectOutlined, null),
  idcard: /*#__PURE__*/React.createElement(Icons.IdcardOutlined, null),
  lock: /*#__PURE__*/React.createElement(Icons.LockOutlined, null),
  unlock: /*#__PURE__*/React.createElement(Icons.UnlockOutlined, null),
  bars: /*#__PURE__*/React.createElement(Icons.BarsOutlined, null),
  book: /*#__PURE__*/React.createElement(Icons.BookOutlined, null),
  calendar: /*#__PURE__*/React.createElement(Icons.CalendarOutlined, null),
  audit: /*#__PURE__*/React.createElement(Icons.AuditOutlined, null),
  dashboard: /*#__PURE__*/React.createElement(Icons.DashboardOutlined, null),
  schedule: /*#__PURE__*/React.createElement(Icons.ScheduleOutlined, null),
  setting: /*#__PURE__*/React.createElement(Icons.SettingOutlined, null),
  home: /*#__PURE__*/React.createElement(Icons.HomeOutlined, null),
  table: /*#__PURE__*/React.createElement(Icons.TableOutlined, null),
  'video-camera': /*#__PURE__*/React.createElement(Icons.VideoCameraOutlined, null),
  smile: /*#__PURE__*/React.createElement(Icons.SmileOutlined, null),
  'security-scan': /*#__PURE__*/React.createElement(Icons.SecurityScanOutlined, null),
  alert: /*#__PURE__*/React.createElement(Icons.AlertOutlined, null),
  aim: /*#__PURE__*/React.createElement(Icons.AimOutlined, null),
  'account-book': /*#__PURE__*/React.createElement(Icons.AccountBookOutlined, null),
  camera: /*#__PURE__*/React.createElement(Icons.CameraOutlined, null),
  cloud: /*#__PURE__*/React.createElement(Icons.CloudOutlined, null),
  message: /*#__PURE__*/React.createElement(Icons.MessageOutlined, null),
  qrcode: /*#__PURE__*/React.createElement(Icons.QrcodeOutlined, null),
  profile: /*#__PURE__*/React.createElement(Icons.ProfileOutlined, null),
  user: /*#__PURE__*/React.createElement(Icons.UserOutlined, null),
  crown: /*#__PURE__*/React.createElement(Icons.CrownOutlined, null),
  thunderbolt: /*#__PURE__*/React.createElement(Icons.ThunderboltOutlined, null),
  'cloud-download': /*#__PURE__*/React.createElement(Icons.CloudDownloadOutlined, null),
  code: /*#__PURE__*/React.createElement(Icons.CodeOutlined, null),
  'credit-card': /*#__PURE__*/React.createElement(Icons.CreditCardOutlined, null),
  delete: /*#__PURE__*/React.createElement(Icons.DeleteOutlined, null),
  desktop: /*#__PURE__*/React.createElement(Icons.DesktopOutlined, null),
  download: /*#__PURE__*/React.createElement(Icons.DownloadOutlined, null),
  ellipsis: /*#__PURE__*/React.createElement(Icons.EllipsisOutlined, null),
  contacts: /*#__PURE__*/React.createElement(Icons.ContactsOutlined, null),
  file: /*#__PURE__*/React.createElement(Icons.FileOutlined, null),
  'file-text': /*#__PURE__*/React.createElement(Icons.FileTextOutlined, null),
  'file-unknown': /*#__PURE__*/React.createElement(Icons.FileUnknownOutlined, null),
  'file-pdf': /*#__PURE__*/React.createElement(Icons.FilePdfOutlined, null),
  'file-word': /*#__PURE__*/React.createElement(Icons.FileWordOutlined, null),
  'file-excel': /*#__PURE__*/React.createElement(Icons.FileExcelOutlined, null),
  'file-jpg': /*#__PURE__*/React.createElement(Icons.FileJpgOutlined, null),
  'file-ppt': /*#__PURE__*/React.createElement(Icons.FilePptOutlined, null),
  'file-markdown': /*#__PURE__*/React.createElement(Icons.FileMarkdownOutlined, null),
  'file-add': /*#__PURE__*/React.createElement(Icons.FileAddOutlined, null),
  'folder': /*#__PURE__*/React.createElement(Icons.FolderOutlined, null),
  'folder-open': /*#__PURE__*/React.createElement(Icons.FolderOpenOutlined, null),
  'folder-add': /*#__PURE__*/React.createElement(Icons.FolderAddOutlined, null),
  hdd: /*#__PURE__*/React.createElement(Icons.HddOutlined, null),
  frown: /*#__PURE__*/React.createElement(Icons.FrownOutlined, null),
  meh: /*#__PURE__*/React.createElement(Icons.MehOutlined, null),
  inbox: /*#__PURE__*/React.createElement(Icons.InboxOutlined, null),
  laptop: /*#__PURE__*/React.createElement(Icons.LaptopOutlined, null),
  appstore: /*#__PURE__*/React.createElement(Icons.AppstoreOutlined, null),
  link: /*#__PURE__*/React.createElement(Icons.LinkOutlined, null),
  mobile: /*#__PURE__*/React.createElement(Icons.MobileOutlined, null),
  notification: /*#__PURE__*/React.createElement(Icons.NotificationOutlined, null),
  'paper-clip': /*#__PURE__*/React.createElement(Icons.PaperClipOutlined, null),
  picture: /*#__PURE__*/React.createElement(Icons.PictureOutlined, null),
  poweroff: /*#__PURE__*/React.createElement(Icons.PoweroffOutlined, null),
  reload: /*#__PURE__*/React.createElement(Icons.ReloadOutlined, null),
  'share-alt': /*#__PURE__*/React.createElement(Icons.ShareAltOutlined, null),
  'shopping-cart': /*#__PURE__*/React.createElement(Icons.ShoppingCartOutlined, null),
  tablet: /*#__PURE__*/React.createElement(Icons.TabletOutlined, null),
  tag: /*#__PURE__*/React.createElement(Icons.TagOutlined, null),
  tags: /*#__PURE__*/React.createElement(Icons.TagsOutlined, null),
  'to-top': /*#__PURE__*/React.createElement(Icons.ToTopOutlined, null),
  upload: /*#__PURE__*/React.createElement(Icons.UploadOutlined, null),
  loading: /*#__PURE__*/React.createElement(Icons.LoadingOutlined, null),
  'loading-3-quarters': /*#__PURE__*/React.createElement(Icons.Loading3QuartersOutlined, null),
  'cloud-upload': /*#__PURE__*/React.createElement(Icons.CloudUploadOutlined, null),
  heart: /*#__PURE__*/React.createElement(Icons.HeartOutlined, null),
  environment: /*#__PURE__*/React.createElement(Icons.EnvironmentOutlined, null),
  eye: /*#__PURE__*/React.createElement(Icons.EyeOutlined, null),
  save: /*#__PURE__*/React.createElement(Icons.SaveOutlined, null),
  solution: /*#__PURE__*/React.createElement(Icons.SolutionOutlined, null),
  phone: /*#__PURE__*/React.createElement(Icons.PhoneOutlined, null),
  filter: /*#__PURE__*/React.createElement(Icons.FilterOutlined, null),
  exception: /*#__PURE__*/React.createElement(Icons.ExceptionOutlined, null),
  export: /*#__PURE__*/React.createElement(Icons.ExportOutlined, null),
  'customer-service': /*#__PURE__*/React.createElement(Icons.CustomerServiceOutlined, null),
  scan: /*#__PURE__*/React.createElement(Icons.ScanOutlined, null),
  like: /*#__PURE__*/React.createElement(Icons.LikeOutlined, null),
  dislike: /*#__PURE__*/React.createElement(Icons.DislikeOutlined, null),
  'pay-circle': /*#__PURE__*/React.createElement(Icons.PayCircleOutlined, null),
  calculator: /*#__PURE__*/React.createElement(Icons.CalculatorOutlined, null),
  pushpin: /*#__PURE__*/React.createElement(Icons.PushpinOutlined, null),
  bulb: /*#__PURE__*/React.createElement(Icons.BulbOutlined, null),
  select: /*#__PURE__*/React.createElement(Icons.SelectOutlined, null),
  switcher: /*#__PURE__*/React.createElement(Icons.SwitcherOutlined, null),
  rocket: /*#__PURE__*/React.createElement(Icons.RocketOutlined, null),
  disconnect: /*#__PURE__*/React.createElement(Icons.DisconnectOutlined, null),
  database: /*#__PURE__*/React.createElement(Icons.DatabaseOutlined, null),
  barcode: /*#__PURE__*/React.createElement(Icons.BarcodeOutlined, null),
  hourglass: /*#__PURE__*/React.createElement(Icons.HourglassOutlined, null),
  key: /*#__PURE__*/React.createElement(Icons.KeyOutlined, null),
  flag: /*#__PURE__*/React.createElement(Icons.FlagOutlined, null),
  layout: /*#__PURE__*/React.createElement(Icons.LayoutOutlined, null),
  printer: /*#__PURE__*/React.createElement(Icons.PrinterOutlined, null),
  sound: /*#__PURE__*/React.createElement(Icons.SoundOutlined, null),
  usb: /*#__PURE__*/React.createElement(Icons.UsbOutlined, null),
  skin: /*#__PURE__*/React.createElement(Icons.SkinOutlined, null),
  tool: /*#__PURE__*/React.createElement(Icons.ToolOutlined, null),
  wifi: /*#__PURE__*/React.createElement(Icons.WifiOutlined, null),
  car: /*#__PURE__*/React.createElement(Icons.CarOutlined, null),
  'user-add': /*#__PURE__*/React.createElement(Icons.FlagOutlined, null),
  'user-delete': /*#__PURE__*/React.createElement(Icons.UserAddOutlined, null),
  'usergroup-add': /*#__PURE__*/React.createElement(Icons.UsergroupAddOutlined, null),
  'usergroup-delete': /*#__PURE__*/React.createElement(Icons.UsergroupDeleteOutlined, null),
  man: /*#__PURE__*/React.createElement(Icons.ManOutlined, null),
  woman: /*#__PURE__*/React.createElement(Icons.WomanOutlined, null),
  shop: /*#__PURE__*/React.createElement(Icons.ShopOutlined, null),
  'money-collect': /*#__PURE__*/React.createElement(Icons.MoneyCollectOutlined, null)
};
/**数据类图标 */

var dataIconData = {
  'area-chart': /*#__PURE__*/React.createElement(Icons.AreaChartOutlined, null),
  'pie-chart': /*#__PURE__*/React.createElement(Icons.PieChartOutlined, null),
  'bar-chart': /*#__PURE__*/React.createElement(Icons.BarChartOutlined, null),
  'dot-chart': /*#__PURE__*/React.createElement(Icons.DotChartOutlined, null),
  'line-chart': /*#__PURE__*/React.createElement(Icons.LineChartOutlined, null),
  'radar-chart': /*#__PURE__*/React.createElement(Icons.RadarChartOutlined, null),
  'heat-map': /*#__PURE__*/React.createElement(Icons.HeatMapOutlined, null),
  fall: /*#__PURE__*/React.createElement(Icons.FallOutlined, null),
  rise: /*#__PURE__*/React.createElement(Icons.RiseOutlined, null),
  stock: /*#__PURE__*/React.createElement(Icons.StockOutlined, null),
  'box-plot': /*#__PURE__*/React.createElement(Icons.BoxPlotOutlined, null),
  fund: /*#__PURE__*/React.createElement(Icons.FundOutlined, null),
  sliders: /*#__PURE__*/React.createElement(Icons.SlidersOutlined, null)
};
/**指示性图标 */

var suggestionIconData = {
  'check-circle': /*#__PURE__*/React.createElement(Icons.CheckCircleOutlined, null),
  warning: /*#__PURE__*/React.createElement(Icons.WarningOutlined, null)
};
/**编辑类图标 */

var editIconData = {
  form: /*#__PURE__*/React.createElement(Icons.FormOutlined, null)
};
/**方向性图标 */

var directionIconData = {
  login: /*#__PURE__*/React.createElement(Icons.LoginOutlined, null),
  logout: /*#__PURE__*/React.createElement(Icons.LogoutOutlined, null),
  'step-backward': /*#__PURE__*/React.createElement(Icons.StepBackwardOutlined, null),
  'step-forward': /*#__PURE__*/React.createElement(Icons.StepForwardOutlined, null),
  'fast-backward': /*#__PURE__*/React.createElement(Icons.FastBackwardOutlined, null),
  'fast-forward': /*#__PURE__*/React.createElement(Icons.FastForwardOutlined, null),
  shrink: /*#__PURE__*/React.createElement(Icons.ShrinkOutlined, null),
  'arrows-alt': /*#__PURE__*/React.createElement(Icons.ArrowsAltOutlined, null),
  down: /*#__PURE__*/React.createElement(Icons.DownOutlined, null),
  up: /*#__PURE__*/React.createElement(Icons.UpOutlined, null),
  left: /*#__PURE__*/React.createElement(Icons.LeftOutlined, null),
  right: /*#__PURE__*/React.createElement(Icons.RightOutlined, null),
  'caret-up': /*#__PURE__*/React.createElement(Icons.CaretUpOutlined, null),
  'caret-down': /*#__PURE__*/React.createElement(Icons.CaretDownOutlined, null),
  'caret-left': /*#__PURE__*/React.createElement(Icons.CaretLeftOutlined, null),
  'caret-right': /*#__PURE__*/React.createElement(Icons.CaretRightOutlined, null),
  'up-circle': /*#__PURE__*/React.createElement(Icons.UpCircleOutlined, null),
  'down-circle': /*#__PURE__*/React.createElement(Icons.DownCircleOutlined, null),
  'left-circle': /*#__PURE__*/React.createElement(Icons.LeftCircleOutlined, null),
  'right-circle': /*#__PURE__*/React.createElement(Icons.RightCircleOutlined, null)
};
/**品牌和标识 */

var logoData = {
  'wechat': /*#__PURE__*/React.createElement(Icons.WechatOutlined, null),
  'alipay': /*#__PURE__*/React.createElement(Icons.AlipayOutlined, null),
  'qq': /*#__PURE__*/React.createElement(Icons.QqOutlined, null)
};
/**全部图标 */

var iconData = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, webIconData), dataIconData), suggestionIconData), editIconData), directionIconData), logoData);

export { directionIcons, suggestionIcons, editIcons, dataIcons, webIcons, logoIcons, webIconData, dataIconData, suggestionIconData, editIconData, directionIconData, iconData, logoData };