/**
 * switchBySize.js version 1.0
 * @version 1.0
 * @author matsukaze
 * @requires jQuery
 */
 
$.fn.extend({
	/**
	 * Switch CSS by window size interactively.
	 * @function
	 * @param {array} config Collection of rules of switching style by window size, containing formula.
	 * @example $(element).switchBySize([
	 * 	{rule:">=960", css:"style.css"},
	 * 	{rule:"<960", css:"style-narrow.css"}
	 * ]);
	 */
	switchBySize:function( config ){
		var styleobj = this,
			styledir = styleobj.attr("href").replace(/[^\/]+?$/,""),
			switchStyle = function(e){
				var i = config.length,
					w = String( $(e.target).width()),
					c;
				while(i--){
					c = config[ config.length - i - 1 ];
					if( eval( w + c.rule ) ){
						styleobj.attr( "href", styledir + c.css );
						break;
					}
				}
			};
		$(window).bind("resize", switchStyle);
		$(window).trigger("resize");
	}
});
