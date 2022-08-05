
import React, { useState, useEffect } from 'react';
import './index.less';

const StatisticCard = (props: { 
    /**图标 */
    icon: any; 
    /**标题1 */
    title1: any; 
    /**标题2 */
    title2: any; 
    /**图标外圈背景色 */
    background1?: string; 
    /**图标内圈背景色 */
    background2?: string;
    /**卡片宽度 */ 
    width?:number|string;
}) => {

    const { icon, title1, title2, background1 = '#e4ecff', background2 = '#4d7cfe', width = '100%'} = props;

    return (
        <div className="data-statistics card_box" style={{width:width}}>
            <div className="card_box_cir" style={{ background: background1 }}>
                <div className='card_box_cir1' style={{ background: background2 }}>
                    {icon}
                </div>
            </div>
            <div className='card_box_txt'>
                <span className='sp1'>{title1}</span>
                <span className='sp2'>{title2}</span>
            </div>
        </div>
    );
}

export default StatisticCard;