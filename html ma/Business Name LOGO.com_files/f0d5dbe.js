(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1192:function(t,e,o){"use strict";e.a={props:{followsTitle:{type:Boolean,default:!1},params:{type:Object,default:function(){return{}}},block:{type:Object,default:function(){return{}}},first:{type:Boolean,default:!1}}}},1216:function(t,e,o){var content=o(1254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("5d344767",content,!0,{sourceMap:!1})},1253:function(t,e,o){"use strict";o(1216)},1254:function(t,e,o){var n=o(92)((function(i){return i[1]}));n.push([t.i,".pill.active[data-v-5616d963]{transform:translateX(calc(100% - .25rem))}",""]),n.locals={},t.exports=n},1269:function(t,e,o){"use strict";var n=o(173),r=o.n(n),l=o(168),c=o(122),d={components:{InformationCircle:r.a,Tippy:l.a,Skeleton:c.a},props:{showLabels:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},layout:{type:String,default:"right"},description:{type:String,default:""},active:{type:Boolean,default:!1},tippy:{type:String,default:""},label:{type:String,default:""},showLabelLoader:{type:Boolean,default:!1},labelLoaderHeight:{type:String,default:"h-4"},labelLoaderWidth:{type:String,default:"w-44"},labelLoaderClass:{type:String,default:""}}},f=(o(1253),o(8)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex items-center gap-3",class:{"pointer-events-none opacity-50":t.disabled,"flex-row-reverse":"left"===t.layout,"w-full":t.tippy}},[e("button",{staticClass:"p-0.5 relative appearance-none inline-flex flex-shrink-0 rounded-full border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",class:[t.showLabels?"w-16":"w-10"],attrs:{type:"button","aria-pressed":"false","aria-labelledby":"toggleLabel",disabled:t.disabled},on:{click:function(e){return t.$emit("toggle")}}},[e("span",{staticClass:"sr-only"},[t._v("Toggle "+t._s(t.label))]),t._v(" "),e("span",{staticClass:"pill rounded-full shadow ring-0 transition ease-in-out duration-200",class:[{active:t.active},"bg-enterprise-primary",t.showLabels?"h-8 w-8":"h-5 w-5"],attrs:{"aria-hidden":"true"}}),t._v(" "),t.showLabels?e("div",{staticClass:"absolute z-1 p-0.5 inset-0 grid grid-cols-2 items-center text-center leading-none text-xs text-white"},[e("span",{staticClass:"pt-px",class:t.active?"text-gray-300":"text-white"},[t._v("\n        Off\n      ")]),t._v(" "),e("span",{staticClass:"pt-px",class:t.active?"text-white":"text-gray-300"},[t._v("\n        On\n      ")])]):t._e()]),t._v(" "),t.label||t.description?e("label",{staticClass:"relative label w-full mb-0",class:{"pr-5":t.tippy},attrs:{id:"toggleLabel"}},[t.label?e("span",{staticClass:"text-sm font-medium"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e(),t._v(" "),t.description?e("span",{staticClass:"text-sm text-gray-500"},[t._v("\n      "+t._s(t.description)+"\n    ")]):t._e(),t._v(" "),e("Tippy",{staticClass:"absolute right-0 top-0 bottom-0 h-full flex items-center leading-none",attrs:{content:t.tippy}},[e("InformationCircle",{staticClass:"inline-block w-4 h-4"})],1)],1):t._e(),t._v(" "),t.showLabelLoader?e("Skeleton",{class:[t.labelLoaderHeight,t.labelLoaderWidth,t.labelLoaderClass]}):t._e()],1)}),[],!1,null,"5616d963",null);e.a=component.exports},1294:function(t,e,o){"use strict";o(16),o(15),o(12),o(17),o(18);var n=o(3),r=(o(67),o(226),o(37),o(23),o(36),o(49),o(30)),l=o(1269),c=o(13),d=o(168);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={components:{Lightswitch:l.a,Tippy:d.a},computed:m({active:function(){return"default"!==this.value&&this.value},enabled:function(){return this.flags.enable_template_options},hasSlogan:function(){return!!this.editor.logo_preset.slogan},supportsMultiColor:function(){var t=this.editor.logo_preset.palette_hex,e=t.primary,o=t.secondary,n=t.accent;return new Set([e,o,n]).size>=2}},Object(r.e)(["editor","session","flags"])),methods:m(m({sendEvents:function(t,e){this.fetchNewLogoFromState(),c.a.$emit(c.b.EcommerceSelectContent,{type:t,id:e})},supportsMultiLine:function(t){return(t||"").trim().split(" ").length>1}},Object(r.b)({fetchNewLogoFromState:"editor/fetchNewLogoFromState"})),Object(r.d)({SET_WORDMARK_MULTICOLOR:"editor/SET_WORDMARK_MULTICOLOR",SET_WORDMARK_MULTILINE:"editor/SET_WORDMARK_MULTILINE",SET_SLOGAN_MULTICOLOR:"editor/SET_SLOGAN_MULTICOLOR",SET_SLOGAN_MULTILINE:"editor/SET_SLOGAN_MULTILINE"}))}},1608:function(t,e,o){"use strict";var n=o(1294),content=o(100),r={mixins:[Object(content.d)(["editor/inputs/wordmark-multiline"],!0),n.a],computed:{value:{get:function(){return this.editor.wordmark_multiline},set:function(t){this.SET_WORDMARK_MULTILINE(t),this.sendEvents("wordmark_multiline",t)}},disabledMessage:function(){return this.disabled?this.page.disabled_by_template:this.supportsMultiLine(this.session.wordmark)?null:this.page.disabled_by_length},disabled:function(){var t,e,o,n;return null===(t=this.editor)||void 0===t||null===(e=t.current_logo)||void 0===e||null===(o=e.assets)||void 0===o||null===(n=o.template)||void 0===n?void 0:n.disable_wordmark_multiline}}},l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return t.enabled?e("Tippy",{staticClass:"block",attrs:{content:t.disabledMessage,force:!0}},[e("Lightswitch",{attrs:{id:"editor-wordmark-multiline",label:t.contentReady?t.page.label:"",disabled:!!t.disabledMessage,active:t.active,showLabelLoader:!t.contentReady},on:{toggle:function(e){t.value=!t.value}}})],1):t._e()}),[],!1,null,null,null);e.a=component.exports},1610:function(t,e,o){"use strict";o(32);var n={components:{NotFoundBlock:o(1611).default},props:{params:{type:Object,default:function(){return{}}},blocks:{type:Array,default:function(){return[]}}},data:function(){return{map:{"field-editor-font-name-search":"FontFamilyNameSearch","field-editor-template-alignment":"TemplateAlignment","field-editor-design-alignment":"DesignAlignment","field-wordmark-multicolor":"WordmarkMulticolor","field-wordmark-multiline":"WordmarkMultiline","field-editor-palette-fields":"PaletteFields","field-editor-set-to-other-font":"OtherFont","field-slogan-multicolor":"SloganMulticolor","field-editor-remove-button":"RemoveButton","field-slogan-multiline":"SloganMultiline","field-editor-color-picker":"ColorPicker","field-editor-font-filters":"FontFilters","field-editor-color-preset":"ColorPreset","field-editor-icon-layout":"IconLayout","field-editor-resize-icon":"IconResize","field-editor-font-weight":"FontWeight","field-editor-change-case":"FontCase","field-editor-font-align":"FontAlign","field-editor-font-style":"FontStyle","field-editor-subtitle":"ControlSub","field-editor-font-size":"FontSize","field-editor-title":"ControlTitle","field-editor-multi-input":"Multi"}}},computed:{components:function(){var t=this;return this.blocks.reduce((function(e,n){var template=n.template;if(!e[template]){var r=t.map[template];r&&(e[template]=function(){return o(1795)("./".concat(r,"Block"))})}return e}),{})}},methods:{getComponent:function(t){var component=this.components[t.template];return component||(console.error("Missing ".concat(t.template," block from map.")),component="NotFoundBlock"),component},followsTitle:function(i){var t;return"field-editor-title"===(null===(t=this.blocks[i-1])||void 0===t?void 0:t.template)}}},r=n,l=o(8),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.blocks,(function(o,i){return e(t.getComponent(o),{key:i+o.template,tag:"component",attrs:{"follows-title":t.followsTitle(i),first:0===i,params:t.params,block:o}})})),1)}),[],!1,null,null,null);e.a=component.exports},1611:function(t,e,o){"use strict";o.r(e);var n={mixins:[o(1192).a]},r=o(8),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-6"},[e("p",{staticClass:"text-red-500"},[e("span",{staticClass:"font-bold"},[t._v("`"+t._s(t.block.template)+"`")]),t._v(" Not Found.\n  ")]),t._v(" "),e("pre",[t._v(t._s(t.block))])])}),[],!1,null,null,null);e.default=component.exports},1795:function(t,e,o){var map={"./ColorPickerBlock":[2034,432],"./ColorPresetBlock":[2035,276],"./ControlSubBlock":[2036,433],"./ControlTitleBlock":[2037,434],"./DesignAlignmentBlock":[2038,277],"./FontAlignBlock":[2039,435],"./FontCaseBlock":[2040,436],"./FontFamilyNameSearchBlock":[2041,437],"./FontFiltersBlock":[2042,438],"./FontSizeBlock":[2043,285],"./FontStyleBlock":[2044,439],"./FontWeightBlock":[2045,440],"./IconLayoutBlock":[2046,278],"./IconResizeBlock":[2047,286],"./MultiBlock":[2048,280],"./NotFoundBlock":[1611],"./OtherFontBlock":[2049,441],"./PaletteFieldsBlock":[2050,287],"./RemoveButtonBlock":[2051,281],"./SloganMulticolorBlock":[2052,288],"./SloganMultilineBlock":[2033,442],"./TemplateAlignmentBlock":[2053,279],"./WordmarkMulticolorBlock":[2054,289],"./WordmarkMultilineBlock":[2055,443]};function n(t){if(!o.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(o.e)).then((function(){return o(n)}))}n.keys=function(){return Object.keys(map)},n.id=1795,t.exports=n},2104:function(t,e,o){"use strict";o.r(e);o(16),o(15),o(12),o(17),o(18);var n=o(1),r=o(3),l=(o(19),o(46),o(44),o(1194)),c=o(1188),d=o(1456),f=o(1246),m=o(1457),y=o(1458),h=o(1607),v=o(1608),_=o(1459),O=o(1609),k=o(1460),w=o(83),F=o(30),C=o(1610),S=o(13),content=o(100),L=o(1604);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function R(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={components:{ControlTitle:l.a,ControlSub:c.a,ColorPicker:f.a,FontCase:h.a,FontWeight:d.a,FontStyle:y.a,FontAlign:m.a,WordmarkMultiline:v.a,FontFilters:_.a,OtherFont:O.a,FontFamilyNameSearch:k.a,List:C.a},mixins:[Object(content.d)(["editor/controls/business-name"]),L.a],validations:{input:w.n},data:function(){return{type:"wordmark"}},computed:R(R({picker:function(){return{property:this.templateOptions.wordmark_color,palette:this.editor.logo_preset.palette_hex}},disabled:function(){return!this.editor.features.includes("palette")},property:function(){return this.templateOptions.wordmark_color},color:function(){return this.editor.logo_preset.palette_hex[this.property]},align:function(){return{alignments:["left","center","right"],options:{get:"wordmark_alignment",set:"SET_WORDMARK_ALIGNMENT"}}},currentFont:function(){return this.wordmarkFont}},Object(F.c)({templateOptions:"editor/templateOptions"})),Object(F.e)(["editor"])),mounted:function(){S.a.$on(S.b.EditorSelectFont,this.setCurrentFonts)},beforeDestroy:function(){S.a.$off(S.b.EditorSelectFont,this.setCurrentFonts)},methods:R({setPaletteProperty:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.$store.dispatch("editor/setPaletteProperty",{property:e.property,value:t}),o.next=3,e.$store.dispatch("editor/fetchNewLogoFromState");case 3:S.a.$emit(S.b.EditorSetCustomPalette);case 4:case"end":return o.stop()}}),o)})))()}},Object(F.d)({setRawInput:"editor/SET_UNVALIDATED_WORDMARK",setInput:"session/setWordmark"}))},T=o(8),component=Object(T.a)(j,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-6"},[e("TextInput",{attrs:{id:t.contentReady?t.fields.input.id:"",placeholder:t.contentReady?t.fields.input.placeholder:"",label:t.contentReady?t.fields.input.label:"",prompt:t.contentReady?t.fields.input.prompt:"",status:t.contentReady?t.fields.input.status:"","status-message":t.contentReady?t.fields.input.message:"",tippy:t.contentReady?t.fields.input.tippy:"","hard-disable":t.disabled},on:{enter:t.saveText},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[t.contentReady?e("button",{staticClass:"px-4",class:t.buttons.save.classes,attrs:{slot:"button",id:t.buttons.save.id,type:"button"},on:{click:t.saveText},slot:"button"},[t._v("\n      "+t._s(t.buttons.save.text)+"\n    ")]):t._e()]),t._v(" "),e("section",[e("ControlTitle",{attrs:{loading:!t.contentReady,title:t.contentReady?t.page.text_options.title:""}}),t._v(" "),e("div",{staticClass:"grid grid-cols-2 gap-4"},[e("section",[e("ControlSub",{attrs:{loading:!t.contentReady,title:t.contentReady?t.page.text_options.color.title:""}}),t._v(" "),e("ColorPicker",t._b({on:{changed:t.setPaletteProperty}},"ColorPicker",{disabled:t.disabled,property:t.property,color:t.color},!1))],1),t._v(" "),e("FontCase",{attrs:{input:t.input}}),t._v(" "),e("FontWeight",{attrs:{current:t.currentFont}}),t._v(" "),e("FontStyle",{attrs:{current:t.currentFont}}),t._v(" "),e("FontAlign",{attrs:{alignments:t.align.alignments,options:t.align.options}}),t._v(" "),e("WordmarkMultiline",{staticClass:"col-span-2"})],1)],1),t._v(" "),e("section",[e("ControlTitle",{attrs:{loading:!t.contentReady,title:t.contentReady?t.page.font_options.title:""}}),t._v(" "),e("div",{staticClass:"grid gap-4"},[e("FontFilters"),t._v(" "),e("OtherFont",{attrs:{current:t.currentFont,type:t.type,wordmarkFont:t.wordmarkFont,sloganFont:t.sloganFont}}),t._v(" "),e("FontFamilyNameSearch",{attrs:{current:t.currentFont}}),t._v(" "),e("section",[e("ControlSub",{attrs:{loading:!t.contentReady,title:t.contentReady?t.page.select_font.title:""}}),t._v(" "),e("FontControl",t._b({},"FontControl",{disabled:t.disabled,input:t.input,type:t.type},!1))],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=f0d5dbe.js.map