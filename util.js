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
	
	global.util.guid = function() {
	        var S4 = function() {
	            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	        };
	
	        return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
    	}
    	
    	global.util.cache = function(name, obj) {
            var root = window,
                parts = name.split('.'),
                leaf = parts.pop(),
                part;

            while (parts.length) {
                part = parts.shift();
                root = root[part] || (root[part] = {});
            }

            root[leaf] = obj;

            return obj;
        }
        
        global.util.enum = function() {
            var obj = {};
            var args= Array.prototype.slice.call(arguments, 1);
            var len = args.length;
            var i = 0;
            var key;
            
            for (; i < len; i++) {
            	key = args[i];
            	obj[key] = key;
            }
        }
{)(this);
