"use strict";
(globalThis["webpackChunkSIGEMA"] = globalThis["webpackChunkSIGEMA"] || []).push([[637],{

/***/ 6637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/IndexPage.vue?vue&type=template&id=b99cb078&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_carrusel_component = (0,runtime_core_esm_bundler/* resolveComponent */.up)("carrusel-component");
    const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_page, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
            (0,runtime_core_esm_bundler/* createElementVNode */._)("div", null, [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_carrusel_component)
            ])
        ]),
        _: 1
    }));
}

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/General/CarruselComponent.vue?vue&type=template&id=661d9c70&scoped=true&ts=true

const _withScopeId = n => (_pushScopeId("data-v-661d9c70"), n = n(), _popScopeId(), n);
const _hoisted_1 = { class: "q-pa-md" };
function CarruselComponentvue_type_template_id_661d9c70_scoped_true_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_q_carousel_slide = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel-slide");
    const _component_q_carousel = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-carousel");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel, {
            animated: "",
            modelValue: _ctx.slide,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ((_ctx.slide) = $event)),
            navigation: "",
            infinite: "",
            autoplay: _ctx.autoplay,
            arrows: "",
            "transition-prev": "slide-right",
            "transition-next": "slide-left",
            onMouseenter: _cache[1] || (_cache[1] = ($event) => (_ctx.autoplay = false)),
            onMouseleave: _cache[2] || (_cache[2] = ($event) => (_ctx.autoplay = true))
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                    name: 1,
                    "img-src": "https://enfermeriabuenosaires.com/wp-content/uploads/2019/02/maestria-scaled.jpg"
                }),
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                    name: 2,
                    "img-src": "https://thelofttown.com/wp-content/uploads/2021/08/la-universidad-que-necesitamos_c-2-1.jpg"
                }),
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                    name: 3,
                    "img-src": "https://requisitos.me/wp-content/uploads/2021/04/uni.jpg"
                }),
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_carousel_slide, {
                    name: 4,
                    "img-src": "https://www.aauniv.com/s/blog/wp-content/uploads/2020/06/estudiar-maestria-educacion-universidad-online.jpg"
                })
            ]),
            _: 1
        }, 8, ["modelValue", "autoplay"])
    ]));
}

;// CONCATENATED MODULE: ./src/components/General/CarruselComponent.vue?vue&type=template&id=661d9c70&scoped=true&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(499);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/General/CarruselComponent.vue?vue&type=script&lang=ts


/* harmony default export */ const CarruselComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'CarruselComponent',
    setup() {
        return {
            slide: (0,reactivity_esm_bundler/* ref */.iH)(1),
            autoplay: (0,reactivity_esm_bundler/* ref */.iH)(true)
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/General/CarruselComponent.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js + 1 modules
var QCarousel = __webpack_require__(960);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(1694);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/General/CarruselComponent.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(CarruselComponentvue_type_script_lang_ts, [['render',CarruselComponentvue_type_template_id_661d9c70_scoped_true_ts_true_render],['__scopeId',"data-v-661d9c70"]])

/* harmony default export */ const CarruselComponent = (__exports__);
;


runtime_auto_import_default()(CarruselComponentvue_type_script_lang_ts, 'components', {QCarousel: QCarousel/* default */.Z,QCarouselSlide: QCarouselSlide/* default */.Z});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/ts-loader/index.js??clonedRuleSet-3.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/IndexPage.vue?vue&type=script&lang=ts


/* harmony default export */ const IndexPagevue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'IndexPage',
    components: { CarruselComponent: CarruselComponent },
    setup() {
        return {};
    },
}));

;// CONCATENATED MODULE: ./src/pages/IndexPage.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(9885);
;// CONCATENATED MODULE: ./src/pages/IndexPage.vue




;
const IndexPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(IndexPagevue_type_script_lang_ts, [['render',render]])

/* harmony default export */ const IndexPage = (IndexPage_exports_);
;

runtime_auto_import_default()(IndexPagevue_type_script_lang_ts, 'components', {QPage: QPage/* default */.Z});


/***/ })

}]);
//# sourceMappingURL=637.ec84d4e4.js.map