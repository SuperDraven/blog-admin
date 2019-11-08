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
    height: 80px;
    /*overflow: hidden;*/
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
            <Col span="18">
            <Card>
                <Form :label-width="80">
                    <FormItem label="文章标题" :error="articleError">
                        <Input v-model="data.title"  icon="android-list" />
                    </FormItem>
                  <FormItem label="文章详情" :error="articleError">
                    <Input v-model="data.describe"  icon="android-list" />
                  </FormItem>
                    <!--<div class="article-link-con">-->

                        <!--<transition name="fixed-link">-->
                            <!--<FormItem v-show="showLink" label="固定链接">-->
                                <!--<span>-->
                                    <!--<span key="pathfixedtext">{{ fixedLink }}</span>-->
                                    <!--<span key="pathText" v-if="!editLink">{{ articlePath }}</span>-->
                                    <!--<Input key="pathInput" v-model="articlePath" style="display:inline-block;width:auto" v-else/>-->
                                <!--</span>-->
                                <!--<span style="float:right;">-->
                                    <!--<Button :type="editPathButtonType" @click="editArticlePath">{{ editPathButtonText }}</Button>-->
                                <!--</span>-->
                            <!--</FormItem>-->
                        <!--</transition>-->
                    <!--</div>-->
                </Form>
              <div class="margin-top-20">
                <Upload
                  :on-success="uoload_success"
                  multiple
                  type="drag"
                  action="http://47.105.101.149:8086/api/upload_img">
                  <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>上传图片</p>
                  </div>
                </Upload>
              </div>
                <div class="margin-top-20">
                  <div class="mavonEditor">
                    <no-ssr>
                      <mavon-editor ref=md   @imgAdd="$imgAdd" v-model="data.details"/>
                      <!--<mavon-editor ref=md  :toolbars="markdownOption" @imgAdd="$imgAdd" v-model="data.details"/>-->
                    </no-ssr>
                  </div>
                </div>
            </Card>
            </Col>
            <Col span="6" class="padding-left-10">
            <Card>
                <p slot="title">
                    <Icon type="paper-airplane"></Icon>
                    发布
                </p>
                <p class="margin-top-10">
                    <Icon type="android-time"></Icon>&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp; 态：
                    <Select size="small" v-model="data.status" style="width:90px" value="草稿">
                        <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.name }}</Option>
                    </Select>
                </p>
                <p class="margin-top-10">
                    <Icon type="eye"></Icon>&nbsp;&nbsp;公开度：&nbsp;
                    <b>{{ Openness }}</b>
                    <Button v-show="!editOpenness" size="small" @click="handleEditOpenness" type="text">修改</Button>
                    <transition name="openness-con">
                        <div v-show="editOpenness" class="openness-radio-con">
                            <RadioGroup v-model="data.disclosure" vertical>
                                <Radio label="1">
                                    公开
                                    <Checkbox v-show="data.disclosure === '1'" v-model="data.TopArticle">在首页置顶这篇文章</Checkbox>
                                </Radio>
                                <Radio label="2">
                                    密码
                                    <Input v-model="data.password" v-show="data.disclosure === '2'" style="width:120px" size="small" placeholder="请输入密码" />
                                </Radio>
                                <Radio label="3">私密</Radio>
                            </RadioGroup>
                            <div>
                                <Button type="primary" @click="handleSaveOpenness">确认</Button>
                                <Button type="ghost" @click="cancelEditOpenness">取消</Button>
                            </div>
                        </div>
                    </transition>
                </p>
                <p class="margin-top-10">
                    <Icon type="ios-calendar-outline"></Icon>&nbsp;&nbsp;
                    <span v-if="publishTimeType === 'immediately'">立即发布</span>
                    <span v-else>定时：{{ publishTime }}</span>
                    <Button v-show="!editPublishTime" size="small" @click="handleEditPublishTime" type="text">修改</Button>
                    <transition name="publish-time">
                        <div v-show="editPublishTime" class="publish-time-picker-con">
                            <div class="margin-top-10">
                                <DatePicker v-model="data.publish_at" @on-change="setPublishTime" type="datetime" style="width:200px;" placeholder="选择日期和时间"></DatePicker>
                            </div>
                            <div class="margin-top-10">
                                <Button type="primary" @click="handleSavePublishTime">确认</Button>
                                <Button type="ghost" @click="cancelEditPublishTime">取消</Button>
                            </div>
                        </div>
                    </transition>
                </p>
                <Row class="margin-top-20 publish-button-con">
                    <span class="publish-button">
                        <Button @click="handlePreview">预览</Button>
                    </span>
                    <span class="publish-button">
                        <Button @click="handleSaveDraft">保存草稿</Button>
                    </span>
                    <span class="publish-button">
                        <Button v-if="!data.id" @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">发布</Button>
                        <Button v-if="data.id" @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">保存</Button>
                    </span>
                </Row>
            </Card>
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="navicon-round"></Icon>
                        分类目录
                    </p>
                    <Tabs type="card">
                        <TabPane label="所有分类目录">
                            <div class="classification-con">
                                <Tree :data="classificationList" @on-check-change="setClassificationInAll" show-checkbox></Tree>
                            </div>
                        </TabPane>
                        <!--<TabPane label="常用目录">-->
                            <!--<div class="classification-con">-->
                                <!--<CheckboxGroup v-model="offenUsedClassSelected" @on-change="setClassificationInOffen">-->
                                    <!--<p v-for="item in offenUsedClass" :key="item.title">-->
                                        <!--<Checkbox :label="item.title">{{ item.title }}</Checkbox>-->
                                    <!--</p>-->
                                <!--</CheckboxGroup>-->
                            <!--</div>-->
                        <!--</TabPane>-->
                    </Tabs>
                </Card>
            </div>
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        标签
                    </p>
                    <Row>
                        <Col span="18">
                        <Select v-model="data.label" multiple @on-change="handleSelectTag" placeholder="请选择文章标签">
                            <Option v-for="item in articleTagList" :value="item.id" :key="item.id">{{ item.title }}</Option>
                        </Select>
                        </Col>
                        <Col span="6" class="padding-left-10">
                        <Button v-show="!addingNewTag" @click="handleAddNewTag" long type="ghost">新建</Button>
                        </Col>
                    </Row>
                    <transition name="add-new-tag">
                        <div v-show="addingNewTag" class="add-new-tag-con">
                          <Col span="14">
                            <ColorPicker v-model="color" alpha />
                          </Col>
                            <Col span="14">
                            <Input v-model="newTagName" placeholder="请输入标签名" />
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="createNewTag" long type="primary">确定</Button>
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="cancelCreateNewTag" long type="ghost">取消</Button>
                            </Col>
                        </div>
                    </transition>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
