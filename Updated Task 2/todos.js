
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click On X to Delete li
$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  e.stopPropogation();
});
// adding new todo from input to ul
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //   grabbing new todo text from input
    var todoItem = $(this).val();
    $(this).val("");
    // Create anew li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoItem + "</li>"
    );
  }
});
$(".fa-plus-square").click(function () {
  $("input[type='text']").fadeToggle();
});