$(document).ready(function() {
  $(document).on('submit', '#login-form', function() {
    var data = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: './pages/php/login.php',
      data: data,
      success: function(response) {
        console.log(response);
		if(response === 'ok-you logged in'){
		window.location = 'loggedindex.php';
		}
	  else{
		  console.log(response);
		  alert('wrong identification');
		  }
	  }
    });
    return false;
  });
});
