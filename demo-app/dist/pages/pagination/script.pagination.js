module.exports=function(n){function t(a){if(e[a])return e[a].exports;var o=e[a]={exports:{},id:a,loaded:!1};return n[a].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}({0:function(n,t,e){n.exports=e(54)},54:function(n,t,e){"use strict";var a=e(55);n.exports={template:a,data:{page:1}}},55:function(n,t){n.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Pagination</div>\n\n<h5>Page Model: {{page}}</h5>\n<pagination :model.sync="page" :max="17"></pagination>\n\n<h5>\n  Click/Tap on the Input box and type out another page number\n  then hit &lt;ENTER&gt;\n</h5>\n'}});