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
    var $errorName = $(".error-name");
    $error.text("");
    $errorName.text("");

    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
      $("#contact-form").sendForm();
      return true;
    } else if ($(".name").val() === "") {
      $errorName.fadeIn();
      $errorName.text("Name cannot be empty");
      return false;
    } else {
      $error.fadeIn();
      $error.text(email + " is not valid");
      return false;
    }
  }
}
