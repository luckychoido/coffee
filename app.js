//------------Menu--------------

$(function () {
  $(".menu-btn").click(function () {
    // button color change on click
    $(".menu-btn").removeClass("btn-color");
    $(".menu-btn").removeClass("menu-first-btn-color");
    $(this).addClass("btn-color");
    // button dot on click show and others hide
    $(".menu-dot").hide();
    $("#dot" + $(this).attr("data-target")).show();
    // menu onclick show and others menu hide
    $(".menu").hide();
    $(".menu" + $(this).attr("data-target")).show();
  });
});
