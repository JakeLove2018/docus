import b from"./TabsHeader.53e727ec.js";import g from"./ComponentPlaygroundProps.8d3b1ccc.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.1cb843da.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.2cd777cc.js";import{a as D}from"./index.9d556f6d.js";import{d as V,r as k,b as n,c as C,g as P,J as o,X as m,au as T,f as s,l as B}from"./entry.ed262f8b.js";import"./ProseH4.bcd9dcb9.js";import"./ProseCodeInline.dd8c4fed.js";import"./Badge.c959c409.js";import"./slot.891d113f.js";import"./node.676c5e99.js";import"./ProseP.b8afb7b3.js";const I={class:"component-playground-data"},j=V({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const a=D(t,"modelValue",p),e=k(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=b,_=g,i=v,f=x;return n(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(n(),m(_,{key:0,modelValue:o(a),"onUpdate:modelValue":l[0]||(l[0]=y=>T(a)?a.value=y:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(n(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(n(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const z=B(j,[["__scopeId","data-v-ff75821c"]]);export{z as default};