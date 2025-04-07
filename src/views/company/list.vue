<template>
    <div class="app-container">
        <div class="head-container">
            <div class="condition">
                <div class="item">
                    <span class="text">上报方:</span>
                    <el-select v-model="searchForm.report" size="mini" placeholder="请选择上报方" style="width: 200px;"
                        clearable>
                        <el-option v-for="item of reportList" :index="item.label" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="item">
                    <span class="text">单位名称:</span>
                    <el-input v-model="searchForm.unit" size="mini" placeholder="请输入单位名称" style="width: 200px;"
                        clearable />
                </div>
            </div>
            <div class="btns">
                <el-button type="primary" size="mini" @click="getList">查询</el-button>
                <el-button type="warning" size="mini">重置</el-button>
            </div>
        </div>
        <div class="select-btn">
            <el-button type="success" size="mini">批量导出</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" label="序号" width="50" />
            <el-table-column prop="unitName" label="单位名称" />
            <el-table-column prop="reportParty" label="上报方" />
            <el-table-column prop="reportTime" label="上报时间" width="150px" />
            <el-table-column label="操作" width="110px" align="center" fixed="right">
                <template slot-scope="scope">
                    <span class="click-btn" @click="openDetails(scope.row.type)">查看</span>
                    <span class="click-btn">导出数据</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination :page-size.sync="page.size" :total="page.total" :current-page.sync="page.page"
            style="margin-top: 8px;" layout="total, prev, pager, next, sizes" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script>

export default {
    name: 'Questionnaire',
    data() {
        return {
            searchForm: {
                report: '0',
                unit: ''
            },
            multipleSelection: [],
            reportList: [
                { label: '全部', value: '0' },
                { label: '深圳市', value: '1' },
                { label: '福田区', value: '2' },
                { label: '南山区', value: '3' }
            ],
            tableData: [
                { unitName: '市直单位', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 1 },
                { unitName: '区级单位', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 2 },
                { unitName: '交易机构', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 3 },
                { unitName: '国家实验室', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 4 },
                { unitName: '数据服务方', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 5 },
                { unitName: '数据应用方', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 6 },
                { unitName: '数据服务方、数据应用方', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 7 },
                { unitName: '中央企业', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 8 },
                { unitName: '重点行业', reportParty: '深圳市', reportTime: '2023-10-01 16:06:08', type: 9 },
            ],
            page: {
                page: 1,
                size: 10,
                total: 0
            },
        }
    },
    created() {
        this.getList()
    },
    methods: {
        getList() {
            // getOrderList(this.searchNum, this.page.page, this.page.size).then(res => {
            //   if (res && res.content) {
            //     this.tableData = res.content
            //     this.page.total = res.totalElements
            //     this.page.page = res.currPage
            //     this.page.size = res.pageSize
            //   }
            // })
        },
        handleSizeChange(val) {
            this.page.size = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.page.page = val
            this.getList()
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        openDetails(type) {
            const pathList = [
                '/units',
                '/trade',
                '/lab',
                '/service',
            ];
            const tabsToClose = this.$store.state.tagsView.visitedViews.filter(view => {
                return pathList.some(path => {
                    return view.path.includes(path)
                })
            });
            tabsToClose.forEach(tab => {
                this.$store.dispatch('tagsView/delView', tab);
            });

            let router1 = {}
            let router2 = {}

            if (type == 1) {
                router1 = {
                    path: '/units/base',
                    name: 'UnitsBase',
                    meta: { title: '公共数据调查基本情况', noCache: true }
                };
                router2 = {
                    path: '/units/table',
                    name: 'UnitsTable',
                    meta: { title: '市级政府公共数据资源调查表', noCache: true }
                };
            }
            if (type == 2) {
                router1 = {
                    path: '/units/base',
                    name: 'UnitsBase',
                    meta: { title: '公共数据调查基本情况', noCache: true }
                };
                router2 = {
                    path: '/units/table',
                    name: 'UnitsTable',
                    meta: { title: '区级政府公共数据资源调查表', noCache: true }
                };
            }
            if (type == 3) {
                router1 = {
                    path: '/trade/base',
                    name: 'TradeBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/trade/table',
                    name: 'TradeTable',
                    meta: { title: '数据交易机构数据资源调查表', noCache: true }
                };
            }
            if (type == 4) {
                router1 = {
                    path: '/lab/base',
                    name: 'LabBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/lab/table',
                    name: 'LabTable',
                    meta: { title: '国家实验室及全国重点实验室数据资源调查表', noCache: true }
                };
            }
            if (type == 5) {
                router1 = {
                    path: '/service/base',
                    name: 'ServiceBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/service/table',
                    name: 'ServiceTable',
                    meta: { title: '数据服务方数据资源调查表', noCache: true }
                };
            }

            this.$store.dispatch('tagsView/addView', router1);
            this.$store.dispatch('tagsView/addView', router2);
            this.$router.push(router1.path);
        }
    }
}
</script>

<style lang="scss" scoped>
.app-container {
    .head-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .condition {
            display: flex;
            align-items: center;

            .item {
                display: flex;
                align-items: center;
                margin-right: 20px;

                .text {
                    display: inline-block;
                    margin-right: 10px;
                    font-size: 13px;
                }
            }
        }
    }

    .select-btn {
        margin-bottom: 10px;
    }

    .click-btn {
        color: #409EFF;
        cursor: pointer;
        margin-right: 6px;
    }
}
</style>