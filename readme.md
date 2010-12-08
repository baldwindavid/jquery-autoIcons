# jquery.autoIcons.js

The intent of this tiny plugin is to automatically add icons to links matching common extensions (pdf, doc, xls, etc.).  You can also easily add your own custom mappings.

## Requirements

- jquery
- jquery.autoIcons.js
- icon.css (or your custom css)
	
## Super Simple Example

### sample js...

  	<script type="text/javascript" charset="utf-8">
      $(function(){
        $("#main-content").autoIcons();
      });
  	</script>
  	
### ...and sample html
    <div id="main-content">
      <a href="somefile.doc">Link to Some Word doc</a>
    </div>
    
## Demo

The repo includes the demo files, but you can also view the demo at [http://baldwindavid.github.com/jquery-autoIcons/demo](http://baldwindavid.github.com/jquery-autoIcons/demo)

## Icon Set

Any icon set can be made to work with this plugin, but the examples in the demo are from the [Doctype Icons 2 set](http://www.brandspankingnew.net/archive/2006/06/doctype_icons_2.html)

## jquery.icon.js icon micro-framework

You might also find the [jquery.icon.js](http://github.com/baldwindavid/jquery-icon) icon micro-framework plugin helpful.