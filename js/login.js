$("#form-login").on("submit", function(event){
    event.preventDefault();

    var username = $("input[name=login-username]").val();
    var password = $("input[name=login-password]").val();
      
    var data = {
        peticion : 'verificar',
        username: username,
        password:  btoa(password)
    };

    $.ajax({
        type: "post",
        url: 'http://localhost/backend/signup.php',
        data: data,
        success: function(response) {
         
            if(response == 1){
                window.location = "principal.html";
                    
            }else{
                alert('has reprobado el semestre!');
            }      
        }
        
    });
    
});