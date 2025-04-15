<template>
    <div class="app-container">
        <div class="list-container">
            <div class="list-item">
                <div class="item-title">本企业在行业/领域市场份额（%）全国</div>
                <div class="item-content">{{ baseInfo.nationalProportion }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">本企业在行业/领域市场份额（%）全球</div>
                <div class="item-content">{{ baseInfo.globalProportion }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业数据存储方式主要是（多选）</div>
                <div class="item-content">{{ baseInfo.dataStorage }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业数据主要应用在（多选，最多5个）</div>
                <div class="item-content">{{ baseInfo.dataApp }}</div>
            </div>
        </div>

        <div class="header-container">
            <div class="left-total">指标</div>
            <div class="right">累计值（截至2024年底）</div>
            <div class="right">年度值（2023年）</div>
            <div class="right">年度值（2024年）</div>
            <div class="right">预估值（2025年）</div>
        </div>
        <div class="item-container">
            <div class="left-box">数据汇聚</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">设备设施采集数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_1.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_1.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_1.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_1.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">物联传感生产数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_2.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_2.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_2.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_2.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">系统/软件生成数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_3.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_3.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_3.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_3.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总空间（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_4.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_4.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_4.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_4.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_5.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_5.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_5.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_5.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">研发设计数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_6.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_6.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_6.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_6.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">测试实验数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_7.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_7.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_7.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_7.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">生产制造数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_8.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_8.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_8.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_8.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">经营管理数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_9.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_9.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_9.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_9.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">运行维护数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_10.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_10.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_10.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_10.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">供应链服务数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_11.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_11.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_11.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_11.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">安全能耗数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_12.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_12.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_12.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_12.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">原始数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_13.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_13.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_13.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_13.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">衍生数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_14.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_14.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_14.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_14.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">备份数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_15.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_15.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_15.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_15.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">结构化数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_16.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_16.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_16.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_16.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">云存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_17.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_17.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_17.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_17.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">公有云数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_18.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_18.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_18.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_18.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">冷数据占比（%）</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_19.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_19.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_19.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.yqsj_19.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据开发</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">行业模型数据总量(TB)</div>
                    <div class="right-item">{{ shujukaifa.yqsj_20.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_20.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_20.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_20.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">行业大模型数据总量(TB)</div>
                    <div class="right-item">{{ shujukaifa.yqsj_21.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_21.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_21.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_21.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">复用频率(次/周)</div>
                    <div class="right-item">{{ shujukaifa.yqsj_22.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_22.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_22.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_22.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">用户数量(个)</div>
                    <div class="right-item">{{ shujukaifa.yqsj_23.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_23.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_23.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_23.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据开发工具数量(个)</div>
                    <div class="right-item">{{ shujukaifa.yqsj_24.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_24.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_24.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_24.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">企业算力规模（TFLOPS）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_25.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_25.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_25.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_25.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">智能计算服务器占比（%）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_26.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_26.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_26.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_26.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">开发者数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_27.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_27.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_27.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_27.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">日活跃数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_28.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_28.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_28.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_28.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">企业AI技术研发者数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_29.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_29.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_29.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_29.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据技术投入（万元）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_30.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_30.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_30.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_30.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">AI技术投入（万元）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_31.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_31.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_31.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_31.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">通用大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_32.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_32.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_32.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_32.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_33.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_33.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_33.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_33.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">二次开发次数（次）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_34.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_34.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_34.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_34.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">行业大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_35.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_35.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_35.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_35.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_36.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_36.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_36.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_36.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">垂直大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_37.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_37.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_37.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_37.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.yqsj_38.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_38.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_38.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.yqsj_38.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据流通</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">与外部交互的数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_39.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_39.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_39.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_39.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">政府及公共服务机构数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_40.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_40.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_40.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_40.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">其产业链上下游数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_41.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_41.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_41.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_41.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">其他行业企业或第三方服务平台数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_42.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_42.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_42.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_42.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">数据交易机构数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_43.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_43.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_43.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_43.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">接入外部数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_44.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_44.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_44.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_44.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">购买数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_45.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_45.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_45.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_45.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">购买数据费用（万元）</div>
                    <div class="right-item">{{ shujuliutong.yqsj_46.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_46.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_46.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.yqsj_46.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据应用</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据产品/服务数量（个）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_47.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_47.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_47.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_47.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">企业数字化投入（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_48.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_48.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_48.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_48.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">智能硬件投入（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_49.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_49.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_49.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_49.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">软件系统投入（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_50.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_50.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_50.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_50.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据产品/服务收入（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_51.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_51.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_51.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_51.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_52.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_52.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_52.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_52.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">外购数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_53.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_53.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_53.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_53.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">自行开发数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_54.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_54.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_54.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_54.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">其他数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_55.yearValue3 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_55.yearValue1 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_55.yearValue2 }}</div>
                    <div class="right-item">{{ shujuyingyong.yqsj_55.yearValue4 }}</div>
                </div>
            </div>
        </div>

        <div class="notes-container">
            <div class="left">备注</div>
            <div class="right">{{ beizhu.comments }}</div>
        </div>
    </div>
</template>

<script>
import { getResource } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'CentralTable',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeCode: '',
            baseInfo: {
                nationalProportion: '', // 本企业在行业/领域市场份额（%）全国
                globalProportion: '', // 本企业在行业/领域市场份额（%）全球
                dataStorage: '', // 企业数据存储方式主要是
                dataApp: '', // 企业数据主要应用在
            },
            shujuhuiju: {
                yqsj_1: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_2: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_3: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_4: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_5: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_6: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_7: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_8: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_9: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_10: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_11: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_12: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_13: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_14: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_15: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_16: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_17: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_18: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_19: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujukaifa: {
                yqsj_20: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_21: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_22: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_23: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_24: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_25: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_26: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_27: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_28: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_29: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_30: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_31: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_32: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_33: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_34: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_35: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_36: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_37: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_38: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujuliutong: {
                yqsj_39: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_40: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_41: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_42: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_43: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_44: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_45: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_46: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujuyingyong: {
                yqsj_47: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_48: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_49: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_50: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_51: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_52: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_53: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_54: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                yqsj_55: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            beizhu: {
                comments: ''
            }
        }
    },
    created() {
        this.usciCode = this.$route.query.usciCode
        this.type = this.$route.query.type
        this.reportTypeCode = this.$route.query.reportTypeCode
        this.getData()
    },
    methods: {
        getData() {
            const params = { 
                usciCode: this.usciCode,
                type: this.type,
                reportTypeCode: this.reportTypeCode
            }
            getResource(params).then(res => {
                if(res && res.rows && res.rows.baseInfo) {
                    this.baseInfo = objectMerge(this.baseInfo, JSON.parse(JSON.stringify(res.rows.baseInfo, (key, value) => (value === null ? undefined : value))))
                }
                if(res && res.rows && res.rows.resource) {
                    if(res.rows.resource.shujuhuiju) this.handlerData('shujuhuiju', res.rows.resource.shujuhuiju)
                    if(res.rows.resource.shujukaifa) this.handlerData('shujukaifa', res.rows.resource.shujukaifa)
                    if(res.rows.resource.shujuliutong) this.handlerData('shujuliutong', res.rows.resource.shujuliutong)
                    if(res.rows.resource.shujuyingyong) this.handlerData('shujuyingyong', res.rows.resource.shujuyingyong)
                    if(res.rows.resource.beizhu) this.handlerData('beizhu', res.rows.resource.beizhu)
                }
            })
        },
        handlerData(target, source) {
            if(!target || !source) return;
            Object.keys(this[target]).forEach(key => {
                if(source[key]) this[target][key] = objectMerge(this[target][key], JSON.parse(JSON.stringify(source[key], (key, value) => (value === null ? undefined : value))))
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";

.app-container {
    font-size: 12px;
    color: $tableTextColor;

    .header-container {
        width: 100%;
        display: flex;
        align-items: center;
        color: $tableTitleColor;
        font-weight: 600;
        background-color: $tableBgColor;

        div {
            padding: 7px 10px;
            text-align: center;
            border: 1px solid $tableBorderColor;
            border-right: none;
            box-sizing: border-box;

            &:last-child {
                border-right: 1px solid $tableBorderColor;
            }
        }

        .left-total {
            width: $tableLeftTitleWidth4;
            text-align: center;
        }

        .right {
            width: calc((100% - #{$tableLeftTitleWidth4}) / 4);
        }
    }

    .item-container {
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid $tableBorderColor;
        border-top: none;
        background-color: $tableBgColor;
        box-sizing: border-box;

        .left-box {
            width: 108px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            color: $tableTitleColor;
            font-weight: 600;
            box-sizing: border-box;
        }

        .right-box {
            width: calc(100% - 108px);
            box-sizing: border-box;

            .item {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: stretch;
                box-sizing: border-box;

                .item-title {
                    display: flex;
                    align-items: center;
                    width: calc(#{$tableLeftTitleWidth4} - 109px);
                    padding: 7px 10px;
                    color: $tableTitleColor;
                    font-weight: 600;
                    text-align: left;
                    border-left: 1px solid $tableBorderColor;
                    border-bottom: 1px solid $tableBorderColor;
                    box-sizing: border-box;

                    &.third {
                        padding-left: 20px;
                        font-weight: 500;
                    }
                }

                .right-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: calc((100% - (#{$tableLeftTitleWidth4} - 108px)) / 4);
                    height: 1;
                    padding: 7px 10px;
                    border-left: 1px solid $tableBorderColor;
                    border-bottom: 1px solid $tableBorderColor;
                    background-color: #fff;
                    box-sizing: border-box;
                }

                &:last-child {
                    .item-title {
                        border-bottom: none;
                    }

                    .right-item {
                        border-bottom: none;
                    }
                }
            }
        }
    }

    .list-container {
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 1px solid $tableBorderColor;

        .list-item {
            width: 100%;
            display: flex;
            align-items: stretch;
            box-sizing: border-box;

            .item-title {
                width: $tableLeftTitleWidth;
                padding: 7px 10px;
                color: $tableTitleColor;
                font-weight: 600;
                text-align: left;
                border: 1px solid $tableBorderColor;
                border-bottom: none;
                background-color: $tableBgColor;
                box-sizing: border-box;
            }

            .item-content {
                width: calc(100% - #{$tableLeftTitleWidth});
                display: flex;
                align-items: center;
                flex: 1;
                padding-left: 10px;
                border-top: 1px solid $tableBorderColor;
                border-right: 1px solid $tableBorderColor;
                box-sizing: border-box;
            }
        }
    }

    .notes-container {
        display: flex;
        align-items: stretch;

        .left {
            width: calc(#{$tableLeftTitleWidth4} + 1px);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            color: $tableTitleColor;
            font-weight: 600;
            border: 1px solid $tableBorderColor;
            border-top: none;
            border-right: none;
            background-color: $tableBgColor;
            box-sizing: border-box;
        }

        .right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 10px;
            border: 1px solid $tableBorderColor;
            border-top: none;
            box-sizing: border-box;
        }
    }
}
</style>