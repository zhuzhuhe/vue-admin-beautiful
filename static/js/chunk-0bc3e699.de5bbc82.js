/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-1-27 09:49:05
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bc3e699"],{b885:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-editor-container"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[n("vab-markdown-editor",{ref:"mde",on:{"show-html":e.handleShowHtml},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("el-button",{on:{click:e.handleAddText}},[e._v("增加文本")]),n("el-button",{on:{click:e.handleAddImg}},[e._v("增加图片")])],1),n("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("markdown转换html实时演示区域")])]),n("div",{domProps:{innerHTML:e._s(e.html)}})])],1)],1)],1)},d=[],l=n("cf88"),o={name:"MarkdownEditor",components:{VabMarkdownEditor:l["default"]},data:function(){return{value:"# vue-admin-beautiful",html:'<h1 id="vue-admin-beautiful">vue-admin-beautiful</h1>'}},methods:{handleAddText:function(){this.$refs.mde.add("\n### 新增加的内容")},handleAddImg:function(){this.$refs.mde.add("\n![](https://chu1204505056.gitee.io/byui-bookmarks/img/ewm.png)")},handleShowHtml:function(e){this.html=e}}},r=o,i=n("5d22"),s=Object(i["a"])(r,a,d,!1,null,null,null);t["default"]=s.exports},cf88:function(e,t,n){"use strict";n.r(t);var a=n("05eb"),d=n.n(a),l=(n("1d57"),d.a);t["default"]=l}}]);