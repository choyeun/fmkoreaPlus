// ==UserScript==
// @name         fmkoreaPlus
// @name:ko      펨코 플러스
// @namespace    https://www.fmkorea.com/
// @version      0.0.60
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
    // Your code here...
    //////////////////////////////////////////////
    setInterval(() => {
        // 확인된 클래스를 담을 배열 초기화
        var foundClasses = [];
        var classNames = [];
        var foundfindParent = [];
        var foundAuthor = [];

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
        allElements.forEach(function (element) {
            var classNames = element.classList;

            // 특정 문자열을 포함하는 클래스가 있는지 확인
            if (classNames && Array.from(classNames).some(className => className.includes('findParent'))) {
                // 배열에 클래스 추가
                foundfindParent.push(classNames);
            }
        });

        allElements.forEach(function (element) {
            var classNames = element.classList;

            // 특정 문자열을 포함하는 클래스가 있는지 확인
            if (classNames && Array.from(classNames).some(className => className.includes('author'))) {
                // 배열에 클래스 추가
                console.log("aaaaa" + classNames);
                foundAuthor.push(classNames);
            }
        });

        // 확인된 클래스 배열 출력
        console.log('확인된 클래스 배열:', foundClasses[2]);
        for (var i = 0; i < foundClasses.length; i++) {
            //console.log('확인된 클래스 배열:', foundClasses[i].value);
            classNames.push(foundClasses[i].value);
            console.log(document.getElementsByClassName(classNames[i])[0].innerText);
            //console.log(document.getElementsByClassName(classNames[i])[0].id);

            console.log(document.getElementsByClassName(classNames[i])[0].innerHTML);
            document.getElementsByClassName(classNames[i])[0].innerText = "" // 기본 감지
        }





        for (var i = 0; i < foundfindParent.length; i++) {
            //console.log('확인된 클래스 배열:', foundClasses[i].value);
            //console.log(foundfindParent[i]);
            console.log(document.getElementsByClassName(foundfindParent[i])[0].innerText);
            console.log(document.getElementsByClassName(foundfindParent[i])[0].id);

            //console.log(document.getElementsByClassName(foundfindParent[i])[0].innerHTML);
            document.getElementsByClassName(foundfindParent[i])[0].innerText = "" // 대댓글 감지
            document.getElementsByClassName(foundfindParent[i])[i].innerHTML = "" // 대댓글 감지 2
        }

        for (var i = 0; i < foundAuthor.length; i++) {
            //console.log('확인된 클래스 배열:', foundClasses[i].value);
            //console.log(foundfindParent[i]);
            //console.log(document.getElementsByClassName(foundAuthor[i])[i].innerText);

            //console.log(document.getElementsByClassName(foundfindParent[i])[0].innerHTML);
            document.getElementsByClassName(foundAuthor[i])[i].innerText = "" // 글 목록의 닉네임 감지
        }

        var aaaa = [];
        // 대댓글 감지 안 되서 다시 한번 더
        var allElements = document.querySelectorAll('[class^="member"]');






        for (var i = 0; i < allElements.length; i++) {
            //console.log('확인된 클래스 배열:', foundClasses[i].value);
            //console.log(foundfindParent[i]);
            console.log(document.getElementsByClassName(allElements[i])[0].innerText);
            console.log(document.getElementsByClassName(allElements[i])[0].id);

            //console.log(document.getElementsByClassName(foundfindParent[i])[0].innerHTML);
            document.getElementsByClassName(allElements[i])[0].innerText = "" // 대댓글 감지
            document.getElementsByClassName(allElements[i])[i].innerHTML = "" // 대댓글 감지 2
        }




    }, 500)


})();

