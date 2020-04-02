
window.PracticeForm = {
  init: function() {
    $(document).ready(function() {
      $("#no_symptoms").change(function(e) {
        if (this.checked)
          $('.symptoms-checkbox').each(function() {
            this.checked = false;
          });
      })

      $('.symptoms-checkbox').change(function(e) {
        if (this.checked)
          $("#no_symptoms")[0].checked = false;
      })
    })
  }
}