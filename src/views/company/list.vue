<template>
    <div class="app-container">
        <div class="head-container">
            <div class="condition">
                <div class="item">
                    <span class="text">上报方:</span>
                    <el-select v-model="searchForm.area" size="mini" placeholder="请选择上报方" style="width: 200px;">
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
                <el-button type="primary" size="mini" @click="query">查询</el-button>
                <el-button type="warning" size="mini" @click="reset">重置</el-button>
            </div>
        </div>
        <div class="select-btn">
            <el-button type="success" size="mini" @click="downloadZip">批量导出</el-button>
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
                    <span class="click-btn" @click="downloadExcel(scope.row)">导出数据</span>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination :page-size="page.pageSize" :total="page.total" :current-page="page.pageNo"
            style="margin-top: 8px;" layout="total, prev, pager, next, sizes" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script>
import { getReporteParty, getTableList, getExportExcel, getExportZip } from '@/api/company'
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
                // { label: '全部', value: '' },
                // { label: '深圳市', value: '深圳市' },
                // { label: '福田区', value: '福田区' },
                // { label: '南山区', value: '南山区' },
                // { label: '罗湖区', value: '罗湖区' },
                // { label: '宝安区', value: '宝安区' },
                // { label: '龙岗区', value: '龙岗区' },
                // { label: '龙华区', value: '龙华区' },
                // { label: '光明区', value: '光明区' },
                // { label: '盐田区', value: '盐田区' },
                // { label: '坪山区', value: '坪山区' },
                // { label: '大鹏新区', value: '大鹏新区' },
                // { label: '深汕特别合作区', value: '深汕特别合作区' },
            ],
            tableData: [
                // { unitName: '市直单位', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: '市级单位' },
                // { unitName: '区级单位', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: '区级单位' },
                // { unitName: '交易机构', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 3 },
                // { unitName: '国家实验室', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 4 },
                // { unitName: '数据服务方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 5 },
                // { unitName: '数据应用方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 6 },
                // { unitName: '数据服务方、数据应用方', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 7 },
                // { unitName: '中央企业', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 8 },
                // { unitName: '重点行业', area: '深圳市', createTime: '2023-10-01 16:06:08', unitType: 9 },
            ],
            page: {
                pageNo: 1,
                pageSize: 10,
                total: 0
            },
        }
    },
    created() {
        this.getReporteList()
    },
    methods: {
        getReporteList() {
            getReporteParty().then(res => {
                if (res && res.rows) {
                    this.areaList = res.rows.map(item => {
                        return { label: item, value: item }
                    })
                    if (this.areaList.length > 0) {
                        this.searchForm.area = this.areaList[0].value
                        this.getList()
                    }
                    // this.areaList.unshift({ label: '全部', value: '' })
                }
            })
        },
        getList() {
            const params = {
                area: this.searchForm.area,
                unitName: this.searchForm.unitName,
                page: {
                    pageNo: this.page.pageNo,
                    pageSize: this.page.pageSize
                }
            }
            getTableList(params).then(res => {
                if (res && res.rows) {
                    this.tableData = res.rows
                    this.page.total = res.total
                }
            })
        },
        downloadExcel(row) {
            const params = {
                unitName: row.unitName,
                usciCode: row.usciCode,
                type: row.type,
                unitType: row.unitType
            }
            this.$message({
                message: '正在导出，请稍后...',
                type: 'success'
            });
            getExportExcel(params).then(res => {
                // const fileName = res.headers['content-disposition'].split('filename=')[1].split(';')[0].replace(/"/g, '')
                // this.downloadFile(res, decodeURIComponent(fileName))
                const fileName = `${row.unitName}_${Date.now()}.xlsx`
                this.downloadFile(res, fileName)
            }).catch(err => {
                this.$message.error('导出失败，请稍后再试！')
            })
        },
        downloadZip() {
            if (!this.multipleSelection || this.multipleSelection.length === 0) {
                this.$message.error('导出失败，请选择需要导出数据的单位!')
                return
            }
            this.$message({
                message: '正在导出，请稍后...',
                type: 'success'
            });
            getExportZip(this.multipleSelection).then(res => {
                // const fileName = res.headers['content-disposition'].split('filename=')[1].split(';')[0].replace(/"/g, '')
                // this.downloadFile(res, decodeURIComponent(fileName))
                const fileName = `数据填报调查_${Date.now()}.zip`
                this.downloadFile(res, fileName)
            }).catch(err => {
                this.$message.error('导出失败，请稍后再试！')
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
                '/serviceApply',
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

            if (unitType === '市直单位' || unitType === '区级单位') {
                let title = '市级政府公共数据资源调查表'
                let reportTypeCode = 'city_report'
                if (unitType === '区级单位') {
                    title = '区级政府公共数据资源调查表'
                    reportTypeCode = 'area_report'
                }
                router1 = {
                    path: '/units/base',
                    name: 'GovernmentBase',
                    meta: { title: '公共数据调查基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/units/table',
                    name: 'UnitsTable',
                    meta: { title, query: { 'usciCode': usciCode, 'type': type, reportTypeCode }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode }
                };
            }
            if (unitType === '数据交易机构') {
                router1 = {
                    path: '/trade/base',
                    name: 'TradeBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/trade/table',
                    name: 'TradeTable',
                    meta: { title: '数据交易机构数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'jys_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'jys_report' }
                };
            }
            if (unitType === '国家实验室及全国重点实验室') {
                router1 = {
                    path: '/lab/base',
                    name: 'LabBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/lab/table',
                    name: 'LabTable',
                    meta: { title: '国家实验室及全国重点实验室数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sys_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sys_report' }
                };
            }
            if (unitType === '数据服务方') {
                router1 = {
                    path: '/service/base',
                    name: 'ServiceBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/service/table',
                    name: 'ServiceTable',
                    meta: { title: '数据服务方数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sup_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sup_report' }
                };
            }
            if (unitType === '数据应用方') {
                router1 = {
                    path: '/apply/base',
                    name: 'ApplyBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/apply/table',
                    name: 'ApplyTable',
                    meta: { title: '数据应用方数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'app_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'app_report' }
                };
            }
            if (unitType === '数据服务方、数据应用方') {
                router1 = {
                    path: '/serviceApply/base',
                    name: 'ServiceApplyBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/serviceApply/applyTable',
                    name: 'ServiceApplyTable2',
                    meta: { title: '数据应用方数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'app_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'app_report' }
                };
            }
            if (unitType === '央企') {
                router1 = {
                    path: '/central/base',
                    name: 'CentralBase',
                    meta: { title: '企业基本情况', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type }
                };
                router2 = {
                    path: '/central/table',
                    name: 'CentralTable',
                    meta: { title: '央企数据资源调查', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'yqsj_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'yqsj_report' }
                };
            }

            this.$store.dispatch('tagsView/addView', router1);
            this.$store.dispatch('tagsView/addView', router2);

            if (unitType === '数据应用方') {
                if (row.deviceList && row.deviceList.length > 0) {
                    for (let i = 0; i < row.deviceList.length; i++) {
                        if (row.deviceList[i] === '其他') {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: '/apply/other',
                                    name: 'ApplyOther',
                                    meta: { title: '其他数据资源调查', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type }
                                }
                            );
                        } else {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: `/apply/item/${i + 1}`,
                                    name: 'ApplyItem',
                                    meta: { title: `${row.deviceList[i]}数据资源调查`, query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }
                                }
                            );
                        }
                    }
                }
            }
            if (unitType === '数据服务方、数据应用方') {
                this.$store.dispatch('tagsView/addView', {
                    path: '/serviceApply/serviceTable',
                    name: 'ServiceApplyTable1',
                    meta: { title: '数据服务方数据资源调查表', query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sup_report' }, noCache: true },
                    query: { 'usciCode': usciCode, 'type': type, reportTypeCode: 'sup_report' }
                });
                if (row.deviceList && row.deviceList.length > 0) {
                    for (let i = 0; i < row.deviceList.length; i++) {
                        if (row.deviceList[i] === '其他') {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: '/serviceApply/other',
                                    name: 'ServiceApplyOther',
                                    meta: { title: '其他数据资源调查', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type }
                                }
                            );
                        } else {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: `/serviceApply/item/${i + 1}`,
                                    name: 'ServiceApplyItem',
                                    meta: { title: `${row.deviceList[i]}数据资源调查`, query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }
                                }
                            );
                        }
                    }
                }
            }
            if (unitType === '央企') {
                if (row.deviceList && row.deviceList.length > 0) {
                    for (let i = 0; i < row.deviceList.length; i++) {
                        if (row.deviceList[i] === '其他') {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: '/central/other',
                                    name: 'CentralOther',
                                    meta: { title: '其他数据资源调查', query: { 'usciCode': usciCode, 'type': type }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type }
                                }
                            );
                        } else {
                            this.$store.dispatch('tagsView/addView',
                                {
                                    path: `/central/item/${i + 1}`,
                                    name: 'CentralItem',
                                    meta: { title: `${row.deviceList[i]}数据资源调查`, query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }, noCache: true },
                                    query: { 'usciCode': usciCode, 'type': type, reportTypeName: row.deviceList[i] }
                                }
                            );
                        }
                    }
                }
            }

            this.$router.push(router1);
        },
        query() {
            this.page.pageNo = 1
            this.getList()
        },
        reset() {
            this.searchForm.area = ''
            if (this.areaList.length > 0) {
                this.searchForm.area = this.areaList[0].value
            }
            this.multipleSelection = []
            this.searchForm.unitName = ''
            this.page.pageNo = 1
            this.page.pageSize = 10
            this.getList()
        },
        // 下载文件
        downloadFile(obj, fileName) {
            const url = window.URL.createObjectURL(new Blob([obj]))
            const link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
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