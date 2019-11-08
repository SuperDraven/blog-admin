<style lang="less">
@import '../../assets/css/common.less';
.article-link-con{
    height: 32px;
    width: 100%;
}
.fixed-link-enter{
    opacity: 0;
}
.fixed-link-enter-active, .fixed-link-leave-active {
    transition: opacity .3s
}
.fixed-link-enter-to{
    opacity: 1
}
.openness-radio-con{
    margin-left: 40px;
    padding-left: 10px;
    height: 130px;
    border-left: 1px dashed #ebe9f3;
    overflow: hidden;
}
.publish-time-picker-con{
    margin-left: 40px;
    padding-left: 10px;
    height: 100px;
    border-left: 1px dashed #ebe9f3;
    overflow: hidden;
}
.openness-con-enter{
    height: 0;
}
.openness-con-enter-active, .openness-con-leave-active{
    transition: height .3s;
}
.openness-con-enter-to{
    height: 130px;
}
.openness-con-leave{
    height: 130px;
}
.openness-con-leave-to{
    height: 0;
}
.publish-button-con{
    border-top: 1px solid #f3eff1;
    padding-top: 14px;
}
.publish-button{
    float: right;
    margin-left: 10px;
}
.publish-time-enter{
    height: 0;
}
.publish-time-enter-active, .publish-time-leave-active{
    transition: height .3s;
}
.publish-time-enter-to{
    height: 100px;
}
.publish-time-leave{
    height: 100px;
}
.publish-time-leave-to{
    height: 0;
}
.classification-con{
    height: 200px;
    margin-top: -16px;
    border-left: 1px solid #dddee1;
    border-right: 1px solid #dddee1;
    border-bottom: 1px solid #dddee1;
    border-radius: 0 0 3px 3px;
    padding: 10px;
    overflow: auto;
}
.add-new-tag-con{
    margin-top: 20px;
    border-top: 1px dashed #dbdddf;
    padding: 20px 0;
    height: 60px;
    overflow: hidden;
}
.add-new-tag-enter{
    height: 0;
    margin-top: 0;
    padding: 0px 0;
}
.add-new-tag-enter-active, .add-new-tag-leave-active{
    transition: all .3s;
}
.add-new-tag-enter-to{
    height: 60px;
    margin-top: 20px;
    padding: 20px 0;
}
.add-new-tag-leave{
    height: 60px;
    margin-top: 20px;
    padding: 20px 0;
}
.add-new-tag-leave-to{
    height: 0;
    margin-top: 0;
    padding: 0px 0;
}
</style>

<template>
    <div>
        <Row>
            <Col>
            <Card>
                <Form :label-width="80">
                  <FormItem label="父分类">
                  <i-select v-model="data.parent_id">
                    <i-option v-for="item in Category_list" :value="item.id">{{ item.title }}</i-option>
                  </i-select>
                  </FormItem>
                    <FormItem label="分类标题" :error="articleError">
                        <Input v-model="data.title" @on-blur="handleArticletitleBlur" icon="android-list" />
                    </FormItem>
                  <Form-item>
                    <i-button type="primary" @click="CreateCategory">提交</i-button>
                    <i-button type="ghost" style="margin-left: 8px">取消</i-button>
                  </Form-item>
                </Form>
            </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
//import tinymce from 'tinymce'
import axios from '~/plugins/axios2'

export default {
  name: 'category-create',
  data() {
    return {
      Category_list: [],
      data: {},
      datas: {}
    }
  },
  async asyncData(context, callback) {
    let id = ''
    if (context.route.query.id) {
      id = context.route.query.id
      let req = await axios.get('api/admin/category/show/' + id, {})
      if (req.data.data) {
        callback(null, {
          data: req.data.data
        })
      }
    } else {
      callback(null, {
        data: {}
      })
    }
  },
  methods: {
    async GetCategoryList() {
      let req = await axios.get('api/admin/category/list', {})
      if (req.data.data) {
        this.Category_list = req.data.data
        this.Category_list.unshift(
          {
            'id': '0',
            'parent_id': 0,
            'title': '顶级分类'
          }
        )
      } else {
        this.Category_list.push(
          {
            'id': '0',
            'parent_id': 0,
            'title': '顶级分类'
          }
        )
      }

      console.log(req)
    },
    async CreateCategory() {
      let data = this.data
      let req = ''
      if (data.id) {
        req = await axios.put('api/admin/category/edit/' + data.id, data)
      } else {
        req = await axios.post('api/admin/category/create', data)
      }
      if (req.status === 200) {
        this.GetCategoryList()
        this.$Message.success(req.data.data)
      }
    }
  },
  computed: {
  },
  mounted() {
    // console.log(this.router)
    this.GetCategoryList()
  },
  destroyed() {
    // tinymce.get('articleEditor').destroy()
  }
}
</script>
