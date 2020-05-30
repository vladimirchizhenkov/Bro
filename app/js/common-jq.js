$(document).ready(function() {

    var tab = $('#myTab');
    var num = tab.find('.nav-tabs li').length - 1;

    $('.next').click(function(){
        var cur = tab.find('li.active');
        var index = cur.index();

        if(index == num) {
            var next = tab.find('.nav-tabs').find('li').eq(0);
        }
        else {
            var next = cur.next('li');
        }

        next.find('a').tab('show');
    });

    $('.prev').click(function(){
        var cur = tab.find('li.active');
        var index = cur.index();

        if(index == 0) {
            var next = tab.find('.nav-tabs').find('li').eq(num);
        }
        else {
            var next = cur.prev('li');
        }

        next.find('a').tab('show');
    });
});