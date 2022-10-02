import React from 'react';
import { Form, Modal, Radio, Space, Tabs, Tooltip } from 'antd';
import { useState } from 'react';
import {
  dataIcons,
  directionIcons,
  editIcons,
  iconData,
  logoIcons,
  suggestionIcons,
  webIcons,
} from './iconData.js';
import { RenderFunction } from 'antd/lib/tooltip/index.js';
interface Props {

}
/**
 * 图标选择组件
 * @description 
 * @author 千万样子
 */
const IconSelectBox = (props: { modalVisible: any; onSuccess?: any; onCancel?: any; data?: any; }) => {
  
  const { modalVisible, onSuccess, onCancel, data } = props;
  // console.log('data---ss-s--',data);

  const [formVals, setFormVals] = useState({
    icon: data?.icon || null,
  });
  const [options, setOption] = useState(webIcons);
  const btnStyle = {
    fontSize: 20,
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const [form] = Form.useForm();
  if (!props.modalVisible) {
    return null;
  } //增加此行判断避免浪费渲染资源

  const edit = async (values: { icon: any; }) => {
    onSuccess(values.icon);
  };

  const onChangeTabs = (activeKey: any) => {
    switch (activeKey) {
      case '1':
        setOption(webIcons);
        break;
      case '2':
        setOption(suggestionIcons);
        break;
      case '3':
        setOption(editIcons);
        break;
      case '4':
        setOption(directionIcons);
        break;
      case '5':
        setOption(dataIcons);
        break;
      case '6':
        setOption(logoIcons);
        break;
      default:
        setOption(webIcons);
        break;
    }
  };
  //点击确认按钮，先做表单校验
  const handleOk = async () => {
    form
      .validateFields()
      .then((values) => {
        edit(values);
      })
      .catch((info) => {});
  };

  return (
    <Modal
      destroyOnClose
      closable={false}
      title={false} //{'选择图标'}
      visible={modalVisible}
      okText="确认"
      cancelText="取消"
      onCancel={() => onCancel()}
      onOk={handleOk}
      width={'50vw'}
    >
      <Tabs defaultActiveKey="1" onChange={onChangeTabs}>
        <Tabs.TabPane tab="网站通用图标" key="1">
          {' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="指示性图标" key="2">
          {' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="编辑类图标" key="3">
          {' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="方向性图标" key="4">
          {' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="数据类图标" key="5">
          {' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="品牌和标识" key="6">
          {' '}
        </Tabs.TabPane>
      </Tabs>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          icon: formVals?.icon || null,
        }}
      >
        <Form.Item
          name={'icon'}
          // getValueFromEvent={(e)=>{console.log('getValueFromEvent',e); return e.target.value} }
          rules={[{ required: true, message: '请选择图标' }]}
        >
          <Radio.Group>
            <Space direction={'horizontal'} wrap>
              {
                //配合tab栏使用
                options.map(
                  (item: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | RenderFunction | null | undefined, index: React.Key | null | undefined) =>
                    iconData[item] && (
                      <Radio.Button key={index} value={item} style={btnStyle}>
                        <Tooltip title={item} placement="bottom">
                          {iconData[item]}{' '}
                        </Tooltip>
                      </Radio.Button>
                    ),
                )
              }
            </Space>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default IconSelectBox;
