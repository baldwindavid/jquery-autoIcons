// Copyright (c) 2010 David Baldwin (github.com/baldwindavid)

(function($) {
	
  $.fn.autoIcons = function(options) {
  	var opts = $.extend({}, $.fn.autoIcons.defaults, options);
  	var scope = this;
    $.each( $.fn.autoIcons.mapping, function(k, v) {
      $(scope).find(k).css("background-image", 'url(' + opts.prependPath + v + ')').addClass(opts.addClass);
    });
  };
  
  // default mapping for common document types
  // add more or override in onReady...
  // Example:  $.fn.autoIcons.mapping['a[href$=".my_extension"]'] = 'whatever.gif'
  $.fn.autoIcons.mapping = {
	  'a[href^="mailto:"]':'email.gif',
	  'a[href$=".pdf"]':'pdf.gif',
	  'a[href$=".doc"]':'doc.gif',
	  'a[href$=".docx"]':'doc.gif',
	  'a[href$=".xls"]':'xls.gif',
	  'a[href$=".xlsx"]':'xls.gif',
	  'a[href$=".ppt"]':'ppt.gif',
	  'a[href$=".zip"]':'zip.gif'
	};
	
  $.fn.autoIcons.defaults = {
		addClass: 'icon',
		prependPath: ''
	};	

})(jQuery);