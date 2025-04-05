<template>
    <div class="app-container">
        <div class="table-container">
            <div class="table-item">
                <div class="item-title">单位名称</div>
                <div class="item-content">XXXXXX单位</div>
            </div>
            <div class="table-item">
                <div class="item-title">统一社会信用代码</div>
                <div class="item-content">XXXXXXXXXX</div>
            </div>
            <div class="table-item">
                <div class="item-title">机构类型</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">单位类型</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">政府机构类型</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">所属行业</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">通讯地址</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">详细地址</div>
                <div class="item-content"></div>
            </div>
            <div class="table-item">
                <div class="item-title">是否开展公共数据授权运营</div>
                <div class="item-content"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MunicipalUnitsBase',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.app-container {
    .table-container {
        width: 100%;
        font-size: 12px;
        border: 1px solid #ccc;
        .table-item {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #ccc;
            &:last-child {
                border-bottom: none;
            }
            .item-title {
                width: 200px;
                display: flex;
                align-items: center;
                padding: 6px 10px;
                font-weight: 600;
                color: #333;
                background-color: #f1f1f1;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                box-sizing: border-box;
            }
            .item-content {
                width: calc(100% - 202px);
                display: flex;
                align-items: center;
                padding: 6px 10px;
                color: #666;
                box-sizing: border-box;
            }
        }
    }
}
</style>