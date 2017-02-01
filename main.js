// ==UserScript==
// @name         (Dropbox) Calling for Canvas
// @namespace    http://7te.6te.net/callingforit/main.js
// @version      0.1.6
// @description  Canvas in anders
// @author       CallingForIt
// @match        https://drawception.com/*
// @grant        none
// @updateURL    http://7te.6te.net/callingforit/main.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("TM-START: Executing CallingForIt... ");

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
            if( mainmenu[i].innerText != " Home" ){
                buttonA.appendChild(buttonSpan);
                button.appendChild(buttonA);
                leftbar.appendChild(button);
            }
			createButton(function(){
				alert("miau");
			});
        }		
        mainmenu.outerHTML = "";
        document.getElementsByClassName("pull-left navbar-userbar")[0].children[0].outerHTML = "";

        function createButton(funct){
            let button = document.createElement("div");
            button.className = "pull-left navbar-userbar collapse navbar-collapse";
            
            let buttonA = document.createElement("a");
            buttonA.className = "btn btn-menu navbar-btn navbar-user-item";
            buttonA.onclick = funct;
            
            let buttonSpan = document.createElement("span");
            buttonSpan.className = mainmenu[i].children[0].className;

            buttonA.appendChild(buttonSpan);
            button.appendChild(buttonA);
            leftbar.appendChild(button);
        }
    }





    console.log("TM-END: Executing CallingForIt... ");
})();