function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from 'react';
import { useEffect, useState } from 'react';
import { ueditorConfig } from "./ueditorConfig";

/**
 * 富文本编辑器组件
 * @description 在百度富文本编辑器的基础上进行了一次封装
 * @author 千万样子
 */
var Ueditor = function Ueditor(props) {
  var config = props.config,
      setContent = props.setContent,
      initData = props.initData;
  var ueditorId = (props === null || props === void 0 ? void 0 : props.ueditorId) || 'ueditor_id';

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      ueditor = _useState2[0],
      setUeditor = _useState2[1];

  var instances = {};
  useEffect(function () {
    initUeditor();
  }, []);
  /**初始化编辑器 */

  var initUeditor = function initUeditor() {
    try {
      window.UE.delEditor(ueditorId);
      var editor = window.UE.getEditor(ueditorId, _objectSpread(_objectSpread({}, ueditorConfig), config));
      /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */

      window.UE.registerUI('simpleupload', function (editor1, uiName) {
        // console.log(editor1, uiName);
        // 创建一个 button
        var btn = new window.UE.ui.Button({
          // 按钮的名字
          name: uiName,
          // 提示
          title: '插入图片',
          // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
          cssRules: '',
          // 点击时执行的命令
          onclick: function onclick() {
            // 打开文件选择器
            var a = document.getElementById('ueditor_btn_file');

            if (a) {
              a.click();
            } // setEditModalType({ type: 'select' });

          }
        }); // 因为你是添加 button，所以需要返回这个 button

        return btn;
      }, undefined
      /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */
      , ueditorId);
      editor.ready(function () {
        if (initData) {
          editor.setContent(initData); //设置默认值/表单回显
        }
      });
      editor.addListener('contentChange', function () {
        setContent && setContent(editor.getContent());
      });
      setUeditor(editor);
    } catch (error) {
      //如果出错重新加载一次
      setTimeout(function () {
        initUeditor();
      }, 100);
    }
  };
  /**选择图片文件时触发 */


  var fileOnChange = function fileOnChange(e) {
    // setEditModalType({ type: 'select' });
    var file = new FormData();
    file.append('file', e.target.files[0]);
    var imgWidth = e.target.files[0]; //此处更据你的实际情况添加图片上传接口
    // uploadFile(file)
    //   .then((res) => {
    //     if (res.code === 200) {
    //       message.success(res.msg);
    //       ueditor.focus();
    //       ueditor.execCommand(
    //         'inserthtml',
    //         `<p><img style="max-width:100%" src="${res.data.url}" /></p>`,
    //       );
    //     } else {
    //       res && message.error(res.msg || `未知错误(code:${res.code})`);
    //     }
    //   })
    //   .catch(() => {
    //     message.error('上传失败');
    //   });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: ueditorId
  }), /*#__PURE__*/React.createElement("input", {
    type: 'file',
    id: 'ueditor_btn_file',
    accept: 'image/*',
    onChange: function onChange(e) {
      return fileOnChange(e);
    },
    style: {
      display: 'none'
    }
  }));
};

export default Ueditor;