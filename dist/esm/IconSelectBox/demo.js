function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Input } from 'antd';
import React, { useState } from 'react'; // declare const window: Window & { UE: any };

import { TableOutlined } from '@ant-design/icons';
import IconSelectBox from "../IconSelectBox";

/**
 * 图标选择组件
 * @description 
 * @author 千万样子
 */
var InputIcon = function InputIcon(props) {
  var style = props.style;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      modalIconData = _useState4[0],
      setModalIconData = _useState4[1]; // 打开图标选择框


  var _openEditIconModal = function _openEditIconModal() {
    setModalVisible(true);
  }; // 图标选择成功


  var _editIconSuccess = function _editIconSuccess(value) {
    setModalVisible(false);
    setModalIconData({});
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u9009\u62E9\u56FE\u6807",
    style: style,
    allowClear: true,
    addonAfter: /*#__PURE__*/React.createElement(TableOutlined, {
      style: {
        color: '#333'
      },
      onClick: function onClick() {
        _openEditIconModal();
      }
    })
  }), /*#__PURE__*/React.createElement(IconSelectBox, {
    onSuccess: _editIconSuccess,
    onCancel: function onCancel() {
      setModalVisible(false);
      setModalIconData({});
    },
    modalVisible: modalVisible,
    data: modalIconData
  }));
};

export default InputIcon;