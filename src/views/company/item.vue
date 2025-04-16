<template>
    <div class="app-container">
        <div class="header-container">
            <div class="left-total">指标</div>
            <div class="right">累计值（截至2024年底）</div>
            <div class="right">年度值（2023年）</div>
            <div class="right">年度值（2024年）</div>
            <div class="right">预估值（2025年）</div>
        </div>
        <div class="item-container">
            <div class="left-box">产品销售及保有情况</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">产品全国销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_1.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_1.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_1.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_1.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">北京市销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_2.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_2.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_2.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_2.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">天津市销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_3.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_3.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_3.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_3.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">河北省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_4.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_4.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_4.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_4.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">山西省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_5.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_5.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_5.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_5.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">内蒙古自治区销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_6.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_6.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_6.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_6.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">辽宁省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_7.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_7.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_7.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_7.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">吉林省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_8.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_8.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_8.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_8.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">黑龙江省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_9.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_9.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_9.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_9.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">上海市销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_10.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_10.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_10.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_10.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">江苏省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_11.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_11.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_11.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_11.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">浙江省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_12.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_12.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_12.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_12.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">安徽省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_13.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_13.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_13.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_13.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">福建省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_14.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_14.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_14.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_14.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">江西省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_15.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_15.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_15.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_15.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">山东省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_16.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_16.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_16.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_16.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">河南省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_17.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_17.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_17.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_17.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">湖北省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_18.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_18.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_18.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_18.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">湖南省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_19.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_19.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_19.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_19.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">广东省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_20.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_20.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_20.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_20.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">广西壮族自治区销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_21.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_21.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_21.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_21.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">海南省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_22.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_22.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_22.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_22.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">重庆市销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_23.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_23.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_23.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_23.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">四川省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_24.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_24.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_24.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_24.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">贵州省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_25.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_25.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_25.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_25.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">云南省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_26.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_26.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_26.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_26.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">西藏自治区销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_27.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_27.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_27.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_27.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">陕西省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_28.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_28.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_28.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_28.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">甘肃省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_29.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_29.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_29.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_29.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">青海省销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_30.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_30.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_30.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_30.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">宁夏回族自治区销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_31.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_31.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_31.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_31.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title third">新疆维吾尔自治区销售量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_32.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_32.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_32.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_32.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">产品全国保有量（台）</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_33.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_33.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_33.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxiaoshoujibaoyouqingkuang.jkqy_33.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">产品数据生产情况</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">产品满负荷运行日均产生数据总量（TB）</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_34.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_34.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_34.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_34.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">产品出厂后年均运行时长（天）</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_35.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_35.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_35.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinshujushengchanqingkuang.jkqy_35.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">产品数据存储空间情况</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">产品平均存储空间（TB）</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_36.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_36.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_36.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_36.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">产品平均存储空间利用率（%）</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_37.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_37.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_37.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinshujucunchukongjianqingkuang.jkqy_37.yearValue4 }}</div>
                </div>
            </div>
        </div>
        <div class="item-container">
            <div class="left-box">产品性能与服务</div>
            <div class="right-box">
                <div class="item">
                    <div class="item-title">主要产品平均使用年限（年）</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_38.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_38.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_38.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_38.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">具备联网功能的产品比例（%）</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_39.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_39.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_39.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_39.yearValue4 }}</div>
                </div>
                <div class="item">
                    <div class="item-title">能够提供远程运维服务的产品比例（%）</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_40.yearValue3 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_40.yearValue1 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_40.yearValue2 }}</div>
                    <div class="right-item">{{ chanpinxingnengyufuwu.jkqy_40.yearValue4 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getResource } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'ApplyItem',
    data() {
        return {
            usciCode: '',
            type: '',
            reportTypeName: '',
            chanpinxiaoshoujibaoyouqingkuang: {
                jkqy_1: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_2: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_3: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_4: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_5: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_6: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_7: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_8: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_9: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_10: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_11: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_12: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_13: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_14: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_15: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_16: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_17: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_18: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_19: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_20: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_21: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_22: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_23: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_24: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_25: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_26: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_27: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_28: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_29: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_30: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_31: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_32: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_33: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            chanpinshujushengchanqingkuang: {
                jkqy_34: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_35: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            chanpinshujucunchukongjianqingkuang: {
                jkqy_36: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_37: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            chanpinxingnengyufuwu: {
                jkqy_38: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_39: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
                jkqy_40: { yearValue1: '',  yearValue2: '', yearValue3: '', yearValue4: ''},
            },
            beizhu: {
                comments: ''
            }
        }
    },
    created() {
        this.usciCode = this.$route.query.usciCode
        this.type = this.$route.query.type
        this.reportTypeName = this.$route.query.reportTypeName
        this.getData()
    },
    methods: {
        getData() {
            const params = { 
                usciCode: this.usciCode,
                type: this.type,
                reportTypeName: this.reportTypeName
            }
            getResource(params).then(res => {
                if(res && res.rows && res.rows.resource) {
                    if(res.rows.resource.chanpinxiaoshoujibaoyouqingkuang) this.handlerData('chanpinxiaoshoujibaoyouqingkuang', res.rows.resource.chanpinxiaoshoujibaoyouqingkuang)
                    if(res.rows.resource.chanpinshujushengchanqingkuang) this.handlerData('chanpinshujushengchanqingkuang', res.rows.resource.chanpinshujushengchanqingkuang)
                    if(res.rows.resource.chanpinshujucunchukongjianqingkuang) this.handlerData('chanpinshujucunchukongjianqingkuang', res.rows.resource.chanpinshujucunchukongjianqingkuang)
                    if(res.rows.resource.chanpinxingnengyufuwu) this.handlerData('chanpinxingnengyufuwu', res.rows.resource.chanpinxingnengyufuwu)
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
}
</style>