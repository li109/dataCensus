<template>
    <div class="app-container">
        <div class="list-container">
            <div class="list-item">
                <div class="item-title">企业服务的行业（多选）</div>
                <div class="item-content">{{ baseInfo.serviceTrade }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业是否为平台企业</div>
                <div class="item-content">{{ baseInfo.isPlatformCompany }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业是否为高新技术企业</div>
                <div class="item-content">{{ baseInfo.isHightCompany }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业数据产生主要在（多选）</div>
                <div class="item-content">{{ baseInfo.dataProduced }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业数据存储方式主要是（多选）</div>
                <div class="item-content">{{ baseInfo.dataStorage }}</div>
            </div>
            <div class="list-item">
                <div class="item-title">企业存储数据主要在（多选）（最多两项）</div>
                <div class="item-content">{{ baseInfo.dataStorageLocation }}</div>
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
                    <div class="right-item">{{ shujuhuiju.fwqy_1.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_1.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_1.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_1.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">系统/软件生产数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_2.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_2.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_2.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_2.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">用户上传数据总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_3.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_3.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_3.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_3.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总空间（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_4.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_4.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_4.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_4.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_5.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_5.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_5.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_5.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">原始数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_6.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_6.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_6.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_6.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">衍生数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_7.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_7.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_7.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_7.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">备份数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_8.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_8.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_8.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_8.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">结构化数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_9.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_9.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_9.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_9.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">图片类数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_10.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_10.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_10.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_10.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">视频类数据存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_11.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_11.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_11.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_11.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">云存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_12.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_12.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_12.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_12.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">公有云存储总量（TB）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_13.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_13.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_13.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_13.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">冷数据占比（%）</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_14.yearValue3 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_14.yearValue1 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_14.yearValue2 }}</div>
                    <div class="right-item">{{ shujuhuiju.fwqy_14.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据开发</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">数据集数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_15.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_15.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_15.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_15.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据集数据总量（TB）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_16.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_16.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_16.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_16.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">接入国外数据集数据总量（TB）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_17.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_17.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_17.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_17.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">用于AI技术研发的数据总量（TB）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_18.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_18.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_18.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_18.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据开发工具数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_19.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_19.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_19.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_19.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_20.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_20.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_20.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_20.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">二次开发次数（次）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_21.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_21.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_21.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_21.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">通用大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_22.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_22.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_22.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_22.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_23.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_23.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_23.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_23.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">二次开发次数（次）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_24.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_24.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_24.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_24.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">行业大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_25.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_25.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_25.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_25.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_26.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_26.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_26.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_26.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">垂直大模型数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_27.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_27.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_27.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_27.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">使用频率（次/周）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_28.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_28.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_28.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_28.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">企业算力规模（TFLOPS）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_29.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_29.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_29.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_29.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">智能计算服务器占比（%）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_30.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_30.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_30.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_30.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">开发者数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_31.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_31.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_31.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_31.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">日活跃数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_32.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_32.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_32.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_32.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">企业AI技术研发者数量（个）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_33.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_33.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_33.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_33.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据技术投入（万元）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_34.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_34.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_34.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_34.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">软件系统投入（万元）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_35.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_35.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_35.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_35.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">AI技术投入（万元）</div>
                    <div class="right-item">{{ shujukaifa.fwqy_36.yearValue3 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_36.yearValue1 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_36.yearValue2 }}</div>
                    <div class="right-item">{{ shujukaifa.fwqy_36.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据流通</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">与外部交互的数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_37.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_37.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_37.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_37.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">政府及公共服务机构数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_38.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_38.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_38.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_38.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">数据交易机构数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_39.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_39.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_39.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_39.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">其他行业企业或第三方服务平台数据交互量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_40.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_40.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_40.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_40.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">接入外部数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_41.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_41.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_41.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_41.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">购买数据总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_42.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_42.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_42.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_42.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">购买数据费用（万元）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_43.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_43.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_43.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_43.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据流出总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_44.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_44.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_44.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_44.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">数据有偿提供总量（TB）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_45.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_45.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_45.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_45.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">数据有偿提供收入（万元）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_46.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_46.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_46.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_46.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据流通审批总数（件）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_47.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_47.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_47.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_47.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">单次数据流通审批时长（天）</div>
                    <div class="right-item">{{ shujuliutong.fwqy_48.yearValue3 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_48.yearValue1 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_48.yearValue2 }}</div>
                    <div class="right-item">{{ shujuliutong.fwqy_48.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">数据服务</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">与数据产品及服务收入（万元）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_49.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_49.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_49.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_49.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据产品及服务数量（个）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_50.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_50.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_50.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_50.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">用户数量（个） </div>
                    <div class="right-item">{{ shujufuwu.fwqy_51.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_51.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_51.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_51.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">SaaS数据产品及服务数量（个）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_52.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_52.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_52.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_52.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">AI产品数量（个）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_53.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_53.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_53.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_53.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">APP累计下载量（次）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_54.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_54.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_54.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_54.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">网页端月访问量（次）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_55.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_55.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_55.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_55.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">APP日活跃用户数（个）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_56.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_56.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_56.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_56.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">网页端月独立访客数（个）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_57.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_57.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_57.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_57.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_58.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_58.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_58.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_58.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">外购数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_59.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_59.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_59.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_59.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">自行开发数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_60.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_60.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_60.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_60.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">其他数据资源入表金额（万元）</div>
                    <div class="right-item">{{ shujufuwu.fwqy_61.yearValue3 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_61.yearValue1 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_61.yearValue2 }}</div>
                    <div class="right-item">{{ shujufuwu.fwqy_61.yearValue4 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getResource } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'ServiceTable',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeCode: '',
            baseInfo: {
                serviceTrade: '', // 企业服务的行业
                isPlatformCompany: '', // 企业是否为平台企业
                isHightCompany: '', // 企业是否为高新技术企业
                dataProduced: '', // 企业数据产生主要在
                dataStorage: '', // 企业数据存储方式主要是
                dataStorageLocation: '', // 企业存储数据主要在
            },
            shujuhuiju: {
                fwqy_1: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_2: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_3: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_4: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_5: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_6: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_7: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_8: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_9: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_10: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_11: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_12: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_13: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_14: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujukaifa: {
                fwqy_15: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_16: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_17: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_18: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_19: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_20: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_21: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_22: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_23: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_24: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_25: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_26: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_27: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_28: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_29: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_30: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_31: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_32: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_33: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_34: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_35: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_36: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujuliutong: {
                fwqy_37: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_38: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_39: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_40: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_41: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_42: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_43: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_44: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_45: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_46: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_47: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_48: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            shujufuwu: {
                fwqy_49: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_50: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_51: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_52: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_53: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_54: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_55: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_56: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_57: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_58: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_59: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_60: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                fwqy_61: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
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
                    if(res.rows.resource.shujufuwu) this.handlerData('shujufuwu', res.rows.resource.shujufuwu)
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
}
</style>