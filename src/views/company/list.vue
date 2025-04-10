<template>
    <div class="app-container">
        <div class="head-container">
            <div class="condition">
                <div class="item">
                    <span class="text">上报方:</span>
                    <el-select v-model="searchForm.area" size="mini" placeholder="请选择上报方" style="width: 200px;"
                        clearable>
                        <el-option v-for="item of areaList" :index="item.label" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </div>
                <div class="item">
                    <span class="text">单位名称:</span>
                    <el-input v-model="searchForm.unitName" size="mini" placeholder="请输入单位名称" style="width: 200px;"
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
            <el-table-column prop="area" label="上报方" />
            <el-table-column prop="createTime" label="上报时间" width="150px" />
            <el-table-column label="操作" width="110px" align="center" fixed="right">
                <template slot-scope="scope">
                    <span class="click-btn" @click="openDetails(scope.row)">查看</span>
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
import { getTableList } from '@/api/company'
export default {
    name: 'Questionnaire',
    data() {
        return {
            searchForm: {
                area: '',
                unitName: ''
            },
            multipleSelection: [],
            areaList: [
                { label: '全部', value: '' },
                { label: '深圳市', value: '深圳市' },
                { label: '福田区', value: '福田区' },
                { label: '南山区', value: '南山区' },
                { label: '罗湖区', value: '罗湖区' },
                { label: '宝安区', value: '宝安区' },
                { label: '龙岗区', value: '龙岗区' },
                { label: '龙华区', value: '龙华区' },
                { label: '光明区', value: '光明区' },
                { label: '盐田区', value: '盐田区' },
                { label: '坪山区', value: '坪山区' },
                { label: '大鹏新区', value: '大鹏新区' },
                { label: '深汕特别合作区', value: '深汕特别合作区' },
            ],
            tableData: [
                { unitName: '市直单位', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: '市级单位' },
                { unitName: '区级单位', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: '区级单位' },
                { unitName: '交易机构', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 3 },
                { unitName: '国家实验室', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 4 },
                { unitName: '数据服务方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 5 },
                { unitName: '数据应用方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 6 },
                { unitName: '数据服务方、数据应用方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 7 },
                { unitName: '中央企业', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 8 },
                { unitName: '重点行业', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 9 },
            ],
            page: {
                pageNo: 1,
                pageSize: 10,
                total: 0
            },
        }
    },
    created() {
        // this.getList()
    },
    methods: {
        getList() {
            let data = {
                area: this.searchForm.area,
                unitName: this.searchForm.unitName,
                page: {
                    pageNo: this.page.pageNo,
                    pageSize: this.page.pageSize
                }
            }
            getTableList(data).then(res => {
                if(res && res.rows) {
                    this.tableData = res.rows
                    this.page.total = res.total
                }
            })
        },
        handleSizeChange(val) {
            this.page.pageSize = val
            this.getList()
        },
        handleCurrentChange(val) {
            this.page.pageNo = val
            this.getList()
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        openDetails(row) {
            const unitType = row.unitType || ''
            const usciCode = row.usciCode || ''
            const type = row.type || ''

            const pathList = [
                '/units',
                '/trade',
                '/lab',
                '/service',
                '/apply',
                '/central'
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

            if (unitType === '市级单位' || unitType === '区级单位') {
                let title = '市级政府公共数据资源调查表'
                if(unitType === '区级单位') title = '区级政府公共数据资源调查表'
                router1 = {
                    path: '/units/base',
                    name: 'Base',
                    meta: { title: '公共数据调查基本情况', query: {'usciCode': usciCode, 'type': type }, noCache: true },
                    query: {'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/units/table',
                    name: 'UnitsTable',
                    meta: { title, query: {'usciCode': usciCode, 'type': type }, noCache: true },
                    query: {'usciCode': usciCode, 'type': type }
                };
            }
            if (unitType == 3) {
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
            if (unitType == 4) {
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
            if (unitType == 5) {
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
            if (unitType == 6) {
                router1 = {
                    path: '/apply/base',
                    name: 'ApplyBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/apply/table',
                    name: 'ApplyTable',
                    meta: { title: '数据应用方数据资源调查表', noCache: true }
                };
            }
            if (unitType == 7) {
                router1 = {
                    path: '/apply/base',
                    name: 'ApplyBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/apply/table',
                    name: 'ApplyTable',
                    meta: { title: '数据应用方数据资源调查表', noCache: true }
                };
            }
            if (unitType == 8) {
                router1 = {
                    path: '/central/base',
                    name: 'CentralBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/central/table',
                    name: 'CentralTable',
                    meta: { title: '央企数据资源调查', noCache: true }
                };
            }
            if (unitType == 9) {
                router1 = {
                    path: '/apply/base',
                    name: 'ApplyBase',
                    meta: { title: '企业基本情况', noCache: true }
                };
                router2 = {
                    path: '/apply/item/1',
                    name: 'ApplyItem',
                    meta: { title: '服务器产品数据资源调查', noCache: true }
                };
            }

            this.$store.dispatch('tagsView/addView', router1);
            this.$store.dispatch('tagsView/addView', router2);

            if (unitType == 6) {
                const router3 = {
                    path: '/apply/item/1',
                    name: 'ApplyItem',
                    meta: { title: '传感器数据资源调查', noCache: true }
                };
                const router4 = {
                    path: '/apply/item/2',
                    name: 'ApplyItem',
                    meta: { title: '仪器仪表数据资源调查', noCache: true }
                };
                const router5 = {
                    path: '/apply/other',
                    name: 'ApplyOther',
                    meta: { title: '其他数据资源调查', noCache: true }
                };
                this.$store.dispatch('tagsView/addView', router3);
                this.$store.dispatch('tagsView/addView', router4);
                this.$store.dispatch('tagsView/addView', router5);
            }
            if (unitType == 7) {
                const router3 = {
                    path: '/apply/item/1',
                    name: 'ApplyItem',
                    meta: { title: '传感器数据资源调查', noCache: true }
                };
                const router4 = {
                    path: '/apply/item/2',
                    name: 'ApplyItem',
                    meta: { title: '仪器仪表数据资源调查', noCache: true }
                };
                const router5 = {
                    path: '/apply/other',
                    name: 'ApplyOther',
                    meta: { title: '其他数据资源调查', noCache: true }
                };
                const router6 = {
                    path: '/service/table',
                    name: 'ServiceTable',
                    meta: { title: '数据服务方数据资源调查表', noCache: true }
                };
                this.$store.dispatch('tagsView/addView', router6);
                this.$store.dispatch('tagsView/addView', router3);
                this.$store.dispatch('tagsView/addView', router4);
                this.$store.dispatch('tagsView/addView', router5);
            }
            if (unitType == 8) {
                const router3 = {
                    path: '/apply/item/1',
                    name: 'ApplyItem',
                    meta: { title: '传感器数据资源调查', noCache: true }
                };
                const router4 = {
                    path: '/apply/item/2',
                    name: 'ApplyItem',
                    meta: { title: '仪器仪表数据资源调查', noCache: true }
                };
                const router5 = {
                    path: '/apply/other',
                    name: 'ApplyOther',
                    meta: { title: '其他数据资源调查', noCache: true }
                };
                this.$store.dispatch('tagsView/addView', router3);
                this.$store.dispatch('tagsView/addView', router4);
                this.$store.dispatch('tagsView/addView', router5);
            }
            if (unitType == 9) {
                const router3 = {
                    path: '/apply/item/2',
                    name: 'ApplyItem',
                    meta: { title: '传感器数据资源调查', noCache: true }
                };
                const router4 = {
                    path: '/apply/item/3',
                    name: 'ApplyItem',
                    meta: { title: '仪器仪表数据资源调查', noCache: true }
                };
                const router5 = {
                    path: '/apply/other',
                    name: 'ApplyOther',
                    meta: { title: '其他数据资源调查', noCache: true }
                };
                this.$store.dispatch('tagsView/addView', router3);
                this.$store.dispatch('tagsView/addView', router4);
                this.$store.dispatch('tagsView/addView', router5);
            }

            this.$router.push(router1);
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