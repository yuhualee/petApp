/* jshint devel:true */
'use strict';
/*global $:false, window:false */

// var Module = {
// 	pages: {}
// };


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
		imgScale($('.index-page .have-eat .box'),1);
		imgScale($('.index-page .yummy .img'),1);
	}

	reset();
	window.onresize = function(){
		reset();
	};
})();


// qa-ask
;(function(){
	$('.qa-ask .baby .add-btn').click(function(){
		$('.qa-ask .baby .add').show();
	});
	var oLis = $('.question .type .label');
	oLis.each(function(){
		$(this).unbind();
		$(this).bind('touchstart',function(){
			if($(this).hasClass('select')){
				$(this).data('touch','');
			}else{
				$(this).data('touch',true);
			}
		});
		$(this).bind('touchend',function(){
			if($(this).data('touch')){
				$(this).addClass('select');
			}else{
				$(this).removeClass('select');
			}
		});
	});

})();