$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("font-weight", "bold");
  $("#greeting").text("Welcome to My Portfolio!");
  $(".lead").addClass("text-body-secondary");

  $("#light-theme").on("click", function () {
    $("html").attr("data-bs-theme", "light");
  });

  $("#dark-theme").on("click", function () {
    $("html").attr("data-bs-theme", "dark");
  });

  $("#hide").on("click", function () {
    $("#about-details").hide();
  });

  $("#show").on("click", function () {
    $("#about-details").show();
  });

  $("#toggle").on("click", function () {
    $("#about-details").toggle();
  });

  $("#fade-in").on("click", function () {
    $("#gallery img").fadeIn(500);
  });

  $("#fade-out").on("click", function () {
    $("#gallery img").fadeOut(500);
  });

  $("#fade-toggle").on("click", function () {
    $("#gallery img").fadeToggle(500);
  });

  $("#interests h3").next("div").hide();

  $("#interests h3").on("click", function () {
    $(this).next("div").slideToggle(400);
  });

  $("#slide-down").on("click", function () {
    $("#interests h3").next("div").slideDown(400);
  });

  $("#slide-up").on("click", function () {
    $("#interests h3").next("div").slideUp(400);
  });

  $("#add-skill").on("click", function () {
    var skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skill-list").append($("<li>").addClass("list-group-item").text(skill));
      $("#skill-input").val("");
    }
  });

  $("#prepend-skill").on("click", function () {
    var skill = $("#skill-input").val().trim();
    if (skill !== "") {
      $("#skill-list").prepend($("<li>").addClass("list-group-item").text(skill));
      $("#skill-input").val("");
    }
  });

  $("#remove-skill").on("click", function () {
    $("#skill-list li:last").remove();
  });

  $("#change-link").on("click", function () {
    $("#social-link").attr("href", "https://github.com/yerbolberdalin1/web-1---6assignment");
    $("#social-link").text("My portfolio repository");
  });

  $("#name, #email").on("input", function () {
    $("#live-name").text($("#name").val());
    $("#live-email").text($("#email").val());
  });

  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
  });

  $(".progress-bar").css("width", "0%");
  var skillsShown = false;

  $("#animate-skills").on("click", function () {
    if (skillsShown) {
      $(".progress-bar").animate({ width: "0%" }, 800);
      skillsShown = false;
    } else {
      $("#html-bar").animate({ width: "85%" }, 800);
      $("#js-bar").animate({ width: "65%" }, 800);
      $("#jquery-bar").animate({ width: "45%" }, 800);
      skillsShown = true;
    }
  });
});
