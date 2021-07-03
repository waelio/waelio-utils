"use strict";
// @ts-nocheck
var _this = this;
exports.__esModule = true;
exports.meta = void 0;
var meta = function () {
    var metaObj = { meta: {} };
    if (typeof _this === 'undefined')
        return metaObj;
    if (typeof _this['metaTags'] === 'undefined')
        return metaObj;
    if (_this.metaTags.title) {
        // console.log('adding title')
        metaObj.title = _this.metaTags.title;
        metaObj.meta.ogTitle = { name: 'og:title', content: _this.metaTags.title };
        metaObj.meta.twitterTitle = {
            name: 'twitter:title',
            content: _this.metaTags.title
        };
    }
    if (_this.metaTags.description) {
        // console.log('adding desc')
        metaObj.meta.description = {
            name: 'description',
            content: _this.metaTags.description
        };
        metaObj.meta.ogDescription = {
            name: 'og:description',
            content: _this.metaTags.description
        };
        metaObj.meta.twitterDescription = {
            name: 'twitter:description',
            content: _this.metaTags.description
        };
    }
    if (_this.metaTags.url) {
        // console.log('adding url')
        metaObj.meta.ogUrl = { name: 'og:url', content: _this.metaTags.url };
        metaObj.meta.twitterUrl = {
            name: 'twitter:url',
            content: _this.metaTags.url
        };
        metaObj.meta.canonical = { rel: 'canonical', href: _this.metaTags.url };
    }
    if (_this.metaTags.image) {
        // console.log('adding image')
        metaObj.meta.ogImage = { name: 'og:image', content: _this.metaTags.image };
        metaObj.meta.twitterImage = {
            name: 'twitter:image',
            content: _this.metaTags.image
        };
    }
    return metaObj;
};
exports.meta = meta;
