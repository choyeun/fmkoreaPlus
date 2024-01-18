// ==UserScript==
// @name         fmkoreaPlus
// @name:ko      펨코 플러스
// @namespace    https://www.fmkorea.com/
// @version      0.0.20
// @description  add function to fmkorea
// @author       초연
// @match        https://www.fmkorea.com/
// @match        https://www.fmkorea.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fmkorea.com
// @grant        GM_addElement
// @updateURL    https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @downloadURL https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @license MIT
// @run-at document-body
// ==/UserScript==

(function () {
    'use strict';
    console.log("펨코 플러스?")
    GM_addElement(document.getElementsByClassName("member_1686667362 member_plate"), "a", { "class": "member_1686667362 member_plate", "style": "background-color: #000000; color: #ffffff; font-size: 20px; font-weight: bold; text-align: center; padding: 10px 0px;" }, "펨코 플러스")
    // Your code here...
    alert(document.getElementsByClassName("author").length)
    alert("aaaaaaaaaaaaaaaaaaaaaaaa")
})();


