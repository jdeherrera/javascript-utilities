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
    	};
    	
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
        };
        
        global.util.enumeration = function() {
            var obj = {};
            var args= Array.prototype.slice.call(arguments, 1);
            var len = args.length;
            var i = 0;
            var key;
            
            for (; i < len; i++) {
            	key = args[i];
            	obj[key] = key;
            }
        };
        
        global.util.camelCase = function(s) {
            return s.toLowerCase().replace(/(\-|_|\.|\s)+(.)?/g, function(match, p1, p2) {
                // p1 is the first character of the word or a separator character.
                // p2 is the character following p1
                return (p2 ? p2.toUpperCase() : '');
            });
        };
        
        global.util.capitalize = function(s) {
            return s.charAt(0).toUpperCase() = s.slice(1);
        };
        
        global.util.formatString = function(string) {
            var args = Array.prototype.slice.call(arguments, 1);

            return string.replace(/\{(\d+)\}/g, function(match, index) {
                return args[+index] || '';
            });
        };
{)(this);
