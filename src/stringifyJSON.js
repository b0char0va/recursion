// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
    // your code goes here
    var result;
    if (obj === null) {                                                           // checks if input is null
        return 'null';
    } else if (typeof obj === 'number' || typeof obj === 'boolean') {            // checks if input is number or boolean
        result = '' + obj + '';
    } else if (typeof obj === 'string') {                                       // checks if input is a string
        result = '"' + obj + '"';
    } else if(Array.isArray(obj)){                                             //checks if input is an array
        if(obj.length>0){
            result = '[';
            for(var i = 0; i < obj.length; i++){
                result += stringifyJSON(obj[i]);
                if(i !== obj.length-1){
                    result+=',';
                }
            }
            result +=']';
        }else{
            result = '['+obj+']';
        }
    }else if (typeof obj === 'function' || typeof obj === 'undefined') {     //checks if input is a function or undefined
        result = '';
    } else if (typeof obj === 'object') {                                   // checks if input is an object
        if (obj === {}) {
            result = {};
        } else {
            result = "{";
            var allKeys = Object.keys(obj);
            for (var key in obj) {
                if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
                    result += stringifyJSON(key);
                    result += ":";
                }
                result += stringifyJSON(obj[key]);
                if (allKeys[allKeys.length - 1] !== key && result !== '{') {
                    result += ',';
                }
            }
            result += '}';
        }
    }
    return result;
};
