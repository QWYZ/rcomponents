import { message } from 'antd';
import React from 'react';
import { useEffect, useState } from 'react';
import { ueditorConfig } from './ueditorConfig';
declare const window: Window & { UE: any };

interface Props {
  initData?: any; //输入值
  setContent?: Function; //输入时触发
  config?: any; //UEditor配置
  ueditorId?: any;
}
/**
 * 富文本编辑器组件
 * @description 在百度富文本编辑器的基础上进行了一次封装
 * @author 千万样子
 */
const Ueditor: React.FC<Props> = (props) => {
  const { config, setContent, initData } = props;
  
  const ueditorId = props?.ueditorId || 'ueditor_id';
  const [ueditor, setUeditor] = useState<any>(null);
  let instances: any = {};
  useEffect(() => {
    initUeditor();
  }, []);

  /**初始化编辑器 */
  const initUeditor = () => {
    try {
      window.UE.delEditor(ueditorId);
      let editor = window.UE.getEditor(ueditorId, {
        ...ueditorConfig,
        ...config,
      });
      /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      window.UE.registerUI(
        'simpleupload',
        function (editor1: any, uiName: any) {
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
            onclick: () => {
              // 打开文件选择器
              let a = document.getElementById('ueditor_btn_file');
              if (a) {
                a.click();
              }
              // setEditModalType({ type: 'select' });
            },
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        undefined /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        ueditorId,
      );
      editor.ready(() => {
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
      setTimeout(() => {
        initUeditor();
      }, 100);
    }
  };

  /**选择图片文件时触发 */
  const fileOnChange = (e: any) => {
    // setEditModalType({ type: 'select' });
    const file = new FormData();
    file.append('file', e.target.files[0]);
    let imgWidth = e.target.files[0];
    //此处更据你的实际情况添加图片上传接口
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

  return (
    <>
      <div id={ueditorId} ></div>
      <input
        type={'file'}
        id={'ueditor_btn_file'}
        accept={'image/*'}
        onChange={(e) => fileOnChange(e)}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default Ueditor;
