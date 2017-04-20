jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
return this;
}

$("div.mandala").center(true);
$("div.mandala2").center(true);
$("div.mandala3").center(true);

$(function() {
    var $this_id = $("div.mandala"), $this_id2 = $("div.mandala2"), $this_id3 = $("div.mandala3"), degree = 0,  degree2 = 0, degree3 = 0,timer;
    rotate();
    rotate2();
    rotate3();
    function rotate() {
        $this_id.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        $this_id.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
        timer = setTimeout(function() {
            degree += 0.1; rotate();
        },20);
    };

    function rotate2() {
        $this_id2.css({ WebkitTransform: 'rotate(' + degree2 + 'deg)'});
        $this_id2.css({ '-moz-transform': 'rotate(' + degree2 + 'deg)'});
        timer = setTimeout(function() {
            degree2 -= 0.3; rotate2();
        },20);
    };
    function rotate3() {
        $this_id3.css({ WebkitTransform: 'rotate(' + degree3 + 'deg)'});
        $this_id3.css({ '-moz-transform': 'rotate(' + degree3 + 'deg)'});
        timer = setTimeout(function() {
            degree3 += 0.5; rotate3();
        },20);
    };
});


