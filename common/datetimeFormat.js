define([], function(){
    function datetimeFormat(d, f) {
        return f.replace(/(Y|m|d|H|i|s)/gi, function($1) {
            switch ($1) {
                case "Y": return d.getFullYear();
                case "m": return fillzero((d.getMonth() + 1),2);
                case "d": return fillzero(d.getDate(), 2);
                case "H": return fillzero(d.getHours(), 2);
                case "i": return fillzero(d.getMinutes(), 2);
                case "s": return fillzero(d.getSeconds(), 2);
                default: return $1;
            }
        });

        function fillzero(obj, len) {
            obj= '000000000000000'+obj;
            return obj.substring(obj.length-len);
        }
    };

    return datetimeFormat;
})