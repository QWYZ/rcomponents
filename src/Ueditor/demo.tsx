import React, { useState } from 'react';
import { Col, Row, Input } from 'antd';
import UEditor from '.';

const UeditorDemo = () => {
    const [config] = useState({
        initialFrameWidth: '100%',
        initialFrameHeight: 400,
    });
    const [initData] = useState('');
    //富文本失焦就触发setContent函数设置表单的content内容
    const setContent = (e:any) => {
        console.log('setContent--home', e);

    };

    return (
        <Row>
            <Col span={24}>
                <UEditor
                    ueditorId={'ueditor1'}
                    config={config}
                    initData={initData}
                    setContent={(e:any) => setContent(e)}
                ></UEditor>
            </Col>
        </Row>
    )

}

export default UeditorDemo