//import tinymce from 'tinymce'
import qs from 'qs'

import axios from '~/plugins/axios'
import axios2 from '~/plugins/axios2'

export default {
  name: 'artical-publish',
  data() {
    return {
      articleTitle: '',
      articleError: '',
      showLink: false,
      fixedLink: '',
      articlePath: '',
      articlePathHasEdited: false,
      editLink: false,
      editPathButtonType: 'ghost',
      editPathButtonText: '编辑',
      articleStateList: [{
        name: '展示',
        value: '1'
      }, {
        name: '等待审核',
        value: '2'
      }],
      editOpenness: false,
      Openness: '公开',
      currentOpenness: '公开',
      topArticle: false,
      publishTime: '',
      publishTimeType: 'immediately',
      editPublishTime: false, // 是否正在编辑发布时间
      articleTagSelected: [], // 文章选中的标签
      articleTagList: [], // 所有标签列表
      classificationList: [],
      classificationSelected: [], // 在所有分类目录中选中的目录数组
      offenUsedClass: [],
      offenUsedClassSelected: [], // 常用目录选中的目录
      classificationFinalSelected: [], // 最后实际选择的目录
      publishLoading: false,
      addingNewTag: false, // 添加新标签
      newTagName: '', // 新建标签名
      color: 'rgba(25, 190,107, .5)',
      data: {
        disclosure: '1',
        group_photo: []
      }
    }
  },
  async asyncData(context, callback) {
    let id = ''
    if (context.route.query.id) {
      id = context.route.query.id
      let req = await axios.get('api/admin/article/show/' + id, {})
      if (req.data.data) {
        callback(null, {
          data: req.data.data
        })
      }
    } else {
      callback(null, {
        data: {
          disclosure: '1',
          group_photo: []
        }
      })
    }
  },
  methods: {

    async $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var that = this.$refs.md
      var formdata = new FormData()
      formdata.append('file', $file)
      axios({
        url: 'api/upload_img',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((res) => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
        // $vm.$img2Url 详情见本页末尾
        that.$img2Url(pos, res.data.data);
      })
    },
    async GetLabelList() {
      let req = await axios.get('api/admin/label/list', {})
      if (req.data.data) {
        this.articleTagList = req.data.data
      }
    },
    async GetCategorytree() {
      let req = await axios.get('api/admin/category/treelist', {})
      if (req.data.data) {
        if (!this.data.id) {
          this.classificationList = req.data.data
        } else {
          this.classificationList = this.data.tree
        }
      }
      console.log(req.data.data)
    },
    uoload_success(response, file, fileList) {
      this.data.group_photo.push(response.data)
      console.log(response)
    },
    // handleArticletitleBlur() {
    //   if (this.articleTitle.length !== 0) {
    //     // this.articleError = '';
    //     localStorage.articleTitle = this.articleTitle // 本地存储文章标题
    //     if (!this.articlePathHasEdited) {
    //       let date = new Date()
    //       let year = date.getFullYear()
    //       let month = date.getMonth() + 1
    //       let day = date.getDate()
    //       this.fixedLink =
    //         window.location.host + '/' + year + '/' + month + '/' + day + '/'
    //       this.articlePath = this.articleTitle
    //       this.articlePathHasEdited = true
    //       this.showLink = true
    //     }
    //   } else {
    //     // this.articleError = '文章标题不可为空哦';
    //     this.$Message.error('文章标题不可为空哦')
    //   }
    // },
    editArticlePath() {
      this.editLink = !this.editLink
      this.editPathButtonType =
        this.editPathButtonType === 'ghost' ? 'success' : 'ghost'
      this.editPathButtonText =
        this.editPathButtonText === '编辑' ? '完成' : '编辑'
    },
    handleEditOpenness() {
      this.editOpenness = !this.editOpenness
    },
    handleSaveOpenness() {
      this.Openness = this.currentOpenness
      this.editOpenness = false
    },
    cancelEditOpenness() {
      this.currentOpenness = this.Openness
      this.editOpenness = false
    },
    handleEditPublishTime() {
      this.editPublishTime = !this.editPublishTime
    },
    handleSavePublishTime() {
      this.publishTimeType = 'timing'
      this.editPublishTime = false
    },
    cancelEditPublishTime() {
      this.publishTimeType = 'immediately'
      this.editPublishTime = false
    },
    setPublishTime(datetime) {
      this.publishTime = datetime
    },
    setClassificationInAll(selectedArray) {
      this.data.category = selectedArray.map(item => {
        return item.id
      })
      // localStorage.classificationSelected = JSON.stringify(
      //   this.classificationFinalSelected
      // ) // 本地存储所选目录列表
    },
    setClassificationInOffen(selectedArray) {
      this.classificationFinalSelected = selectedArray
    },
    handleAddNewTag() {
      this.addingNewTag = !this.addingNewTag
    },
    createNewTag() {
      if (this.newTagName.length !== 0) {
        this.articleTagList.push({ title: this.newTagName })
        this.addingNewTag = false
        setTimeout(() => {
          this.newTagName = ''
        }, 200)
      } else {
        this.$Message.error('请输入标签名')
      }
    },
    cancelCreateNewTag() {
      this.newTagName = ''
      this.addingNewTag = false
    },
    canPublish() {
      if (this.articleTitle.length === 0) {
        this.$Message.error('请输入文章标题')
        return false
      } else {
        return true
      }
    },
    handlePreview() {
      if (this.canPublish()) {
        if (this.publishTimeType === 'immediately') {
          let date = new Date()
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()
          let hour = date.getHours()
          let minute = date.getMinutes()
          let second = date.getSeconds()
          localStorage.publishTime =
            year +
            ' 年 ' +
            month +
            ' 月 ' +
            day +
            ' 日 -- ' +
            hour +
            ' : ' +
            minute +
            ' : ' +
            second
        } else {
          localStorage.publishTime = this.publishTime // 本地存储发布时间
        }
        //localStorage.content = tinymcetinymce.activeEditor.getContent()
        this.$router.push({
          name: 'preview'
        })
      }
    },
    handleSaveDraft() {
      if (!this.canPublish()) {
        //
      }
    },
    async handlePublish() {
      let req
      if (!this.data.id) {
        req = await axios2.post('api/admin/article/create', this.data)
      } else {
        req = await axios2.put('api/admin/article/edit/' + this.data.id, this.data)
      }
      console.log(req)
      if (req.status === 200) {
        this.publishLoading = true
        setTimeout(() => {
          this.publishLoading = false
          this.$Notice.success({
            title: '保存成功',
            desc: '文章《' + this.data.title + '》保存成功'
          })
        }, 1000)
      }
    },
    handleSelectTag() {
      localStorage.tagsList = JSON.stringify(this.articleTagSelected) // 本地存储文章标签列表
    }
  },
  computed: {
    completeUrl() {
      let finalUrl = this.fixedLink + this.articlePath
      localStorage.finalUrl = finalUrl // 本地存储完整文章路径
      return finalUrl
    }
  },
  mounted() {
    this.GetCategorytree()
    this.GetLabelList()
    // this.articleTagList = [
    //   { value: 'vue' },
    //   { value: 'iview' },
    //   { value: 'ES6' },
    //   { value: 'webpack' },
    //   { value: 'babel' },
    //   { value: 'eslint' }
    // ]


    // this.classificationList = [
    //   {
    //     title: 'Vue实例我',
    //     indeterminate: true,
    //     expand: true,
    //     children: [
    //       {
    //         title: '数据与方法',
    //         indeterminate: true,
    //         expand: true
    //       },
    //       {
    //         title: '生命周期',
    //         indeterminate: true,
    //         expand: true
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Class与Style绑定',
    //     expand: true,
    //     children: [
    //       {
    //         title: '绑定HTML class',
    //         expand: true,
    //         children: [
    //           {
    //             title: '对象语法',
    //             expand: true
    //           },
    //           {
    //             title: '数组语法',
    //             expand: true
    //           },
    //           {
    //             title: '用在组件上',
    //             expand: true
    //           }
    //         ]
    //       },
    //       {
    //         title: '生命周期',
    //         expand: true
    //       }
    //     ]
    //   },
    //   {
    //     title: '模板语法',
    //     expand: true,
    //     children: [
    //       {
    //         title: '插值',
    //         expand: true
    //       },
    //       {
    //         title: '指令',
    //         expand: true
    //       },
    //       {
    //         title: '缩写',
    //         expand: true
    //       }
    //     ]
    //   }
    // ]
    this.offenUsedClass = [
      {
        title: 'vue实例'
      },
      {
        title: '生命周期'
      },
      {
        title: '模板语法'
      },
      {
        title: '插值'
      },
      {
        title: '缩写'
      }
    ]
    // tinymce.init({
    //   selector: '#articleEditor',
    //   branding: false,
    //   elementpath: false,
    //   height: 600,
    //   language: 'zh_CN.GB2312',
    //   menubar: 'edit insert view format table tools',
    //   theme: 'modern',
    //   plugins: [
    //     'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
    //     'searchreplace visualblocks visualchars code fullscreen fullpage',
    //     'insertdatetime media nonbreaking save table contextmenu directionality',
    //     'emoticons paste textcolor colorpicker textpattern imagetools codesample'
    //   ],
    //   toolbar1:
    //     ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
    //   autosave_interval: '20s',
    //   image_advtab: true,
    //   table_default_styles: {
    //     width: '100%',
    //     borderCollapse: 'collapse'
    //   }
    // })
  },
  destroyed() {
    // tinymce.get('articleEditor').destroy()
  }
}
</script>
