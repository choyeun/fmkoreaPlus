// ==UserScript==
// @name         fmkoreaPlus
// @name:ko      펨코 플러스
// @namespace    https://www.fmkorea.com/
// @version      0.0.33
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
    console.log("펨코 플러스?")
    var allElements = document.querySelectorAll('*');

    // 각 요소의 클래스 검사
    allElements.forEach(function (element) {
        var classNames = element.classList;

        // 특정 문자열을 포함하는 클래스가 있는지 확인
        if (classNames && Array.from(classNames).some(className => className.includes('member_'))) {
            console.log('클래스에 특정 문자열이 포함되어 있습니다:', element);
        }
    });
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
        if (classNames && Array.from(classNames).some(className => className.includes('member_'))) {
            // 배열에 클래스 추가
            foundClasses.push(classNames);
        }
    });

    // 확인된 클래스 배열 출력
    //console.log('확인된 클래스 배열:', foundClasses[2]);
    for (var i = 0; i < foundClasses.length; i++) {
        console.log('확인된 클래스 배열:', foundClasses[i].value);
        classNames.push(foundClasses[i].value);
    }

    console.log(document.getElementsByClassName(classNames[0])[0].innerText);
    console.log(document.getElementsByClassName(classNames[1])[0].innerText);
    console.log(document.getElementsByClassName(classNames[2])[0].innerText);
    console.log(document.getElementsByClassName(classNames[3])[0].innerText);
    console.log(document.getElementsByClassName(classNames[4])[0].innerText);
    console.log(document.getElementsByClassName(classNames[5])[0].innerText);
})();

