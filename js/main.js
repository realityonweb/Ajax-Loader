/**
 * www.realityonweb.com
 * https://github.com/realityonweb/loader
 */
(function (APP, $, doc, undefined){
	APP.loader = (function(){
		function createLoader(Obj) {
			var layer = $("<div class='overlay'><div class='loader-container'><img src='img/preload.gif' alt='Loader' /></div></div>");

			var prop = $.extend({
				content : "",
				target : $('body')
			},Obj);
			layer.find('.loader-container').append(prop.content) ;
			prop.target.append(layer);
		}
		function deleteLoader() {
			$('.overlay').remove();
		}
		return {
			show: function(Obj) {
				deleteLoader();
				createLoader(Obj);
			},
			hide: function() {
				deleteLoader();
			}
		}
	})();
}(window.APP = window.APP || {}, jQuery, document));



