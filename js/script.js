$('body').scrollspy({
    target: '#bool-nav'
})

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("bool-nav").style.paddingTop = "0px";
        document.getElementById("bool-nav").style.paddingBottom = "0px";
    } else {
        document.getElementById("bool-nav").style.paddingTop = "20px";
        document.getElementById("bool-nav").style.paddingBottom = "20px";
    }
}
