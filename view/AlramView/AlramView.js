define(['tpl!/view/AlramView/alram.tpl'], 
    function(alramTpl){

    function AlramView(selector) {
        this.draw   = draw;
        this.alert  = alert;

        var $container = $(selector);
        var DOMContainer = $container[0];
        var $IO;

        function draw(option){
            $container.html(alramTpl({}));
            $IO = $container.find('[alram]');
        }

        function alert(text){
            $IO.val(text);
        }
    }

    return AlramView;
});