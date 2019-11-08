<style lang="less">
  @import '../../assets/css/common.less';
  .dragging-tip-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }
  .dragging-tip-enter,
  .dragging-tip-leave-to {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .dragging-tip-con {
    display: block;
    text-align: center;
    width: 100%;
    height: 50px;
  }
  .dragging-tip-con span {
    font-size: 18px;
  }
  .record-tip-con {
    display: block;
    width: 100%;
    height: 292px;
    overflow: auto;
  }
  .record-item {
    box-sizing: content-box;
    display: block;
    overflow: hidden;
    height: 24px;
    line-height: 24px;
    padding: 8px 10px;
    border-bottom: 1px dashed gainsboro;
  }
  .record-tip-con span {
    font-size: 14px;
  }
  .edittable-test-con {
    height: 160px;
  }
  .edittable-table-height-con {
    height: 190px;
  }
  .edittable-con-1 {
    box-sizing: content-box;
    padding: 15px 0 0;
    height: 196px;
  }
  .edittable-table-get-currentdata-con {
    height: 190px !important;
  }
  .exportable-table-download-con1 {
    padding: 16px 0 16px 20px;
    border-bottom: 1px dashed #c3c3c3;
    margin-bottom: 16px;
  }
  .exportable-table-download-con2 {
    padding-left: 20px;
  }
  .show-image {
    padding: 20px 0px;
  }
  .show-image img {
    display: block;
    width: 100%;
    height: auto;
  }
  .searchable-table {
    &-con1 {
      height: 230px !important;
    }
  }
</style>

<template>
  <div>

    <Row class="margin-top-10">
      <Col span="24">
        <Card>
          <p slot="title">
            <Icon type="ios-keypad"></Icon>
            文章列表
          </p>
          <Row :gutter="10">

            <Col span="24">
              <div class="edittable-table-height-con">
                <can-edit-table refs="table4" v-model="editInlineAndCellData" @on-delete="handleDel" @on-cell-change="handleCellChange"  @on-change="handleChange" :editIncell="true" :columns-list="editInlineAndCellColumn"></can-edit-table>
              </div>
            </Col>
            <Modal :width="900" v-model="showCurrentTableData">
              <can-edit-table refs="table5" v-model="editInlineAndCellData" :columns-list="showCurrentColumns"></can-edit-table>
            </Modal>
          </Row>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  import canEditTable from '~/components/tables/components/canEditTable.vue'
  import tableData from '~/components/tables/components/label/table-header.js'
  import axios from '~/plugins/axios2'

  export default {
    name: 'list',
    components: {
      canEditTable
    },
    data() {
      return {
        editInlineAndCellColumn: [],
        editInlineAndCellData: [],
        showCurrentColumns: [],
        showCurrentTableData: false
      }
    },
    methods: {
      async getData() {

        let req = await axios.get('api/admin/label/list', {})
        // console.log(tableData)
        this.editInlineAndCellColumn = tableData.editInlineAndCellColumn
        if (req.data.data) {
          this.editInlineAndCellData = req.data.data
        }
        // this.editInlineAndCellData = tableData.editInlineAndCellData
        this.showCurrentColumns = tableData.showCurrentColumns
      },
      handleNetConnect(state) {
        this.breakConnect = state
      },
      handleLowSpeed(state) {
        this.lowNetSpeed = state
      },
      getCurrentData() {
        this.showCurrentTableData = true
      },
      async handleDel(val, index) {
        let id = val[index].id
        // console.log(this.editInlineAndCellData)
        let req = await axios.delete('api/admin/label/delete/' + id, {})
        if (req.status === 200) {
          this.editInlineAndCellData.splice(index, 1)
          this.$Message.success(req.data.data)
        }
      },
      // handleCellChange(val, index, key) {
      //   this.$Message.success(
      //     '修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据'
      //   )
      // },
      handleChange(val, index) {
        this.$router.push({path:'/label/create/', query:{id:val[index].id}})
        // this.$Message.success('修改了第' + (index + 1) + '行数据')
      }
    },
    created() {
      this.getData()
    }
  }
</script>

