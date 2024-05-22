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

// ENTITY CONTROLS
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-patient") === "true") { $("#yale-medical-center-patient-entity").toggleClass(" show"); $("input#yale-medical-center-patient").prop("checked", true); } else { localStorage.setItem("yale-medical-center-patient", false); } }); $("input#yale-medical-center-patient").click(function () { $("input#yale-medical-center-patient").prop("checked", false); if (localStorage.getItem("yale-medical-center-patient") === "true") { $("input#yale-medical-center-patient").prop("checked", false); localStorage.setItem("yale-medical-center-patient", false); } else { $("input#yale-medical-center-patient").prop("checked", true); localStorage.setItem("yale-medical-center-patient", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-provider") === "true") { $("#yale-medical-center-provider-entity").toggleClass(" show"); $("input#yale-medical-center-provider").prop("checked", true); } else { localStorage.setItem("yale-medical-center-provider", false); } }); $("input#yale-medical-center-provider").click(function () { $("input#yale-medical-center-provider").prop("checked", false); if (localStorage.getItem("yale-medical-center-provider") === "true") { $("input#yale-medical-center-provider").prop("checked", false); localStorage.setItem("yale-medical-center-provider", false); } else { $("input#yale-medical-center-provider").prop("checked", true); localStorage.setItem("yale-medical-center-provider", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-caregiver") === "true") { $("#yale-medical-center-caregiver-entity").toggleClass(" show"); $("input#yale-medical-center-caregiver").prop("checked", true); } else { localStorage.setItem("yale-medical-center-caregiver", false); } }); $("input#yale-medical-center-caregiver").click(function () { $("input#yale-medical-center-caregiver").prop("checked", false); if (localStorage.getItem("yale-medical-center-caregiver") === "true") { $("input#yale-medical-center-caregiver").prop("checked", false); localStorage.setItem("yale-medical-center-caregiver", false); } else { $("input#yale-medical-center-caregiver").prop("checked", true); localStorage.setItem("yale-medical-center-caregiver", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-location") === "true") { $("#yale-medical-center-location-entity").toggleClass(" show"); $("input#yale-medical-center-location").prop("checked", true); } else { localStorage.setItem("yale-medical-center-location", false); } }); $("input#yale-medical-center-location").click(function () { $("input#yale-medical-center-location").prop("checked", false); if (localStorage.getItem("yale-medical-center-location") === "true") { $("input#yale-medical-center-location").prop("checked", false); localStorage.setItem("yale-medical-center-location", false); } else { $("input#yale-medical-center-location").prop("checked", true); localStorage.setItem("yale-medical-center-location", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-caregiver-assignment") === "true") { $("#yale-medical-center-caregiver-assignment-entity").toggleClass(" show"); $("input#yale-medical-center-caregiver-assignment").prop("checked", true); } else { localStorage.setItem("yale-medical-center-caregiver-assignment", false); } }); $("input#yale-medical-center-caregiver-assignment").click(function () { $("input#yale-medical-center-caregiver-assignment").prop("checked", false); if (localStorage.getItem("yale-medical-center-caregiver-assignment") === "true") { $("input#yale-medical-center-caregiver-assignment").prop("checked", false); localStorage.setItem("yale-medical-center-caregiver-assignment", false); } else { $("input#yale-medical-center-caregiver-assignment").prop("checked", true); localStorage.setItem("yale-medical-center-caregiver-assignment", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-patient-update") === "true") { $("#yale-medical-center-patient-update-entity").toggleClass(" show"); $("input#yale-medical-center-patient-update").prop("checked", true); } else { localStorage.setItem("yale-medical-center-patient-update", false); } }); $("input#yale-medical-center-patient-update").click(function () { $("input#yale-medical-center-patient-update").prop("checked", false); if (localStorage.getItem("yale-medical-center-patient-update") === "true") { $("input#yale-medical-center-patient-update").prop("checked", false); localStorage.setItem("yale-medical-center-patient-update", false); } else { $("input#yale-medical-center-patient-update").prop("checked", true); localStorage.setItem("yale-medical-center-patient-update", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-order-request") === "true") { $("#yale-medical-center-order-request-entity").toggleClass(" show"); $("input#yale-medical-center-order-request").prop("checked", true); } else { localStorage.setItem("yale-medical-center-order-request", false); } }); $("input#yale-medical-center-order-request").click(function () { $("input#yale-medical-center-order-request").prop("checked", false); if (localStorage.getItem("yale-medical-center-order-request") === "true") { $("input#yale-medical-center-order-request").prop("checked", false); localStorage.setItem("yale-medical-center-order-request", false); } else { $("input#yale-medical-center-order-request").prop("checked", true); localStorage.setItem("yale-medical-center-order-request", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-lab-request") === "true") { $("#yale-medical-center-lab-request-entity").toggleClass(" show"); $("input#yale-medical-center-lab-request").prop("checked", true); } else { localStorage.setItem("yale-medical-center-lab-request", false); } }); $("input#yale-medical-center-lab-request").click(function () { $("input#yale-medical-center-lab-request").prop("checked", false); if (localStorage.getItem("yale-medical-center-lab-request") === "true") { $("input#yale-medical-center-lab-request").prop("checked", false); localStorage.setItem("yale-medical-center-lab-request", false); } else { $("input#yale-medical-center-lab-request").prop("checked", true); localStorage.setItem("yale-medical-center-lab-request", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-nurse-call") === "true") { $("#yale-medical-center-nurse-call-entity").toggleClass(" show"); $("input#yale-medical-center-nurse-call").prop("checked", true); } else { localStorage.setItem("yale-medical-center-nurse-call", false); } }); $("input#yale-medical-center-nurse-call").click(function () { $("input#yale-medical-center-nurse-call").prop("checked", false); if (localStorage.getItem("yale-medical-center-nurse-call") === "true") { $("input#yale-medical-center-nurse-call").prop("checked", false); localStorage.setItem("yale-medical-center-nurse-call", false); } else { $("input#yale-medical-center-nurse-call").prop("checked", true); localStorage.setItem("yale-medical-center-nurse-call", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-patient-monitor") === "true") { $("#yale-medical-center-patient-monitor-entity").toggleClass(" show"); $("input#yale-medical-center-patient-monitor").prop("checked", true); } else { localStorage.setItem("yale-medical-center-patient-monitor", false); } }); $("input#yale-medical-center-patient-monitor").click(function () { $("input#yale-medical-center-patient-monitor").prop("checked", false); if (localStorage.getItem("yale-medical-center-patient-monitor") === "true") { $("input#yale-medical-center-patient-monitor").prop("checked", false); localStorage.setItem("yale-medical-center-patient-monitor", false); } else { $("input#yale-medical-center-patient-monitor").prop("checked", true); localStorage.setItem("yale-medical-center-patient-monitor", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-response") === "true") { $("#yale-medical-center-response-entity").toggleClass(" show"); $("input#yale-medical-center-response").prop("checked", true); } else { localStorage.setItem("yale-medical-center-response", false); } }); $("input#yale-medical-center-response").click(function () { $("input#yale-medical-center-response").prop("checked", false); if (localStorage.getItem("yale-medical-center-response") === "true") { $("input#yale-medical-center-response").prop("checked", false); localStorage.setItem("yale-medical-center-response", false); } else { $("input#yale-medical-center-response").prop("checked", true); localStorage.setItem("yale-medical-center-response", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-availability") === "true") { $("#yale-medical-center-availability-entity").toggleClass(" show"); $("input#yale-medical-center-availability").prop("checked", true); } else { localStorage.setItem("yale-medical-center-availability", false); } }); $("input#yale-medical-center-availability").click(function () { $("input#yale-medical-center-availability").prop("checked", false); if (localStorage.getItem("yale-medical-center-availability") === "true") { $("input#yale-medical-center-availability").prop("checked", false); localStorage.setItem("yale-medical-center-availability", false); } else { $("input#yale-medical-center-availability").prop("checked", true); localStorage.setItem("yale-medical-center-availability", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-delivery") === "true") { $("#yale-medical-center-delivery-entity").toggleClass(" show"); $("input#yale-medical-center-delivery").prop("checked", true); } else { localStorage.setItem("yale-medical-center-delivery", false); } }); $("input#yale-medical-center-delivery").click(function () { $("input#yale-medical-center-delivery").prop("checked", false); if (localStorage.getItem("yale-medical-center-delivery") === "true") { $("input#yale-medical-center-delivery").prop("checked", false); localStorage.setItem("yale-medical-center-delivery", false); } else { $("input#yale-medical-center-delivery").prop("checked", true); localStorage.setItem("yale-medical-center-delivery", true); } });
window.addEventListener("DOMContentLoaded", function () { if (localStorage.getItem("yale-medical-center-presence") === "true") { $("#yale-medical-center-presence-entity").toggleClass(" show"); $("input#yale-medical-center-presence").prop("checked", true); } else { localStorage.setItem("yale-medical-center-presence", false); } }); $("input#yale-medical-center-presence").click(function () { $("input#yale-medical-center-presence").prop("checked", false); if (localStorage.getItem("yale-medical-center-presence") === "true") { $("input#yale-medical-center-presence").prop("checked", false); localStorage.setItem("yale-medical-center-presence", false); } else { $("input#yale-medical-center-presence").prop("checked", true); localStorage.setItem("yale-medical-center-presence", true); } });

// ORIGINAL SCRIPTS
// window.addEventListener('DOMContentLoaded', function () {
//   if (localStorage.getItem('yale-medical-center-patient') === 'true') {
//     $('input#yale-medical-center-patient').prop('checked', true);
//   }
//   else {
//     localStorage.setItem('yale-medical-center-patient', false);
//   }
// });
// $('input#yale-medical-center-patient').click(function () {
//   $('input#yale-medical-center-patient').prop('checked', false);
//   if (localStorage.getItem('yale-medical-center-patient') === 'true') {
//     $('input#yale-medical-center-patient').prop('checked', false);
//     localStorage.setItem('yale-medical-center-patient', false);
//   }
//   else {
//     $('input#yale-medical-center-patient').prop('checked', true);
//     localStorage.setItem('yale-medical-center-patient', true);
//   }
// });

