;(function(){

	"use strict";
	$(document).ready(function() {
  	$('#tabs').click(function(e) {
  	var currentValue = $(this);
//активируем необходимую вкладку и скрываем остальные
  	$('#tabs ' + currentValue).fadeIn(500).siblings().hide();
// добавляем и удаляем класс active для необходимого пункта меню
  	$(this).parent('li').addClass('active').siblings().removeClass('active');
  	e.preventDefault();
  	});
	});

})(jQuery);
