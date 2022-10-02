import React from 'react';
import "./index.less";

var StatisticCard = function StatisticCard(props) {
  var icon = props.icon,
      title1 = props.title1,
      title2 = props.title2,
      _props$background = props.background1,
      background1 = _props$background === void 0 ? '#e4ecff' : _props$background,
      _props$background2 = props.background2,
      background2 = _props$background2 === void 0 ? '#4d7cfe' : _props$background2,
      _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width;
  return /*#__PURE__*/React.createElement("div", {
    className: "data-statistics card_box",
    style: {
      width: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card_box_cir",
    style: {
      background: background1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card_box_cir1",
    style: {
      background: background2
    }
  }, icon)), /*#__PURE__*/React.createElement("div", {
    className: "card_box_txt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sp1"
  }, title1), /*#__PURE__*/React.createElement("span", {
    className: "sp2"
  }, title2)));
};

export default StatisticCard;