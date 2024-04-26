// COLOR MODE CONTROLS
window.addEventListener("DOMContentLoaded", function(theme) {
  if(localStorage.getItem("theme") === "true") {
    $("html").toggleClass("dark");
    $("input.switch").prop("checked",true);
  }
  else {
    localStorage.setItem("theme",false);
  }
});
$("input.switch").click(function() {
  $("html").toggleClass("dark");
  if(localStorage.getItem("theme") === "true") {
    $("input.switch").prop("checked",false);
    localStorage.setItem("theme",false);
  }
  else {
    $("input.switch").prop("checked",true);
    localStorage.setItem("theme",true);
  }
});


// CONTENT LIST SAMPLE
// $("li.content-sample").click(function () {
//   $(".content--details").addClass("show");
//   $("li.content-sample").addClass("selected");
// });

// $("span.back").click(function () {
//   $(".content--details").removeClass("show");
//   $("li.content-sample").removeClass("selected");
// });


// LOCATION SELECTION
// window.addEventListener("DOMContentLoaded", function (theme) {
//   localStorage.setItem('location', this.value);

//   $('#location').change(function () {
//     localStorage.setItem('location', this.value);
//   });
//   if (localStorage.getItem('location')) {
//     $('#location').val(localStorage.getItem('location'));
//   }

//   var locationTitle = localStorage.getItem("location");
//   document.getElementById("location-title").innerHTML = locationTitle;
// });