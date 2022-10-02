import React from 'react';
interface Props {
    initData?: any;
    setContent?: Function;
    config?: any;
    ueditorId?: any;
}
/**
 * 富文本编辑器组件
 * @description 在百度富文本编辑器的基础上进行了一次封装
 * @author 千万样子
 */
declare const Ueditor: React.FC<Props>;
export default Ueditor;
