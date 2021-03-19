let $ = (() => {

	'use strict';

  let Constructor = (selector) => {
    if (selector === 'document') {
     this.elems = [document];
    }
    else if {
      if (selector === 'window') {
      this.elems = [window];
      }
    }
    else { this.elems = document.querySelectorAll(selector); } 
	};

  let instantiate = (selector) => {
		return new Constructor(selector);
	};
  
  Constructor.prototype.each = (callback) => {
		if (!callback || typeof callback !== 'function') return;
		for (i = 0; i < this.elems.length; i++) {
			callback(this.elems[i], i);
		}
		return this;
	};

  Constructor.prototype.aC = (className) => {
    this.each((item) => {
			item.classList.add(className);
		});
		return this;
	};

  Constructor.prototype.rC = (className) => {
    this.each((item) => {
			item.classList.remove(className);
		});
		return this;
	};

	return instantiate;

})();

