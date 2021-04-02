window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var myForm = document.getElementById("contact-form");
  var button = document.getElementById("contact-form-button");
  var status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks! Contact form is submitted successfully.";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event
  if (form != null) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, data, success, error);
    });
  }
});

// helper function for sending an AJAX request
function ajax(method, data, success, error) {
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString()
  }).then(() => success()).catch((error) => {
    console.log(error); error()})
}
