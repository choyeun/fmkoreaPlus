// ==UserScript==
// @name         fmkoreaPlus
// @name:ko      펨코 플러스
// @namespace    https://www.fmkorea.com/
// @version      0.0.11
// @description  add function to fmkorea
// @author       초연
// @match        https://www.fmkorea.com/
// @match        https://www.fmkorea.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fmkorea.com
// @grant        none
// @updateURL    https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @downloadURL https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @license MIT
// @run-at document-body
// ==/UserScript==

(function () {
    'use strict';
    alert("펨코 플러스가 적용되었습니다.")
    GM_addElement(document.getElementsByClassName("member_1686667362 member_plate"), "a", { "class": "member_1686667362 member_plate", "style": "background-color: #000000; color: #ffffff; font-size: 20px; font-weight: bold; text-align: center; padding: 10px 0px;" }, "펨코 플러스")
    // Your code here...
})();


document.getElementsByClassName("author")[0].innerHTML = "초연",
    alert(document.getElementsByClassName("author").length)
