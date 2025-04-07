<template>
    <div class="app-container">
        <div class="table-container">
            <div class="table-item">
                <div class="item-title">单位名称</div>
                <div class="item-content">XXXXXX单位</div>
            </div>
            <div class="table-item">
                <div class="item-title">填报人员</div>
                <div class="table-box">
                    <div class="box-item">
                        <div>姓名：</div>
                        <div>张三</div>
                    </div>
                    <div class="box-item">
                        <div>部门：</div>
                        <div>XXXXXX部门</div>
                    </div>
                    <div class="box-item">
                        <div>手机：</div>
                        <div>188XXXXXX</div>
                    </div>
                    <div class="box-item">
                        <div>职务：</div>
                        <div>XXXXXX</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ServiceBase',
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
                        margin-right: 6px;
                        color: $tableTextColor2;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>