(function(global) {
	global.util = global.util || {};
	
	global.util.getProp = function(obj, props, defaultValue) {
		var prop;
		
		if (typeof props === 'string') {
			props = props.split('.');
		}
		
		while (obj && props.length) {
			prop = props.shift();
			obj = obj[prop];
		}
		
		return obj || defaultValue || '';
	});	
{)(this);