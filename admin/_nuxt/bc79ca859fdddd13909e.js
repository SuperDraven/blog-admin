(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{306:function(t,e,r){var content=r(438);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5639de18",content,!0,{sourceMap:!1})},437:function(t,e,r){"use strict";var n=r(306);r.n(n).a},438:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,".margin-top-8{margin-top:8px}.margin-top-10{margin-top:10px}.margin-top-20{margin-top:20px}.margin-left-10{margin-left:10px}.margin-bottom-10{margin-bottom:10px}.margin-bottom-100{margin-bottom:100px}.margin-right-10{margin-right:10px}.padding-left-6{padding-left:6px}.padding-left-8{padding-left:5px}.padding-left-10{padding-left:10px}.padding-left-20{padding-left:20px}.height-100{height:100%}.height-120px{height:100px}.height-200px{height:200px}.height-492px{height:492px}.height-460px{height:460px}.line-gray{height:0;border-bottom:2px solid #dcdcdc}.notwrap{word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.padding-left-5{padding-left:10px}[v-cloak]{display:none}.step-header-con{text-align:center}.step-header-con h3{margin:10px 0}.step-header-con h5{margin:0 0 5px}.step-content{padding:5px 20px 26px}.step-content,.step-form{margin-bottom:20px;border-bottom:1px solid #dbdddf}.step-form{padding-bottom:10px}",""])},760:function(t,e,r){"use strict";r.r(e);var n={name:"workflow",data:function(){return{stepList1:[],stepData:{title:"",describe:"",content:""},step:{opinion:"",remark:"",pass:"通过"},stepRules:{opinion:[{required:!0,message:"请填写意见",trigger:"blur"}]},hasSubmit:!1,currentStep:0,status:"wait"}},methods:{handleSubmit:function(){var t=this;this.$refs.step.validate((function(e){e&&("通过"===t.step.pass?t.currentStep+=1:t.status="error",t.hasSubmit=!0)}))}},mounted:function(){this.stepList1=[{title:"党支部支委",describe:"张三"},{title:"党支部书记",describe:"李四"},{title:"党总支副书记",describe:"王五"},{title:"党总支书记",describe:"赵六"}],this.stepData={title:"七.一建党节庆祝活动申报",describe:"申报人：孙二",content:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据县委组织部(组织[20xx]21)文件通知精神，为纪念中国共产党建党xx周年，激励广大党员干部紧紧围绕党的群众路线教育主题，坚定理想信念，树立群众观点，增强服务意识，改进作风建设，夯实党的执政基础。经研究，决定在“七一”期间开展庆祝活动，现提出庆祝活动方案如下：</br> 　　一、活动主题 　　以中国特色社会主义理论为指导，深入贯彻落实党的十八大、十八届四中全会和习近平总书记系列讲话精神，紧紧围绕开展党的群众路线教育活动，以纪念建党xx周年为主题，广泛开展内容丰富、形式多样的纪念活动，通过形式多样、主题鲜明、广泛参与的庆祝活动，提升党组织的号召力、凝聚力和战斗力，使广大党员干部以更加饱满的热情迎接中国共产党成立xx周年。</br> 　　二、活动时间 　　6月下旬至7月</br> 　　三、活动安排 </br>　　1、组织党员开展一次集体学习活动。各党(总)支部要组织开展一次集体学习讨论，重点学习党的十八大、十八届四中全会精神、习近平总书记一系列重要讲话精神和习近平同志在兰考县委班子专题民主生活会时重要讲话精神为主要内容。引导大家开展深入全面的讨论，进一步把思想和行动统一到中央的决策部署上来，进一步把教育实践活动的作风建设成果，转化建设美丽铜陵县做贡献、当先锋的强大动力。</br> 　　2、开展一次党员领导干部带头上党课活动。各党(总)支部结合本支部情况，为庆祝党的生日，设计、组织好形式多样的党课活动，支部书记要带头上党课。要结合主题教育实践活动，一是认真落实为民务实清廉总要求，进一步改善党群、干群关系;二是要以反对“四风”为重点，切实改进作风;三是以提高执行力为重点，推动全县经济社会科学和谐跨越发展。</br> 　　3、开展一次走访慰问活动。结合正在开展的群众路线教育实践活动，各党总支部负责人要深入基层，对老党员、生活困难党员、离退休老干部、生产一线党员进行普遍慰问，切实增强基层党员荣誉感和归属感。</br> 　　4、开展一次调研走访活动。坚持领导带头、分级负责，扎实开展好调研走访活动。要真正坐下来，与职工群众面对面沟通、心贴心交流，听真话、访民意、摸实情，掌握第一手资料。要善于从基层单位存在的问题和面临的矛盾、困难中，反思自身工作存在的差距和不足。有条件的要安排部分费用，用于走访慰问老党员和生活困难党员。"},this.currentStep=2}},o=(r(437),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Row",[r("Card",[r("div",{staticClass:"step-header-con"},[r("h3",[t._v(t._s(t.stepData.title))]),t._v(" "),r("h5",[t._v(t._s(t.stepData.describe))])]),t._v(" "),r("p",{staticClass:"step-content",domProps:{innerHTML:t._s(t.stepData.content)}}),t._v(" "),r("Form",{ref:"step",staticClass:"step-form",attrs:{model:t.step,rules:t.stepRules,"label-width":100}},[r("FormItem",{attrs:{label:"意见：",prop:"opinion"}},[r("Input",{attrs:{disabled:t.hasSubmit,type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入意见"},model:{value:t.step.opinion,callback:function(e){t.$set(t.step,"opinion",e)},expression:"step.opinion"}})],1),t._v(" "),r("FormItem",{attrs:{label:"备注："}},[r("Input",{attrs:{disabled:t.hasSubmit,type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注"},model:{value:t.step.remark,callback:function(e){t.$set(t.step,"remark",e)},expression:"step.remark"}})],1),t._v(" "),r("FormItem",{attrs:{label:"是否通过：",required:""}},[r("RadioGroup",{model:{value:t.step.pass,callback:function(e){t.$set(t.step,"pass",e)},expression:"step.pass"}},[r("Radio",{attrs:{disabled:t.hasSubmit,label:"通过"}}),t._v(" "),r("Radio",{attrs:{disabled:t.hasSubmit,label:"不通过"}})],1)],1),t._v(" "),r("FormItem",{attrs:{label:""}},[r("Button",{staticStyle:{width:"100px"},attrs:{disabled:t.hasSubmit,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1),t._v(" "),r("Steps",{attrs:{current:t.currentStep,status:t.status}},t._l(t.stepList1,(function(t){return r("Step",{key:t.title,attrs:{title:t.title,content:t.describe+"审核并通过"}})})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);