// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       CallingForIt
// @match        https://drawception.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/notz0ry/CallingForIt/master/main.js
// ==/UserScript==

(function() {
    'use strict';

    // Extracting Main Menu
    extractMainMenu();
    function extractMainMenu(){
        var leftbar = document.createElement("div");
        leftbar.className = "pull-right";
        document.getElementsByClassName("pull-left navbar-userbar")[0].appendChild(leftbar);
        let mainmenu = document.getElementById("main-menu").children;
        for( let i = 0; i < mainmenu.length; i++ ){
            let button = document.createElement("div");
            button.className = "pull-left navbar-userbar collapse navbar-collapse";

            let buttonA = document.createElement("a");
            buttonA.className = "btn btn-menu navbar-btn navbar-user-item";
            buttonA.href = mainmenu[i].href;

            let buttonSpan = document.createElement("span");
            buttonSpan.className = mainmenu[i].children[0].className;


            if( mainmenu[i].innerText == " Sandbox" ){
                buttonA.style.background = "rgb(160,160,233)";
                buttonA.onmouseover = function(){this.style.background = "rgb(170,170,243)";};
                buttonA.onmouseout = function(){this.style.background = "rgb(160,160,233)";};
                buttonSpan.className = "glyphicon glyphicon-edit";
            }

            buttonA.appendChild(buttonSpan);
            button.appendChild(buttonA);
            leftbar.appendChild(button);

        }
        mainmenu.outerHTML = "";
        document.getElementsByClassName("pull-left navbar-userbar")[0].children[0].outerHTML = "";
    }

    
    
})();