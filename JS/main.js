
  $(document).ready( function() {
  /* ==================== SignUp link ======================= */
    let signIn = $('.SignIn')
    let signUp = $('.SignUp')
    console.log(signIn)

    $('#register-link').click(function(e){
      signUp.show()
      signIn.hide()
      e.preventDefault();
      document.title = 'Sign-Up'
    })

    $('#signIn-link').click(function(e){
      signIn.show()
      signUp.hide()
      e.preventDefault();
      document.title = 'Login'
    })


  });
