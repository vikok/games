;(function(){

	"use strict";
	$( "#tabs" ).tabs();

	tabs.on('click', 'div', function(){
		var clicked = $(this);
		show('.ba-tabs');


	});

})(jQuery);
