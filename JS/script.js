//alert function
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

//we do effects
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

//portfolio
$("#part-1")
    .mouseenter(function () {
        $("#shadow1").show("slow");
    })
    .mouseleave(function () {
        $("#shadow1").hide("slow");
    });
    $("#part-2")
    .mouseenter(function () {
        $("#shadow2").show("slow");
    })
    .mouseleave(function () {
        $("#shadow2").hide("slow");
    });
    $("#part-3")
    .mouseenter(function () {
        $("#shadow3").show("slow");
    })
    .mouseleave(function () {
        $("#shadow3").hide("slow");
    });
    $("#part-4")
    .mouseenter(function () {
        $("#shadow4").show("slow");
    })
    .mouseleave(function () {
        $("#shadow4").hide("slow");
    });
    $("#part-5")
    .mouseenter(function () {
        $("#shadow5").show("slow");
    })
    .mouseleave(function () {
        $("#shadow5").hide("slow");
    });
    $("#part-6")
    .mouseenter(function () {
        $("#shadow6").show("slow");
    })
    .mouseleave(function () {
        $("#shadow6").hide("slow");
    });
    $("#part-7")
    .mouseenter(function () {
        $("#shadow7").show("slow");
    })
    .mouseleave(function () {
        $("#shadow7").hide("slow");
    });
    $("#part-8")
    .mouseenter(function () {
        $("#shadow8").show("slow");
    })
    .mouseleave(function () {
        $("#shadow8").hide("slow");
    });