/*
         _   _   _         _                    
        | | (_) | |     __| |   ___    _ __ ___  
        | | | | | |    / _` |  / _ \  | '_ ` _ \ 
        | | | | | |   | (_| | | (_) | | | | | | |
        |_| |_| |_|    \__,_|  \___/  |_| |_| |_|

     ## Open Source Util For Scripting Dom Elements ##

*/

// SWITCH SYNTAX CONSTRUCTOR //

let dom = (function () {
  "use strict";
// create constructor
  let Constructor = function (selector) {
    if (!selector) return;
    if (selector === "document") {
      this.elems = [document];
    } else if (selector === "window") {
      this.elems = [window];
    } else {
      this.elems = document.querySelectorAll(selector);
    }
  };
// provide callback on each item
  Constructor.prototype.each = function (callback) {
    if (!callback || typeof callback !== "function") return;
    for (var i = 0; i < this.elems.length; i++) {
      callback(this.elems[i], i);
    }
    return this;
  };
// add class
  Constructor.prototype.aC = function (className) {
    this.each(function (item) {
      item.classList.add(className);
    });
    return this;
  };
// remove class
  Constructor.prototype.rC = function (className) {
    this.each(function (item) {
      item.classList.remove(className);
    });
    return this;
  };
// return
  let instantiate = function (selector) {
    return new Constructor(selector);
  };
  return instantiate;
})();

// DATA SWITCH CONSTRUCTOR //

(function() {
    'use strict';
// click event listener init
    document.addEventListener('click', DOMSwitch);
    function DOMSwitch(event){
// define btnSwitch as html data bind
     const btnSwitch = event.target.closest('[data-switch]');
// if a switch
      if( btnSwitch ) {
          event.preventDefault();
          let btnTarget = btnSwitch.getAttribute('data-switch');
          let btnClass = btnSwitch.getAttribute('data-class');
          try {
           document.querySelector(btnTarget).classList.toggle(btnClass);
          }
          catch (ey_error) {
           console.warn('lildom.js : that aint right. ERR 1, data-switch invalid');
          }
      }
      if ( !btnSwitch ) {
// impl data-roc (remove on click)
          let rocBlockTargets = document.querySelectorAll('[data-roc]');
            Array.from(rocBlockTargets).forEach.call(rocBlockTargets, function(rocBlockTarget){
                let rocBlock = rocBlockTarget.getAttribute('data-switch'), 
                    rocBlockClass = rocBlockTarget.getAttribute('data-class'); 
                    if( !event.target.closest(rocBlock) ) {
                        try {
                         document.querySelector(rocBlock).classList.remove(rocBlockClass);
                        }
                        catch (ey_error) {
                         console.warn('lildom.js : nope. just nope. ERR 2, data-roc invalid');
                        }
                    }
            });
      }
    }
  })()
