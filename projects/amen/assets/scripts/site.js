// COLOR MODE CONTROLS
window.addEventListener('DOMContentLoaded', function (theme) {
  if (localStorage.getItem('theme') === 'true') {
    $('html').toggleClass('dark');
    $('input#switch-theme').prop('checked', true);
  }
  else {
    localStorage.setItem('theme', false);
  }
});
$('input#switch-theme').click(function () {
  $('html').toggleClass('dark');
  if (localStorage.getItem('theme') === 'true') {
    $('input#switch-theme').prop('checked', false);
    localStorage.setItem('theme', false);
  }
  else {
    $('input#switch-theme').prop('checked', true);
    localStorage.setItem('theme', true);
  }
});

// TABS
$("li.tab-item button#tab-label-source").click(function() { $("li.tab-item button.is-active").removeClass("is-active").attr("aria-selected", false); $("li.tab-item button#tab-label-source").addClass("is-active").attr("aria-selected", true); $(".panels .panel.is-current").removeClass("is-current").attr("aria-hidden", true); $(".panels .panel#tab-panel-source").addClass("is-current").attr("aria-hidden", false); });
$("li.tab-item button#tab-label-mapping").click(function() { $("li.tab-item button.is-active").removeClass("is-active").attr("aria-selected", false); $("li.tab-item button#tab-label-mapping").addClass("is-active").attr("aria-selected", true); $(".panels .panel.is-current").removeClass("is-current").attr("aria-hidden", true); $(".panels .panel#tab-panel-mapping").addClass("is-current").attr("aria-hidden", false); });
$("li.tab-item button#tab-label-data").click(function() { $("li.tab-item button.is-active").removeClass("is-active").attr("aria-selected", false); $("li.tab-item button#tab-label-data").addClass("is-active").attr("aria-selected", true); $(".panels .panel.is-current").removeClass("is-current").attr("aria-hidden", true); $(".panels .panel#tab-panel-data").addClass("is-current").attr("aria-hidden", false); });
