/// <reference types="react" />
import './index.less';
declare const StatisticCard: (props: {
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
    width?: number | string;
}) => JSX.Element;
export default StatisticCard;
