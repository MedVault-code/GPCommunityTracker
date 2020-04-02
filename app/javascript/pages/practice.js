window.Practice = {
  validate: function() {
    $(document).ready(function() {
      $("#btn-create-account").click(function(e) {
        var email = document.getElementById("practice_email").value
        var emailConfirmation = document.getElementById("practice_email_confirmation").value

        if(email != emailConfirmation) {
          e.preventDefault();
          alert('Email confirmation not matching.');
        }
      });
    })
  }
}

