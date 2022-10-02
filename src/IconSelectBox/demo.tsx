import { Input } from 'antd';
import React, { useState } from 'react';
// declare const window: Window & { UE: any };
import { TableOutlined } from '@ant-design/icons';
import IconSelectBox from '../IconSelectBox';
interface Props {

}
/**
 * 图标选择组件
 * @description 
 * @author 千万样子
 */
const InputIcon = (props: { style: any; }) => {
  const { style } = props;
  const [modalVisible, setModalVisible] = useState<any>(false);
  const [modalIconData, setModalIconData] = useState<any>(null);
  // 打开图标选择框
  const _openEditIconModal = () => {
    setModalVisible(true);
  };

  // 图标选择成功
  const _editIconSuccess = (value: any) => {
    setModalVisible(false);
    setModalIconData({});
  };
  return (
    <>
      <Input
        placeholder="请选择图标"
        style={style}
        allowClear
        addonAfter={
          <TableOutlined
            style={{ color: '#333' }}
            onClick={() => {
              _openEditIconModal();
            }}
          />
        }
      />
      <IconSelectBox
        onSuccess={_editIconSuccess}
        onCancel={() => {
          setModalVisible(false);
          setModalIconData({});
        }}
        modalVisible={modalVisible}
        data={modalIconData}
      />
      </>


  );
};

export default InputIcon;
