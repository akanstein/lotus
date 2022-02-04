if (document.getElementById('nav-mobile-btn')) {
  document.getElementById('nav-mobile-btn').addEventListener('click', function () {
      if (this.classList.contains('close')) {
          document.getElementById('nav').classList.add('hidden');
          this.classList.remove('close');
      } else {
          document.getElementById('nav').classList.remove('hidden');
          this.classList.add('close');
      }
  });
}

$('#contact').on( 'submit' ,function(e){
  e.preventDefault()
      $.ajax({
         url: 'contact.php',
         method: 'POST',
         dataType: 'json',
         data: {
             name: $("#contact #name").val(),
             surname: $("#contact #surname").val(),
             email: $("#contact #email").val(),
             message: $("#contact #message").val(),
         }, success: function (response) {
              if (response.status == "success")
                  alert(response.response);
              else {
                  alert('Please Try Again!');
                  console.log(response);
              }
         }
      });

});

$('#newsletter').on( 'submit' ,function(e){
  e.preventDefault()
      $.ajax({
         url: 'newsletter.php',
         method: 'POST',
         dataType: 'json',
         data: {
             email: $("#newsletter #email").val(),
         }, 
         success: function (response) {
              if (response.status == "success")
                  alert(response.response);
              else {
                  alert('Please Try Again!');
                  console.log(response);
              }
         }
      });

});