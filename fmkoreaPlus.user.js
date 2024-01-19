// ==UserScript==
// @name         fmkoreaPlus
// @name:ko      펨코 플러스
// @namespace    https://www.fmkorea.com/
// @version      0.0.41
// @description  add function to fmkorea
// @author       초연
// @match        https://www.fmkorea.com/
// @match        https://www.fmkorea.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fmkorea.com
// @grant        none
// @updateURL    https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @downloadURL https://update.greasyfork.org/scripts/485181/fmkoreaPlus.user.js
// @license MIT
// @run-at document-end
// ==/UserScript==

(function () {
    'use strict';
    console.log("펨?코 플러스")

    //////////////////////////////////////////////
    // 확인된 클래스를 담을 배열 초기화
    var foundClasses = [];
    var classNames = [];

    // 모든 요소 선택
    var allElements = document.querySelectorAll('*');

    // 각 요소의 클래스 검사
    allElements.forEach(function (element) {
        var classNames = element.classList;

        // 특정 문자열을 포함하는 클래스가 있는지 확인
        if (classNames && Array.from(classNames).some(className => className.includes('member'))) {
            // 배열에 클래스 추가
            foundClasses.push(classNames);
        }
    });

    // 확인된 클래스 배열 출력
    //console.log('확인된 클래스 배열:', foundClasses[2]);
    for (var i = 0; i < foundClasses.length; i++) {
        //console.log('확인된 클래스 배열:', foundClasses[i].value);
        classNames.push(foundClasses[i].value);
        console.log(document.getElementsByClassName(classNames[i])[0].innerText);
        document.getElementsByClassName(classNames[i])[0].innerText = "test"
    }

})();

