---
nav:
  title: Components
  path: /components
---

## StatisticCard 统计卡片

Demo:

```tsx
import React from 'react';
import { Row, Col } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { StatisticCard } from 'qwyz-rcomponents';

export default () => (<Row gutter={15} style={{padding:10, background:'gray'}}>
                    <Col span={6}>
                        <StatisticCard title1={'标题1'} title2={'标题2'} background1={'#e4ecff'} background2={'#4d7cfe'} icon={<StarOutlined style={{ color: '#fff', fontSize: 24 }} />} />
                    </Col>
                    <Col span={6}>
                        <StatisticCard title1={'74638.83'} title2={'未提现金额'} background1={'#fff3e0'} background2={'#ffab2b'} icon={<StarOutlined style={{ color: '#fff', fontSize: 24 }} />} />
                    </Col>
                    <Col span={6}>
                        <StatisticCard title1={'74638.83'} title2={'未提现金额'} background1={'#eaf9e1'} background2={'#6dd230'} icon={<StarOutlined style={{ color: '#fff', fontSize: 24 }} />} />
                    </Col>
                    <Col span={6}>
                        <StatisticCard title1={'74638.83'} title2={'未提现金额'} background1={'#ffeaf4'} background2={'#ff85c0'} icon={<StarOutlined style={{ color: '#fff', fontSize: 24 }} />} />
                    </Col>
                </Row>)
```
<API src="../StatisticCard/index.tsx"></API>