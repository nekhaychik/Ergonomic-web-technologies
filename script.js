function start() {
  $(".btn-submit").on("click", validate);

  function validateEmail(email) {
    var re =
      /^(([^<>()[\]\\.,;:+-\s@\"]+(\.[^<>()[\]\\.,;:+-\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function sendForm() {
    $(".error").text("Form sending").fadeIn();
  }

  function validate() {
    var email = $(".email").val();
    var $error = $(".error");
    $error.text("");

    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
      $("#contact-form").sendForm();
      return true;
    } else {
      $error.fadeIn();
      $error.text(email + " is not valid");
      return false;
    }
  }
}
