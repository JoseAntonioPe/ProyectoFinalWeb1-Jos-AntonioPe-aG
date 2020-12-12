$("#form-registro").on("submit", function(event){
    event.preventDefault();

    var nombreCompleto = $("input[name=form-nombreCompleto]").val();
    var username = $("input[name=form-username]").val();
    var password = $("input[name=form-password]").val();
    var tipoUsuario = $("select[name=form-tipoUsuario]").val();
    
    var data = {
        peticion : 'create',
        nombreCompleto : nombreCompleto,
        username: username,
        password:  btoa(password),
        tipoUsuario: tipoUsuario
    };

    $.ajax({
        type: "post",
        url: 'http://localhost/backend/usuario.php',
        data: data,
        success: function(response) {
            window.location.href = "login.html";
        }
        
    });
    
});