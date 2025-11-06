//Es una buena practica usar esta funcion antes de empezar cualquier codigo
$(document).ready(function(){
    $("h1").click(function(){
        $(this).hide();
    });
    $("p").hover(function(){
        $(this).hide();
    })
});

/*
    SINTAXIS -> $(selector).action()

    Selectores JQuery:
    $("*") -> All
    $(this) -> Current
    $("p.intro") -> p with class 'intro'
    $("p:first")
    $("ul li:first")
    $("ul li:first-child")
    $("[href]") -> All elements with href atribute
    $("a[target='_blank']")
    $("a[target!='_blank']")
    $(":button") -> Elements with type='button'
    $("tr:even")
    $("tr:odd")
*/