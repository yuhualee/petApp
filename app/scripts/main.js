/* jshint devel:true */
'use strict';
/*global $:false, window:false */

var Module = {
	pages: {}
};

Module.pages.fn = function(){
	return function fn(){
	};
}



//image scale
;(function(){
	function imgScale(objs,scale){
		if(typeof objs === 'object' && typeof scale === 'number'){
			$(objs).each(function(){
				var w = parseInt($(this).width());
				$(this).height(parseInt(w*scale));
			});
		}
	}
	// play-story
	function reset(){
		imgScale($('.qa .top-banner'),1);
		// imgScale($('.weekly-star .img'),0.7);
	}

	reset();
	window.onresize = function(){
		reset();
	};
})();


