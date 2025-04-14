<template>
    <div class="app-container">
        <div class="table-container">
            <div class="table-item">
                <div class="item-title">单位名称</div>
                <div class="item-content">{{ info.unitName }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">统一社会信用代码</div>
                <div class="item-content">{{ info.usciCode }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">机构类型</div>
                <div class="item-content">{{ info.organizationType }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">单位类型</div>
                <div class="item-content">{{ info.unitType }}</div>
            </div>
            <div v-if="pageType === 'central'" class="table-item">
                <div class="item-title">是否为央企子公司</div>
                <div v-if="!(info.isChildCenter)" class="item-content"></div>
                <div class="item-content">【{{ info.isChildCenter }}】</div>
            </div>
            <div v-if="info.isChildCenter === '是' && pageType === 'central'" class="table-item">
                <div class="item-title">所属央企集团</div>
                <div class="item-content">{{ info.centerCompany }}</div>
            </div>
            <div v-if="info.isChildCenter === '否' && pageType === 'central'" class="table-item">
                <div class="item-title">单位名称数据中心情况（存储数据量前三）</div>
                <div class="item-content"></div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply'" class="table-item">
                <div class="item-title">企业分类（多选）</div>
                <div class="item-content">{{ info.companyType }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'serviceApply'" class="table-item">
                <div class="item-title">数据服务企业类型（多选）</div>
                <div class="item-content">
                    <div class="item-content-list">
                        <div class="list-item">
                            <div>数字技术类：</div>
                            <div>{{ info.digiTelCategory }}</div>
                        </div>
                        <div class="list-item">
                            <div>互联网平台类：</div>
                            <div>{{ info.intPlatformCategory }}</div>
                        </div>
                        <div class="list-item">
                            <div>其他类：</div>
                            <div>{{ info.otherCategory }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">是否生产如下设备（多选）</div>
                <div class="item-content">{{ info.isProduceDevice }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">所属行业</div>
                <div class="item-content">{{ info.industry }}</div>
            </div>
            <div v-if="pageType === 'trade' || pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">主要经济指标（万元）</div>
                <div class="item-list">
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2024年营收:</span></div>
                            <div>{{ info.lastYearRevenue }}</div>
                        </div>
                        <div class="item">
                            <div><span>*</span><span>其中：主营业务收入</span></div>
                            <div>{{ info.mainRevenue }}</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2024年资产总计:</span></div>
                            <div>{{ info.lastYearTotal }}</div>
                        </div>
                        <div class="item">
                            <div><span>*</span><span>2024年营业利润：</span></div>
                            <div>{{ info.lastYearProfit }}</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2023年营收:</span></div>
                            <div>{{ info.twoYearsAgoRev }}</div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="item">
                            <div><span>*</span><span>2022年营收:</span></div>
                            <div>{{ info.threeYearsAgoRev }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="pageType === 'trade' || pageType === 'lab'||pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item-line">
                <div class="line-item">
                    <div class="item-title">人员数量</div>
                    <div class="item-content">{{ info.personNumber }}</div>
                </div>
                <div class="line-item">
                    <div class="item-title"><span> * </span><span>其中：女性（人）</span></div>
                    <div class="item-content">{{ info.femalePerson }}</div>
                </div>
            </div>
            <div class="table-item">
                <div class="item-title">单位简介</div>
                <div class="item-content">{{ info.companyProfile }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">通讯地址</div>
                <div class="item-content">{{ info.address }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">详细地址</div>
                <div class="item-content">{{ info.detailAddress }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply'" class="table-item">
                <div class="item-title">企业规模</div>
                <div class="item-content">{{ info.companyScale }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">企业数据应用场景</div>
                <div class="item-content">{{ info.applicationScenarios }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">数据资源入表科目</div>
                <div class="item-content">{{ info.subjectName }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">是否有AI产品</div>
                <div v-if="!(info.isAi)" class="item-content"></div>
                <div class="item-content">【{{ info.isAi }}】</div>
            </div>
            <div v-if="info.isAi==='是'&&(pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central')" class="table-item">
                <div class="item-title">AI开发瓶颈</div>
                <div class="item-content">{{ info.aiBottleneck }}</div>
            </div>
            <div v-if="info.isAi==='是'&&(pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central')" class="table-item">
                <div class="item-title">AI产品主要应用形式</div>
                <div class="item-content">{{ info.aiApp }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">企业未来需要加强数据应用的哪些能力</div>
                <div class="item-content">{{ info.appSkillComment }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">企业在数据应用方面的瓶颈</div>
                <div class="item-content">{{ info.bottleneck }}</div>
            </div>
            <div v-if="pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">企业数据管理能力成熟度等级（DCMM）</div>
                <div class="item-content">{{ info.dcmm }}</div>
            </div>
            <div v-if="pageType === 'trade'" class="table-item">
                <div class="item-title">应用场景</div>
                <div class="item-content">{{ info.applicationScenarios }}</div>
            </div>
            <div v-if="pageType === 'trade' || pageType === 'lab' || pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central'" class="table-item">
                <div class="item-title">是否开放共享数据</div>
                <div v-if="!(info.isOpenSharingData)" class="item-content"></div>
                <div v-else class="item-content">【{{ info.isOpenSharingData }}】</div>
            </div>
            <div v-if="info.isOpenSharingData==='是'&&(pageType==='trade' || pageType === 'lab' || pageType === 'service' || pageType === 'apply' || pageType === 'serviceApply' || pageType === 'central')" class="table-item">
                <div class="item-title">是否用于研发数据产品</div>
                <div class="item-content">{{ info.isDevelopingDataProducts }}</div>
            </div>
            <div class="table-item">
                <div class="item-title">填报人员</div>
                <div class="table-box">
                    <div class="box-item">
                        <div>姓名：</div>
                        <div>{{ info.reportPersonName }}</div>
                    </div>
                    <div class="box-item">
                        <div>部门：</div>
                        <div>{{ info.department }}</div>
                    </div>
                    <div class="box-item">
                        <div>手机：</div>
                        <div>{{ info.phoneNumber }}</div>
                    </div>
                    <div class="box-item">
                        <div>职务：</div>
                        <div>{{ info.position }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBase } from '@/api/company'
import { objectMerge } from '@/utils'
export default {
    name: 'TradeBase',
    data() {
        return {
            usciCode: '',
            type: '',
            info: {
                unitName: '', // 单位名称
                usciCode: '', // 单位编码
                organizationType: '', // 机构类型
                unitType: '', // 单位类型
                isChildCenter: '', // 是否为央企子公司
                centerCompany: '', // 所属央企集团
                companyType: '', // 企业分类
                isProduceDevice: '', // 是否生产如下设备
                digiTelCategory: '', // 数据服务企业类型 - 数字技术类
                intPlatformCategory: '', // 数据服务企业类型 - 互联网平台类
                otherCategory: '', // 数据服务企业类型 - 其他类
                industry: '', // 所属行业
                oneIndustry: '', // 所属行业一级分类
                twoIndustry: '', // 所属行业二级分类
                lastYearRevenue: '', // 2024年营收
                mainRevenue: '', // 其中: 主营业务收入
                lastYearTotal: '', // 2024年资产总计
                lastYearProfit: '', // 2024年营业利润
                twoYearsAgoRev: '', // 2023年营收
                threeYearsAgoRev: '', // 2022年营收
                personNumber: '', // 人员数量
                femalePerson: '', // 其中: 女性
                companyProfile: '', // 单位简介
                address: '', // 通讯地址
                detailAddress: '', // 详细地址
                companyScale: '', // 企业规模
                applicationScenarios: '', // 企业数据应用场景
                subjectName: '', // 数据资源入表科目
                isAi: '', // 是否有AI产品
                aiBottleneck: '', // AI开发瓶颈
                aiApp: '', // AI产品主要应用形式
                appSkillComment: '', // 企业未来需要加强数据应用的哪些能力
                bottleneck: '', // 企业在数据应用方面的瓶颈
                dcmm: '', // 企业数据管理能力成熟度等级(DCMM)
                reportPersonName: '', // 填报人姓名
                phoneNumber: '', // 填报人手机号码
                department: '', // 填报人部门
                position: '', // 填报人职务
                serviceTrade: '', // 企业服务的行业
                isPlatformCompany: '', // 企业是否为平台企业
                isHightCompany: '', // 企业是否为高新技术企业
                dataProduced: '', // 企业数据产生主要在
                dataStorage: '', // 企业数据存储方式主要是
                dataStorageLocation: '', // 企业存储数据主要在
                dataApp: '', // 企业数据主要应用在
                nationalProportion: '', // 本企业在行业 / 领域市场份额（%）全国
                globalProportion: '', // 本企业在行业 / 领域市场份额（%）全球
                isOpenSharingData: '', // 是否开放共享数据
                isDevelopingDataProducts: '', // 是否用于研发数据产品
            }
        }
    },
    computed: {
        pageType() {
            return this.$route.path.match(/\/([^/]+)\//)[1]
        }
    },
    created() {
        this.usciCode = this.$route.query.usciCode
        this.type = this.$route.query.type
        this.getData()
    },
    methods: {
        getData() {
            getBase({ usciCode: this.usciCode, type: this.type }).then(res => {
                console.log(res, 'res')
                if (res && res.rows && res.rows.baseInfo) {
                    this.info = objectMerge(this.info, JSON.parse(JSON.stringify(res.rows.baseInfo, (key, value) => (value === null ? undefined : value))))
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";

.app-container {
    .table-container {
        width: 100%;
        font-size: 12px;
        border: 1px solid $tableBorderColor;

        .table-item {
            width: 100%;
            display: flex;
            border-bottom: 1px solid $tableBorderColor;

            &:last-child {
                border-bottom: none;
            }

            &.first-item {
                border-top: 1px solid $tableBorderColor;
            }

            .item-title {
                width: $tableLeftTitleWidth;
                display: flex;
                align-items: center;
                padding: 6px 10px;
                font-weight: 600;
                color: $tableTitleColor;
                background-color: $tableBgColor;
                border-right: 1px solid $tableBorderColor;
                box-sizing: border-box;
            }

            .item-content {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;

                .item-content-list {
                    width: 100%;
                    .list-item {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-top: 6px;
                        div:nth-child(1) {
                            width: 90px;
                            font-weight: 600;
                            color: #888;
                            text-align: right;
                        }
                        div:nth-child(2) {
                            flex: 1;
                        }
                    }
                    .list-item:first-child {
                        margin-top: 0;
                    }
                }
            }

            .item-list {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                flex-direction: column;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;

                .line {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    color: $tableTextColor;
                    box-sizing: border-box;

                    .item {
                        display: flex;
                        align-items: center;
                        font-size: 12px;
                        color: $tableTextColor;
                        box-sizing: border-box;

                        div:nth-child(1) {
                            width: 160px;
                            padding: 6px 10px;
                            margin-right: 6px;
                            color: $tableTextColor2;
                            font-weight: bold;
                            background-color: $tableBgColor;

                            span:nth-child(1) {
                                display: inline-block;
                                margin-right: 2px;
                                color: red;
                            }
                        }

                        div:nth-child(2) {
                            width: 160px;
                            margin-right: 20px;
                        }
                    }
                }
            }

            .table-box {
                width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: $tableTextColor;
                box-sizing: border-box;

                .box-item {
                    width: calc(100% / 4 - 2px);
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    color: $tableTextColor;
                    box-sizing: border-box;

                    div:nth-child(1) {
                        width: 40px;
                        // margin-right: 6px;
                        color: $tableTextColor2;
                        font-weight: bold;
                    }

                    div:nth-child(2) {
                        flex: 1
                    }
                }
            }
        }

        .table-item-line {
            width: 100%;
            display: flex;
            border-bottom: 1px solid $tableBorderColor;

            &:last-child {
                border-bottom: none;
            }

            .line-item {
                width: calc(100% / 2 - 2px);
                display: flex;
                border-right: 1px solid $tableBorderColor;

                &:last-child {
                    border-right: none;
                }

                .item-title {
                    width: $tableLeftTitleWidth;
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    font-weight: 600;
                    color: $tableTitleColor;
                    border-right: 1px solid $tableBorderColor;
                    background-color: $tableBgColor;
                    box-sizing: border-box;

                    span:nth-child(1) {
                        display: inline-block;
                        margin-right: 2px;
                    }
                }

                .item-content {
                    width: calc(100% - #{$tableLeftTitleWidth} - 2px);
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    color: $tableTextColor;
                    box-sizing: border-box;
                }
            }
        }
    }
}
</style>