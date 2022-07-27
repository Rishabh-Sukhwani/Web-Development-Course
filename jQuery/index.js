
$("button").click(function() {
    $("h1").css("color", "purple");
});

$(document).keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});