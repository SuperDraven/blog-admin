(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{293:function(t,e,n){var content=n(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7d2e36a4",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";var o=n(293);n.n(o).a},412:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.article-link-con{height:32px;width:100%}.fixed-link-enter{opacity:0}.fixed-link-enter-active,.fixed-link-leave-active{transition:opacity .3s}.fixed-link-enter-to{opacity:1}.openness-radio-con{height:130px}.openness-radio-con,.publish-time-picker-con{margin-left:40px;padding-left:10px;border-left:1px dashed #ebe9f3;overflow:hidden}.publish-time-picker-con{height:100px}.openness-con-enter{height:0}.openness-con-enter-active,.openness-con-leave-active{transition:height .3s}.openness-con-enter-to,.openness-con-leave{height:130px}.openness-con-leave-to{height:0}.publish-button-con{border-top:1px solid #f3eff1;padding-top:14px}.publish-button{float:right;margin-left:10px}.publish-time-enter{height:0}.publish-time-enter-active,.publish-time-leave-active{transition:height .3s}.publish-time-enter-to,.publish-time-leave{height:100px}.publish-time-leave-to{height:0}.classification-con{height:200px;margin-top:-16px;border-left:1px solid #dddee1;border-right:1px solid #dddee1;border-bottom:1px solid #dddee1;border-radius:0 0 3px 3px;padding:10px;overflow:auto}.add-new-tag-con{margin-top:20px;border-top:1px dashed #dbdddf;padding:20px 0;height:80px}.add-new-tag-enter{height:0;margin-top:0;padding:0}.add-new-tag-enter-active,.add-new-tag-leave-active{transition:all .3s}.add-new-tag-enter-to,.add-new-tag-leave{height:60px;margin-top:20px;padding:20px 0}.add-new-tag-leave-to{height:0;margin-top:0;padding:0}",""])},748:function(t,e,n){"use strict";n.r(e);n(34);var o=n(5),r=(n(118),n(69),n(24),n(23),n(68),n(112)),l=n.n(r),d=(n(45),n(127),n(128),n(63)),c={baseURL:"http://blog.houlahoula.com:8086",timeout:5e3,responseType:"json"},h=l.a.create(c);h.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),h.interceptors.response.use((function(t){if(!t.status||200!==t.status||"error"!==t.data.status)return t}),(function(t){try{return 200!==t.response.status&&d.Message.error(t.response.data.msg||""),Promise.resolve(t.response)}catch(t){d.Message.error("系统性错误"),console.info(t)}}));var m,v,f,x,w,T=h,_=n(88),y={name:"artical-publish",data:function(){return{articleTitle:"",articleError:"",showLink:!1,fixedLink:"",articlePath:"",articlePathHasEdited:!1,editLink:!1,editPathButtonType:"ghost",editPathButtonText:"编辑",articleStateList:[{name:"展示",value:"1"},{name:"等待审核",value:"2"}],editOpenness:!1,Openness:"公开",currentOpenness:"公开",topArticle:!1,publishTime:"",publishTimeType:"immediately",editPublishTime:!1,articleTagSelected:[],articleTagList:[],classificationList:[],classificationSelected:[],offenUsedClass:[],offenUsedClassSelected:[],classificationFinalSelected:[],publishLoading:!1,addingNewTag:!1,newTagName:"",color:"rgba(25, 190,107, .5)",data:{disclosure:"1",group_photo:[]}}},asyncData:(w=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.route.query.id){t.next=9;break}return o=e.route.query.id,t.next=5,T.get("api/admin/article/show/"+o,{});case 5:(r=t.sent).data.data&&n(null,{data:r.data.data}),t.next=10;break;case 9:n(null,{data:{disclosure:"1",group_photo:[]}});case 10:case"end":return t.stop()}}),t)}))),function(t,e){return w.apply(this,arguments)}),methods:{$imgAdd:(x=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=this.$refs.md,(r=new FormData).append("file",n),T({url:"api/upload_img",method:"post",data:r,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){o.$img2Url(e,t.data.data)}));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return x.apply(this,arguments)}),GetLabelList:(f=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("api/admin/label/list",{});case 2:(e=t.sent).data.data&&(this.articleTagList=e.data.data);case 4:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),GetCategorytree:(v=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.get("api/admin/category/treelist",{});case 2:(e=t.sent).data.data&&(this.data.id?this.classificationList=this.data.tree:this.classificationList=e.data.data),console.log(e.data.data);case 5:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),uoload_success:function(t,e,n){this.data.group_photo.push(t.data),console.log(t)},editArticlePath:function(){this.editLink=!this.editLink,this.editPathButtonType="ghost"===this.editPathButtonType?"success":"ghost",this.editPathButtonText="编辑"===this.editPathButtonText?"完成":"编辑"},handleEditOpenness:function(){this.editOpenness=!this.editOpenness},handleSaveOpenness:function(){this.Openness=this.currentOpenness,this.editOpenness=!1},cancelEditOpenness:function(){this.currentOpenness=this.Openness,this.editOpenness=!1},handleEditPublishTime:function(){this.editPublishTime=!this.editPublishTime},handleSavePublishTime:function(){this.publishTimeType="timing",this.editPublishTime=!1},cancelEditPublishTime:function(){this.publishTimeType="immediately",this.editPublishTime=!1},setPublishTime:function(t){this.publishTime=t},setClassificationInAll:function(t){this.data.category=t.map((function(t){return t.id}))},setClassificationInOffen:function(t){this.classificationFinalSelected=t},handleAddNewTag:function(){this.addingNewTag=!this.addingNewTag},createNewTag:function(){var t=this;0!==this.newTagName.length?(this.articleTagList.push({title:this.newTagName}),this.addingNewTag=!1,setTimeout((function(){t.newTagName=""}),200)):this.$Message.error("请输入标签名")},cancelCreateNewTag:function(){this.newTagName="",this.addingNewTag=!1},canPublish:function(){return 0!==this.articleTitle.length||(this.$Message.error("请输入文章标题"),!1)},handlePreview:function(){if(this.canPublish()){if("immediately"===this.publishTimeType){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),r=t.getHours(),l=t.getMinutes(),d=t.getSeconds();localStorage.publishTime=e+" 年 "+n+" 月 "+o+" 日 -- "+r+" : "+l+" : "+d}else localStorage.publishTime=this.publishTime;this.$router.push({name:"preview"})}},handleSaveDraft:function(){this.canPublish()},handlePublish:(m=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.data.id){t.next=6;break}return t.next=3,_.a.post("api/admin/article/create",this.data);case 3:e=t.sent,t.next=9;break;case 6:return t.next=8,_.a.put("api/admin/article/edit/"+this.data.id,this.data);case 8:e=t.sent;case 9:console.log(e),200===e.status&&(this.publishLoading=!0,setTimeout((function(){n.publishLoading=!1,n.$Notice.success({title:"保存成功",desc:"文章《"+n.data.title+"》保存成功"})}),1e3));case 11:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),handleSelectTag:function(){localStorage.tagsList=JSON.stringify(this.articleTagSelected)}},computed:{completeUrl:function(){var t=this.fixedLink+this.articlePath;return localStorage.finalUrl=t,t}},mounted:function(){this.GetCategorytree(),this.GetLabelList(),this.offenUsedClass=[{title:"vue实例"},{title:"生命周期"},{title:"模板语法"},{title:"插值"},{title:"缩写"}]},destroyed:function(){}},k=(n(411),n(2)),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Row",[n("Col",{attrs:{span:"18"}},[n("Card",[n("Form",{attrs:{"label-width":80}},[n("FormItem",{attrs:{label:"文章标题",error:t.articleError}},[n("Input",{attrs:{icon:"android-list"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}})],1),t._v(" "),n("FormItem",{attrs:{label:"文章详情",error:t.articleError}},[n("Input",{attrs:{icon:"android-list"},model:{value:t.data.describe,callback:function(e){t.$set(t.data,"describe",e)},expression:"data.describe"}})],1)],1),t._v(" "),n("div",{staticClass:"margin-top-20"},[n("Upload",{attrs:{"on-success":t.uoload_success,multiple:"",type:"drag",action:"http://47.105.101.149:8086/api/upload_img"}},[n("div",{staticStyle:{padding:"20px 0"}},[n("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),t._v(" "),n("p",[t._v("上传图片")])],1)])],1),t._v(" "),n("div",{staticClass:"margin-top-20"},[n("div",{staticClass:"mavonEditor"},[n("no-ssr",[n("mavon-editor",{ref:"md",on:{imgAdd:t.$imgAdd},model:{value:t.data.details,callback:function(e){t.$set(t.data,"details",e)},expression:"data.details"}})],1)],1)])],1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"paper-airplane"}}),t._v("\n                发布\n            ")],1),t._v(" "),n("p",{staticClass:"margin-top-10"},[n("Icon",{attrs:{type:"android-time"}}),t._v("  状    态：\n                "),n("Select",{staticStyle:{width:"90px"},attrs:{size:"small",value:"草稿"},model:{value:t.data.status,callback:function(e){t.$set(t.data,"status",e)},expression:"data.status"}},t._l(t.articleStateList,(function(e){return n("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.name))])})),1)],1),t._v(" "),n("p",{staticClass:"margin-top-10"},[n("Icon",{attrs:{type:"eye"}}),t._v("  公开度： \n                "),n("b",[t._v(t._s(t.Openness))]),t._v(" "),n("Button",{directives:[{name:"show",rawName:"v-show",value:!t.editOpenness,expression:"!editOpenness"}],attrs:{size:"small",type:"text"},on:{click:t.handleEditOpenness}},[t._v("修改")]),t._v(" "),n("transition",{attrs:{name:"openness-con"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.editOpenness,expression:"editOpenness"}],staticClass:"openness-radio-con"},[n("RadioGroup",{attrs:{vertical:""},model:{value:t.data.disclosure,callback:function(e){t.$set(t.data,"disclosure",e)},expression:"data.disclosure"}},[n("Radio",{attrs:{label:"1"}},[t._v("\n                                公开\n                                "),n("Checkbox",{directives:[{name:"show",rawName:"v-show",value:"1"===t.data.disclosure,expression:"data.disclosure === '1'"}],model:{value:t.data.TopArticle,callback:function(e){t.$set(t.data,"TopArticle",e)},expression:"data.TopArticle"}},[t._v("在首页置顶这篇文章")])],1),t._v(" "),n("Radio",{attrs:{label:"2"}},[t._v("\n                                密码\n                                "),n("Input",{directives:[{name:"show",rawName:"v-show",value:"2"===t.data.disclosure,expression:"data.disclosure === '2'"}],staticStyle:{width:"120px"},attrs:{size:"small",placeholder:"请输入密码"},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}})],1),t._v(" "),n("Radio",{attrs:{label:"3"}},[t._v("私密")])],1),t._v(" "),n("div",[n("Button",{attrs:{type:"primary"},on:{click:t.handleSaveOpenness}},[t._v("确认")]),t._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:t.cancelEditOpenness}},[t._v("取消")])],1)],1)])],1),t._v(" "),n("p",{staticClass:"margin-top-10"},[n("Icon",{attrs:{type:"ios-calendar-outline"}}),t._v("  \n                "),"immediately"===t.publishTimeType?n("span",[t._v("立即发布")]):n("span",[t._v("定时："+t._s(t.publishTime))]),t._v(" "),n("Button",{directives:[{name:"show",rawName:"v-show",value:!t.editPublishTime,expression:"!editPublishTime"}],attrs:{size:"small",type:"text"},on:{click:t.handleEditPublishTime}},[t._v("修改")]),t._v(" "),n("transition",{attrs:{name:"publish-time"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.editPublishTime,expression:"editPublishTime"}],staticClass:"publish-time-picker-con"},[n("div",{staticClass:"margin-top-10"},[n("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetime",placeholder:"选择日期和时间"},on:{"on-change":t.setPublishTime},model:{value:t.data.publish_at,callback:function(e){t.$set(t.data,"publish_at",e)},expression:"data.publish_at"}})],1),t._v(" "),n("div",{staticClass:"margin-top-10"},[n("Button",{attrs:{type:"primary"},on:{click:t.handleSavePublishTime}},[t._v("确认")]),t._v(" "),n("Button",{attrs:{type:"ghost"},on:{click:t.cancelEditPublishTime}},[t._v("取消")])],1)])])],1),t._v(" "),n("Row",{staticClass:"margin-top-20 publish-button-con"},[n("span",{staticClass:"publish-button"},[n("Button",{on:{click:t.handlePreview}},[t._v("预览")])],1),t._v(" "),n("span",{staticClass:"publish-button"},[n("Button",{on:{click:t.handleSaveDraft}},[t._v("保存草稿")])],1),t._v(" "),n("span",{staticClass:"publish-button"},[t.data.id?t._e():n("Button",{staticStyle:{width:"90px"},attrs:{loading:t.publishLoading,icon:"ios-checkmark",type:"primary"},on:{click:t.handlePublish}},[t._v("发布")]),t._v(" "),t.data.id?n("Button",{staticStyle:{width:"90px"},attrs:{loading:t.publishLoading,icon:"ios-checkmark",type:"primary"},on:{click:t.handlePublish}},[t._v("保存")]):t._e()],1)])],1),t._v(" "),n("div",{staticClass:"margin-top-10"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"navicon-round"}}),t._v("\n                    分类目录\n                ")],1),t._v(" "),n("Tabs",{attrs:{type:"card"}},[n("TabPane",{attrs:{label:"所有分类目录"}},[n("div",{staticClass:"classification-con"},[n("Tree",{attrs:{data:t.classificationList,"show-checkbox":""},on:{"on-check-change":t.setClassificationInAll}})],1)])],1)],1)],1),t._v(" "),n("div",{staticClass:"margin-top-10"},[n("Card",[n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-pricetags-outline"}}),t._v("\n                    标签\n                ")],1),t._v(" "),n("Row",[n("Col",{attrs:{span:"18"}},[n("Select",{attrs:{multiple:"",placeholder:"请选择文章标签"},on:{"on-change":t.handleSelectTag},model:{value:t.data.label,callback:function(e){t.$set(t.data,"label",e)},expression:"data.label"}},t._l(t.articleTagList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.title))])})),1)],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"6"}},[n("Button",{directives:[{name:"show",rawName:"v-show",value:!t.addingNewTag,expression:"!addingNewTag"}],attrs:{long:"",type:"ghost"},on:{click:t.handleAddNewTag}},[t._v("新建")])],1)],1),t._v(" "),n("transition",{attrs:{name:"add-new-tag"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.addingNewTag,expression:"addingNewTag"}],staticClass:"add-new-tag-con"},[n("Col",{attrs:{span:"14"}},[n("ColorPicker",{attrs:{alpha:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),n("Col",{attrs:{span:"14"}},[n("Input",{attrs:{placeholder:"请输入标签名"},model:{value:t.newTagName,callback:function(e){t.newTagName=e},expression:"newTagName"}})],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"5"}},[n("Button",{attrs:{long:"",type:"primary"},on:{click:t.createNewTag}},[t._v("确定")])],1),t._v(" "),n("Col",{staticClass:"padding-left-10",attrs:{span:"5"}},[n("Button",{attrs:{long:"",type:"ghost"},on:{click:t.cancelCreateNewTag}},[t._v("取消")])],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);