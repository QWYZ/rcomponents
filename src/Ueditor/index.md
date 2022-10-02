---
nav:
  title: Components
  path: /components
---

## Ueditor 富文本编辑器（百度）

Demo:

```tsx
import React,{useState} from 'react';
import { Ueditor } from 'qwyz-rcomponents';
import { Col, Row } from 'antd';
export default () => {
    const [config,setConfig] = useState({
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
                <Ueditor
                    ueditorId={'ueditor1'}
                    config={config}
                    initData={initData}
                    setContent={(e:any) => setContent(e)}
                ></Ueditor>
            </Col>
        </Row>
    )

}
```
<API src="../Ueditor/index.tsx"></API>