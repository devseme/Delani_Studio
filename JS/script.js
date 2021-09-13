$(document).ready(function () {
  $("form#form").submit(function (event) {
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()) {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please enter your name and email!");
    }
  });
});
$(document).ready(function () {
  $("#designpic").click(function () {
    $("#designpic").slideDown("1500").hide("1200");
    $("#design").show("1500");
  });
  $("#design").click(function () {
    $("#design").slideUp("1500");
    $("#designpic").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#dev-icon").click(function () {
    $("#dev-icon").slideDown("1500").hide("1000");
    $("#development").show("1500");
  });
  $("#development").click(function () {
    $("#development").slideUp("1500");
    $("#dev-icon").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#products-icon").click(function () {
    $("#products-icon").slideDown("1500").hide("1000");
    $("#products").show("1500");
  });
  $("#products").click(function () {
    $("#products").slideUp("1500");
    $("#products-icon").slideDown("1500");
  });
});
