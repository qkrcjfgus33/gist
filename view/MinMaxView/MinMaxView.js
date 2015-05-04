define(['tpl!/view/MinMaxView/alram.tpl'], 
    function(alramTpl){

    function MinMaxView(selector) {
        this.draw               = draw;

        var $container = $(selector);
        var DOMContainer = $container[0];

        function draw(option){
            $container.html(alramTpl({}));
        }
    }

    return MinMaxView;
});